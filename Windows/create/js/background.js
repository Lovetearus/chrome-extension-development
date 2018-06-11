function notification(id) {
    chrome.notifications.create({
        type: 'basic',
        title: "good news",
        message: id,
        iconUrl: "images/accept.png"

    })
}

function deleteTab() {
    chrome.tabs.getSelected(function(tab) {
        chrome.tabs.remove(tab.id)
    })
}
chrome.runtime.onMessage.addListener(function(re, send, response) {
    if (re.cmd == 'deleteTab') { deleteTab() }
})