let id
chrome.windows.getCurrent((win) => {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
        tabs.forEach((element) => {

            console.info(Object.keys(element))
        });
        id = tabs[0].id

    })

})

function start() {
    chrome.browserAction.getTitle({ tabId: id }, (str) => {
        console.log(str, "title: ", id)
    })
    console.log("You just click the icon")
    if (!badge) { setBadge() } else { disBadge() }
    chrome.windows.create({
        url: ['background.html'],
        state: "maximized"
    })
    badge = !badge
}

function setBadge() {
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] })
    chrome.browserAction.setBadgeText({ text: '----' })

}

function disBadge() {
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 0] })
    chrome.browserAction.setBadgeText({ text: '' })

}
let badge = false
chrome.browserAction.onClicked.addListener(start)
chrome.browserAction.setPopup({ "tabId": id, "popup": "popup.html" })