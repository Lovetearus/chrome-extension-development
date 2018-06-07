let winId = ''
chrome.windows.create({
    url: "https://google.com"
}, function(win) {
    winId = win.windowId
})

function notification(str) {
    chrome.notifications.create({
        type: 'basic',
        title: "good news",
        message: str,
        iconUrl: "images/accept.png"

    })
}
let createWindowInfo = { windowId: winId }
chrome.windows.onCreated.addListener(function(createWindowInfo) {

    notification("oh my god ..some body is borning")
})