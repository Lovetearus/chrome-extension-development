let urls = []
let showUrls, windowsIds = []
let index = "http://www.xingqiu.tv/index.html"
let w, h, activeW, activeH
const column = 4,
    row = 3
let docker = column * row
let windCounter = 0

chrome.windows.create({
    url: [index],
    type: 'popup',
    state: 'maximized'
}, function(win) {
    w = win.width
    h = win.height
    activeW = Math.floor(w / column)
    activeH = Math.floor(h / row)
})

function notification(message) {
    chrome.notifications.create(null, {
        type: 'basic',
        message: message,
        title: "surprise !",
        iconUrl: "images/0.png"
    })
}
chrome.runtime.onMessage.addListener(function(request, sender, sendReponse) {
    if (request.cmd == 'send') {
        let arrayURLSFromIndex = request.value //1 2 3 4



        for (let i = 0; i < arrayURLSFromIndex.length; i++) {
            if (urls.indexOf(arrayURLSFromIndex[i]) < 0) {

                let windIndex = windCounter % docker
                let mod = windCounter % column
                let rev = Math.floor((windCounter) / row)
                chrome.windows.create({
                    url: [arrayURLSFromIndex[i]],
                    type: 'popup',
                    width: activeW,
                    height: activeH * 2,
                    top: mod * activeW,
                    left: (column - rev) * activeH
                }, function(win) {
                    windowIds[indexs] = win.windowId
                })
                urls.push(arrayURLSFromIndex[i]) //1234
                windCounter++
            }
        }





    }
    if (typeof request === 'string') {
        notification(request + " Ping la!!!")
    }
    sendReponse("got the urls...hold on ")
})