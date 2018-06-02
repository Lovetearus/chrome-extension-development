function replaceP() {
    console.log(" replacing ...")
    chrome.tabs.executeScript({

        file: "js/swith.js"
    })
}
document.getElementById('replacePicture').addEventListener('click', replaceP)