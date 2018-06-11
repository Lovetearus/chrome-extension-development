let live = document.getElementById('liveState')


if (live.getAttribute('data-state') == "false") {
    chrome.runtime.sendMessage({ cmd: 'deleteTab' })

}