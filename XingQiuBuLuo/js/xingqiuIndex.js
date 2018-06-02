let arr = []

function sendMessage() {
    chrome.runtime.sendMessage({ cmd: 'send', value: arr },
        (response) => {
            console.log("background recieved : " + response)
        })
}

function getHref() {
    let lia = $('.live li[data-game=1004]>a')
    for (let i = 0; i < lia.length; i++) {
        let href = lia[i].href
        if (arr.indexOf(href) < 0) {
            arr.push(href)
        }
    }
}
$(function() {
    setInterval(() => {
        setTimeout(function() {
            document.getElementById('jRecommend').click()
            $(".right,#toolbar,header,footer").remove()

            $('.live li[data-game!=1004]').remove()
            $('.live li').css({
                float: 'left',
                width: "180px",
                height: "208px"
            })
        }, 500)

        getHref()
        sendMessage()
    }, 3000)
})
setTimeout(() => {
    location.href = 'http://www.xingqiu.tv/index.html'
}, 25000);