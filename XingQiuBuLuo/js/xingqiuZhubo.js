$(function() {
    let id = document.getElementById("liveRoom").dataset.liveid
    let name = document.head.getElementsByTagName('title')
    let text = name[0].innerHTML


    $('#livePlayer,#liveState,.luckyStar').remove()
    $(".right,#toolbar,header,footer,.live-interact,.live-anchor-ranking,.chip-assist").remove()
    $('.play').css({
        "position": "absolute",
        "top": "0px",
        "width": "500px",
        "height": "206px",
        "z-index": "999",
        "opacity": "0.8"
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
    let arr = []
    setInterval(function() {
        $('.luckyStar').remove()
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = "document.body.setAttribute('data-fp', window.result.result)"
        document.head.appendChild(script);
        document.head.removeChild(script);
        var script2 = document.createElement('script');
        script2.type = 'text/javascript';
        script2.innerHTML = "document.body.setAttribute('data-fq', window.result.community_cards[0])"
        document.head.appendChild(script2);
        document.head.removeChild(script2);









        let temp = document.body.getAttribute('data-fp'); //string
        let temp2 = document.body.getAttribute('data-fq'); //num
        var paimian = new Array('A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K');
        var huase = new Array('fang', 'mei', 'hong', 'hei');
        let num = Number(temp2)
        temp2 = temp2 + huase[num % 4] + paimian[parseInt(num / 4)];
        while (temp2.length < 9) {
            temp2 = " " + temp2
        }
        temp = temp2 + '=>' + temp

        if (temp != arr[arr.length - 1] && temp != null) {
            let li = document.createElement('li')
            li.style.width = '230'
            li.style.textAlign = 'right'
            let text = document.createTextNode(temp)
            if (temp[temp.length - 1] == '2') {
                li.style.color = 'yellow'
                li.style.fontSize = '33'
                chrome.runtime.sendMessage(id + text + "  :" + temp2)

            } else if (temp[temp.length - 1] == '1') {
                li.style.color = '#e88116'


            } else {
                li.style.color = "#1643e8"

            }
            li.appendChild(text)
            ul.insertBefore(li, ul.firstChild)

            arr.push(temp);

        }

    }, 400);
})