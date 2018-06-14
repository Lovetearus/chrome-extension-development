$(function() {
    let id = document.getElementById("liveRoom").dataset.liveid
    let name = document.head.getElementsByTagName('title')
    let text = name[0].innerHTML
    let l
    let button = document.createElement('div')
    button.textContent = l | '0'
    button.className = 'button'
    document.body.appendChild(button)

    $('#livePlayer,#liveState,.luckyStar').remove()
    $(".right,#toolbar,header,footer,.live-anchor-ranking").remove()
    $('.play').css({
        "position": "absolute",
        "top": "0px",
        "width": "500px",
        "height": "206px",
        "z-index": "999",
        "opacity": "0.8"
    })
    $('.button').css({
        "position": "absolute",
        "top": "22px",
        "left": "157px",
        "z-index": "999",
        "opacity": "0.8",
        "background": "brown",
        "border-radius": "50%",
        "color": "white"
    })
    $(".catmouse+.countdown,.prompt,.show").css({
        "top": "30px",
    })

    $('#jPokerCenter > li:nth-child(1)').css({
        "opacity": "1",

    })

    let ul = document.createElement('ol')

    ul.style.cssText = 'position:absolute;font-size:24px;z-index:99999;background:rgba(255,255,255,0.5);left:40px;top:33px'
    let body = document.body
    body.insertBefore(ul, body.firstChild)
    let zhuboaaray = []

    let temparr = []
    setInterval(function() {

        $('.luckyStar').remove()
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = "document.body.setAttribute('data-fp', window.result.result)"
        document.head.appendChild(script);
        document.head.removeChild(script);
        var script2 = document.createElement('script');
        script2.type = 'text/javascript';
        script2.innerHTML = "document.body.setAttribute('data-fq', window.result.community_cards)"
        document.head.appendChild(script2);
        document.head.removeChild(script2);

        let lastResult = document.body.getAttribute('data-fp'); //2,0,1
        let middle = document.body.getAttribute('data-fq'); //1,2,3,4,5
        var paimian = new Array('A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K');
        var huase = new Array('fang', 'mei', 'hong', 'hei');
        let temp = middle.toString().split(',')
        let paifirst = temp[0]
        let num = Number(paifirst)
        if (middle.length > 1) {
            if (zhuboaaray == [] || zhuboaaray[zhuboaaray.length - 1] != middle) {
                let li = document.createElement('li')
                li.style.width = '250'
                li.style.textAlign = 'right'
                let text = document.createTextNode(paifirst + huase[num % 4] +
                    paimian[parseInt(num / 4)] + '=>' + lastResult)
                if (lastResult[lastResult.length - 1] == '2') {
                    li.style.color = 'yellow'
                    li.style.fontSize = '38'
                    l = 0
                    chrome.runtime.sendMessage({ cmd: "highlight", value: location.href })

                } else if (lastResult[lastResult.length - 1] == '1') {
                    li.style.color = '#e88116'
                } else {
                    li.style.color = "#1643e8"
                }
                li.appendChild(text)
                l = l + 1;
                button.textContent = l | '0'
                ul.insertBefore(li, ul.firstChild) //1984-6-2-18-34-15-123: id5854555 32  2,0,1  12,13,55,44,45           
                zhuboaaray.push(middle)
                chrome.runtime.sendMessage({ cmd: "zhubo", value: middle + lastResult, id: id, middle: lastResult })
            }
        }
    }, 500);
})