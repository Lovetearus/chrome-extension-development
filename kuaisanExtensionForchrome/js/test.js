let count = 0
let loop = setInterval(() => {
    count++
    console.log(count)
    if (count > 10) { clearInterval(loop) }
}, 1000)