const betArray1 = [15, 45, 110, 240, 520, 1110]
const betArray = [1, 2, 4, 3, 5, 7]
const whenMoneyMoreThan = 100
    //15  30  50 70 110 180
let one = $('.i a')[0]
let two = $('.ii a')[0]
let three = $('.iii a')[0]
let four = $('.iv a')[0]
let five = $('.v a')[0]

let enter = $('.commitbtn')[0]
let reset = $('.resetbtn')[0]


function bet(num) {
    let one1 = num % 10
    for (let i = 0; i < one1; i++) {
        one.click()
    }
    let one11 = Math.floor(num / 10)
    for (let i = 0; i < one11; i++) {
        two.click()
    }
    let one2 = Math.floor(num / 100)
    for (let i = 0; i < one2; i++) {
        three.click()
    }
    let one3 = Math.floor(num / 1000)
    for (let i = 0; i < one3; i++) {
        four.click()
    }
    let one4 = Math.floor(num / 10000)
    for (let i = 0; i < one4; i++) {
        five.click()
    }

}

let resultArr = []
let indexArr = []
let count = 0

function sleep(milliseconds) {
    let s = new Date().getTime()
    while (new Date().getTime() - s < milliseconds) { let i = 9 }
}


$("#_leftAD,#_rightAD").remove()
$(".img-login-refresh").click()
let initMoney = ($(".refreshM")[0].textContent) * 1
console.log(initMoney)
$("._ele-unknown").remove()
let betMoney = setInterval(() => {
    console.log(initMoney)
    let lastResultIndex = Number($('#last_qihao').text())

    reset.click()

    if (indexArr.indexOf(lastResultIndex) < 0) {
        sleep(3000)
        let resOne = Number($('#last_result_0').text())
        let resTwo = Number($('#last_result_1').text())
        let resThree = Number($('#last_result_2').text())
        let lastResult = resOne + resTwo + resThree

        resultArr.push({
            index: lastResultIndex,
            result: lastResult + "_" + resOne + "_" + resTwo + "_" + resThree,
            bigOrSmall: (lastResult < 11) ? "small" : "big"
        })

        indexArr.push(lastResultIndex)
        resultArr.forEach(function(el) {
            console.log(el.index, el.result, el.bigOrSmall)
        })
        let end = resultArr[resultArr.length - 1]


        if (end.bigOrSmall != resultArr[resultArr.length - 2].bigOrSmall || resultArr.length === 1) {
            count = 0
        }
        if (end.bigOrSmall == resultArr[resultArr.length - 2].bigOrSmall) {
            count++
            count = count % 6
        }
        bet(betArray[count])
        $(" #bet_panel > ul > li.on > a").click()


        let big = $('#daxiaoshaibao_12759 > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(12)>input')
        let small = $('#daxiaoshaibao_12759 > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(15)>input')


        if (lastResult < 11) {
            big.click()
            big.click()
            big.click()
        } else {
            small.click()
            small.click()
            small.click()
        }


        enter.click()
        $('div.layui-layer-btn > a.layui-layer-btn0')[0].click()



        if (Number($("#header_user_money").text()) - initMoney > whenMoneyMoreThan) {
            chrome.runtime.sendMessage({ cmd: "complete", value: "mission is completed!" })
            clearInterval(betMoney)
        }

    }



}, 5000)