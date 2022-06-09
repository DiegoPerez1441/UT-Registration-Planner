// Reads all data out of storage.sync and exposes it via a promise.
//
// Note: Once the Storage API gains promise support, this function
// can be greatly simplified.
const getStorage = async (key) => {
    // Immediately return a promise and start asynchronous work
    return new Promise((resolve, reject) => {
        // Asynchronously fetch all data from storage.sync.
        chrome.storage.sync.get([key], (data) => {
            // Pass any observed errors down the promise chain.
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError)
            }
            // Pass the data retrieved from storage down the promise chain.
            resolve(data[key])
        })
    })
}

// kv = {key: value}
const setStorage = async (kv) => {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.set(kv, () => {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError)
            }

            resolve(kv)
        })
    })
}


let courseListArray = []

const objInArray = (obj, arr, property) => {
    const result = arr.some((element) => {
        if (element[property] === obj[property]) {
            return true
        }

        return false
    })

    return result
}

const addCourseToStorage = async(course) => {
    if (objInArray(course, courseListArray, "uid")) {
        console.log(`[${course.uid}]${course.name} already in your course list.`)
        return
    }

    courseListArray.push(course)
    try {
        await setStorage({ userCourseList: courseListArray })
    } catch (error) {
        console.warn(error)
    }

}

const getCourseText = (row, className) => {
    let element = $(row).find(className).text()
    let info = $.trim(element)

    if (info === "") {
        return "n/a"
    } else {
        return info
    }
}

const separateCourseFullText = (text) => {
    let courseFullName = text
    let courseSubject = text.match(/.+?\d{3}[^ ]?/)
    let courseName = text - courseSubject

    return {
        name: courseSubject[0],
        fullName: courseFullName
    }
}

const buildCourseTimeObject = (row) => {

    let time_obj = {}
    const numDays = $(row).find("td[data-th='Days']").children().length > 2

    if (numDays) {
        time_obj = {
            regular: {
                days: getCourseText(row, "td[data-th='Days'] span:first-child"),
                hour: getCourseText(row, "td[data-th='Hour'] span:first-child"),
                room: getCourseText(row, "td[data-th='Room'] span:first-child")
            },
            additional: {
                days: getCourseText(row, "td[data-th='Days'] span.second-row"),
                hour: getCourseText(row, "td[data-th='Hour'] span.second-row"),
                room: getCourseText(row, "td[data-th='Room'] span.second-row")
            }
        }
    } else {
        time_obj = {
            regular: {
                days: getCourseText(row, "td[data-th='Days'] span:first-child"),
                hour: getCourseText(row, "td[data-th='Hour'] span:first-child"),
                room: getCourseText(row, "td[data-th='Room'] span:first-child")
            }
        }
    }

    return time_obj
}

const parseCourseInfo = (row) => {

    courseNameRow = $(row).prevAll().find(".course_header h2").last()

    // Replace double space in name bug with single space
    courseFullName = courseNameRow.text().replace(/\s\s/, " ")
    // console.log(courseFullName)

    let {
        name,
        fullName
    } = separateCourseFullText(courseFullName)

    let time_obj = buildCourseTimeObject(row)
    console.log(time_obj)

    let course = {
        uid: Number(getCourseText(row, "td[data-th='Unique']")),
        name: name,
        fullName: fullName,
        time: time_obj,
        mode: getCourseText(row, "td[data-th='Instruction Mode']"),
        instructor: getCourseText(row, "td[data-th='Instructor']"),
        status: getCourseText(row, "td[data-th='Status']"),
    }

    addCourseToStorage(course)
    // console.log(course)
}

// Color course uid text to a "burnt orange" color
$("td[data-th='Unique']").children("a").css("color", "#bf5700")

// Append "UTRP" at the end of every course row
$(".rwd-table").find("tr").each(function () {
    if (!($(this).find("td").hasClass(("course_header")))) {
        if (!($(this).parent("thead").length)) {
            $(this).append(`<td class="UTRP_button" style="color: #bf5700">UTRP</td>`)
        } else {
            // Add table header for UTRP button
            $(this).append(`<th scope="col">UTRP</th>`)
        }
    }
})

$(".UTRP_button").click(function () {
    let courseRow = $(this).closest("tr")
    parseCourseInfo(courseRow)
})