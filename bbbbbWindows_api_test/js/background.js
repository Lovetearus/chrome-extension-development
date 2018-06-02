let count = 0;
let indexUrl = 'http://www.xingqiu.tv/'
let w_width, w_height
let column = 4
let row = 3
let index = 0
let arr = []
let column_count = 0;
let row_count = 0;
for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
        arr[i, j] = [i, j]


    }
}
let open = true

function create() {

    chrome.windows.create({
        url: [indexUrl + `${count}.html`],
        state: "maximized"
    }, function(win) {
        w_height = win.height
        w_width = win.width
        let countin = count % 12
        let rem = countin % 4
        let mod = (countin - rem) / 4
        widthInCrement = Math.floor(w_width / column)
        heightInCrement = Math.floor(w_height / row)
        let top = heightInCrement * mod
        let left = widthInCrement * rem
        chrome.windows.update(win.id, {
            top: top,
            left: left,
            width: widthInCrement,
            height: heightInCrement
        }, function(win) {
            count++


            if (win.tabs[0].document.body.getElementsByClassName('.play')[0].height == 0)
                chrome.windows.remove(win.id)





        })
    })
}




chrome.browserAction.onClicked.addListener(create)