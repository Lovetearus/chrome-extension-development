let deleteUrl = ["https://a.xingqiu.tv/activity/gongzhonghaolingjiang.html", "http://www.xrccp.com/qq.html"]


setInterval(() => {


    chrome.tabs.query({}, function(tabs) {
        for (let i = 0; i < tabs.length; i++) {
            if (deleteUrl.indexOf(tabs[i].url) > -1) { chrome.tabs.remove(tabs[i].tabId) }
        }
    })
}, 3000)