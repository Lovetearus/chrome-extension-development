let urls = [],
    arrfortemp = []
let showUrls, windowsIds = []
let index = "http://www.xingqiu.tv/index.html"
let w, h, activeW, activeH
const column = 4,
    row = 3
let docker = column * row
let windCounter = 0
let hrefToUrl = {}

let allZhuoboArray = []
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
        let hrefFromIndexActiveZhuo = request.value //1 2 3 4        
        if (urls.indexOf(hrefFromIndexActiveZhuo) < 0) {
            urls.push(hrefFromIndexActiveZhuo) //1234 
            chrome.windows.create({
                url: hrefFromIndexActiveZhuo,
                width: 330,
                height: 600,
                top: 0,
                left: 1400
            }, function(win) {
                hrefToUrl.hrefFromIndexActiveZhuo.id = win.id

            })
        }
    }



    if (request.cmd == 'zhubo') {
        let arrayForPing = request.value

        if (arrfortemp.indexOf(arrayForPing) < 0) {
            arrfortemp.push(arrayForPing)

            if (arrayForPing[arrayForPing.length - 1] == '2') {


                notification(" " + request.id + " Ping la!!!")
            }

            if (request.middle == '1,6,1') {


                notification(" 1-------6666666!")
            }

        }


    }

    if (request.cmd == "highlight") {
        let highlight = request.value

        if (urls.indexOf(highlight) > 0) {
            chrome.windows.update(hrefToUrl.highlight.id, {
                top: 0,
                left: 700,
                focused: true
            })
        }
    }



})