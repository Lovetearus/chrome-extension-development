function getTime() {
    return (new now())
}

setInterval(() => {
    // //     let money = Number(document.getElementsByClassName('my-coin').textContent)
    // // console.log(money)
    // //     let endtimes = Math.floor(money / 200)
    // let xingyun = document.getElementsByClassName('swiper-lazy swiper-lazy-loaded')[1]
    // xingyun.click()
    // let songli = document.getElementById('jSendGift').click()

    setTimeout(() => {
        console.log(getTime() + "  *")
        setTimeout(() => {
            console.log(getTime() + " **")

        }, 2000);
    }, 1000);
    console.log(getTime() + "***")

}, 3000)