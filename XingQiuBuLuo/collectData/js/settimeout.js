function gettime() {



    time = new Date()
    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()
    let ms = time.getMilliseconds()
    return h.toString() + "_" + m.toString() + "_" + s.toString() + "_" + ms.toString()
}
console.log(0, gettime())

setInterval(() => {
    console.log(1, gettime())
}, 500);
setInterval(() => {
    console.log(3, gettime())
}, 1000);

setInterval(() => {
    console.log(4, gettime())
}, 1500);
console.log(5, gettime())
051314131134