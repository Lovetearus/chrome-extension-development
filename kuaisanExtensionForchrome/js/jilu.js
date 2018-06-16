$("#_leftAD,#_rightAD").remove()

let jilu = $(".left.openCode.cl-32[style='width:50px']")
console.log("____" + jilu.length)
for (let i = 0; i < jilu.length; i++) {
    let bigsmall = jilu[i].text() * 1
    console.log("big or small " + bigsmall)
    if (bigsmall > 11) {
        jilu[i].style.background = 'yellow'
    }
}