let arr = []
let resultObj = { result: "", community_cards: "" }
let tempTail

function getResult() {

    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = "document.body.setAttribute('data-result',window.result.result)"
    document.head.appendChild(script)
    document.head.removeChild(script)
    let script1 = document.createElement('script')
    script1.type = 'text/javascript'
    script1.innerHTML = "document.body.setAttribute('data-community',window.result.community_cards)"
    document.head.appendChild(script1)
    document.head.removeChild(script1)

    resultObj.community_cards = document.body.getAttribute('data-community')
    resultObj.result = document.body.getAttribute('data-result')

    if ((arr.length < 1 || arr[arr.length - 1].community_cards !=
            resultObj.community_cards) && resultObj.result.length > 0) {
        arr.push(resultObj)

    }
    let cutdownTime = document.getElementsByClassName('countdown')[0].textContent
    if (resultObj.result.length > 0) { tempTail = resultObj.result.slice(resultObj.result.length - 1) }

    let cat = document.getElementsByClassName('jChipshow')[0]
    let mouse = document.getElementsByClassName('jChipshow')[2]
    let equals = document.getElementsByClassName('jChipshow')[1]

    let t = Number(cutdownTime)
    let money = Number(document.getElementsByClassName('my-coin').textContent)
    let endtimes = Math.floor(money / 200)
    let xingyun = document.getElementsByClassName('swiper-lazy swiper-lazy-loaded')[1]
    xingyun.click()
    let songli = document.getElementById('jSendGift').click()
    if (t > 1 && t < 5) {
        if (tempTail == "0") {
            for (let count = 0; count < endtimes; count++) { cat.click() }

        }
        if (tempTail == "1") {
            for (let count = 0; count < endtimes; count++) { mouse.click() }

        }
        if (tempTail == "2" || arr.length < 7) { //20000000
            for (let count = 0; count < endtimes; count++) { equals.click() }

        }
    }

}

setInterval(getResult, 5000)