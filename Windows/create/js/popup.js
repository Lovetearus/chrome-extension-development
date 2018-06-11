const index = 'http://www.xingqiu.tv/'
let count = 0
let mainWindow = {}
let deleteTab = ''
let currentWindow = {}
let create = document.getElementById('buttonCreateWindow')

function createTabs() {
    let url = index + `${count}.html`
    if (count === 0) {

        chrome.windows.create({
            url: url
        }, function(win) {
            mainWindow.id = win.id
            console.log(mainWindow.id)
        })
    } else {
        chrome.tabs.create({
            url: url,
            // pinned: true,
            index: count,

            windowId: mainWindow.id
        }, function(tab) {
            deleteTab = (tab.id)
            console.log("the " + count + " tabs is creating...")

        })
    }


}
create.addEventListener('click', function() {


    while (count < 2) {

        createTabs()

        count++

    }

})

let deleteButton = document.getElementById('buttonDeleteTab')
deleteButton.addEventListener('click', function() {

    chrome.tabs.getSelected(function(tab) {
        chrome.tabs.remove(tab.id)
    })
})

chrome.windows.getCurrent(function(win) {
    currentWindow = win
})
let showProperty = document.getElementById('showProperty')
showProperty.addEventListener('click', function() {
    document.getElementById('windowId').innerText = currentWindow.id
    document.getElementById('windowState').innerText = currentWindow.state
    document.getElementById('windowType').innerText = currentWindow.type
    document.getElementById('windowWidth').innerText = currentWindow.width
    document.getElementById('windowHeight').innerText = currentWindow.height

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        document.getElementById('windowUrls').innerText = tabs[0].url
    })


})