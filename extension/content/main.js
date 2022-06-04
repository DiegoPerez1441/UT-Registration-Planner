// Sample chrome.storage.sync use
// chrome.storage.sync.set({ key: value }, function () {
//   console.log("Value is set to " + value);
// });

// chrome.storage.sync.get(["key"], function (result) {
//   console.log("Value currently is " + result.key);
// });

chrome.storage.sync.set({ storageTestItem: "Test item set in main.js" }, () => {
    console.log("Value is set to \"Test item set in main.js\"")
})

$("td[data-th='Unique']").children("a").css("color", "#bf5700");
