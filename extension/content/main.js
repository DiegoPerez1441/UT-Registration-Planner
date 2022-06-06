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
let courseListArray = [
    {
        name: "Course 1",
        professor: "Example Professor 1",
        uid: "001"
    },
    {
        name: "Course 2",
        professor: "Example Professor 2",
        uid: "002"
    },
    {
        name: "Course 2",
        professor: "Example Professor 3",
        uid: "003"
    },
]

chrome.storage.sync.set({ userCourseList: courseListArray }, () => {
    console.log("Successfully added courseListArray to Chrome Storage.")
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
    chrome.storage.sync.set({userCourseList: courseListArray})

})