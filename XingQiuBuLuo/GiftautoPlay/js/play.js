let counts = 0
let countq = 0
let countb = 0

let numberOneTime = 2
let isSendLanbaoshi = false,
    qingshuNumberSendOneTime = 2,
    qingshuSendStamp = 45000
let isSendQingshu = true,
    baoshiNumberSendOneTime = 1,
    baoshiSendStamp = 90000


let siye = $(".swiper-lazy")[1]
let qingshu = $(".swiper-lazy")[10]
let baoshi = $(".swiper-lazy")[21]
let sendGift = document.getElementById('jSendGift')

siye.click()
sendGift.click()
$('body > script:nth-child(9)').remove()



setInterval(() => {
    numberOneTime = Math.floor(Math.random() * 2) + 2
    siye.click()
    for (let i = 0; i < numberOneTime; i++) {
        sendGift.click()
    }
}, 33000)
setInterval(() => {
    qingshu.click()
    for (let ii = 0; ii < 1; ii++) {
        sendGift.click()
    }

}, 120000)

// baoshi.click()
// for (let iii = 0; iii < 0; i++) {
//     sendGift.click()
// }










// // if (isSendQingshu === true) {
// setInterval(() => {
//     qingshu.click()
//     for (let ii = 0; ii < qingshuNumberSendOneTime; ii++) {
//         sendGift.click()
//     }

// }, qingshuSendStamp);
// // }


// if (isSendLanbaoshi) {
// setInterval(() => {

//     for (let iii = 0; iii < baoshiNumberSendOneTime; iii++)

//     sendGift.click()
// }, baoshiSendStamp);

// }