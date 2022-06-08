// Sample chrome.storage.sync use
// chrome.storage.sync.set({ key: value }, function () {
//   console.log("Value is set to " + value);
// });

// chrome.storage.sync.get(["key"], function (result) {
//   console.log("Value currently is " + result.key);
// });

// chrome.storage.sync.set({ storageTestItem: "Test item set in main.js" }, () => {
//     console.log("Value is set to \"Test item set in main.js\"")
// })

// Color course uid text to a "burnt orange" color
$("td[data-th='Unique']").children("a").css("color", "#bf5700")


// Prefill the user course list with example courses
// let courseListArray = [
//     {
//         name: "Course 1",
//         professor: "Example Professor 1",
//         uid: "001"
//     },
//     {
//         name: "Course 2",
//         professor: "Example Professor 2",
//         uid: "002"
//     },
//     {
//         name: "Course 3",
//         professor: "Example Professor 3",
//         uid: "003"
//     }
// ]

let courseListArray = []

chrome.storage.sync.get(["userCourseList"], (data) => {
    // courseListArray = data["userCourseList"]
})

$("tr").find(".course_header h2").click(function() {
    // console.log(this.innerText)

    let courseName = this.innerText

    let course = {
        name: courseName,
        professor: "Example Professor",
        uid: "uid"
    }

    if (!courseListArray.includes(course)) {
        courseListArray.push(course)
        console.log(course)
    } else {
        // break out of function early
        return
    }

    // Get course info
    // Check for duplicates
    // Set to chrome storage
    // This resets everytime the page is refreshed or loaded (overwrites old data)
    chrome.storage.sync.set({ userCourseList: courseListArray }, () => {
        console.log("Successfully added courseListArray to Chrome Storage.")
    })

})

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

const parseCourseInfo = (row) => {
    let {
        name,
        fullName
    } = separateCourseFullText("C S 312 INTRODUCTION TO PROGRAMMING")

    let course = {
        name: name,
        fullName: fullName,
        instructor: getCourseText(row, "td[data-th='Instructor']"),
        uid: getCourseText(row, "td[data-th='Unique']"),
        status: getCourseText(row, "td[data-th='Status']"),
        // time: time
    }
    console.log(course)
}

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