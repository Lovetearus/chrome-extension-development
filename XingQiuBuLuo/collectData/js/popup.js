let button = $('#maoshu')
button.css({
    "background": "green",
    "border-radius": "20",
    "color": "white",
    "font-size": '44'
})
button.on('click', function() {

    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] })

    chrome.browserAction.setBadgeText({ text: 'qiu_' })

    // chrome.tabs.executeScript({
    //     file: 'js/resort.js'
    // })
})


function getCurrentId(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (callback) {
            callback(tabs.length ? tabs[0].id : null)
        }
    })
}
$('#createTab').on('click', function() {
        chrome.tabs.create({
            index: 3,
            // windowId: 2,
            active: false,
            url: 'http://baidu.com',
            //pinned: true,

            // opennerId: 4,

        })
    })
    // let windowObj = {
    //     id,
    //     sessionId,
    //     url,
    //     tabs,

//     focused,
//     setSelfAsOpener,
//     alwaysOnTop,
//     incognitor,

//     type,
//     state,
//     top,
//     left,
//     width,
//     height,
// }
$('#createWindow').on('click', function() {

    let bg = chrome.extension.getBackgroundPage()
    bg.createWindow(["http://xingqiu.tv/"])
})

let c = 0;
$('#updateTab').on('click', function() {

    let url = `http://www.xingqiu.tv/${c+1}.html`
    let urls = 'http://www.xingqiu.tv/'
    c = c + 1;
    getCurrentId(tabId => {
        chrome.tabs.update(tabId, {
            url: url
        })

    })
})

$('#closeCurrentTab').on('click', function() {
    chrome.tabs.remove(getCurrentId)
})
$('#deleteAd').on('click', function() {

    chrome.tabs.executeScript({
        file: 'js/deleteAd.js'
    })

})