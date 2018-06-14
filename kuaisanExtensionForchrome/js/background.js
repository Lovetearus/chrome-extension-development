chrome.runtime.onMessage.addListener(function(request, sender, reponse) {
    if (request.cmd == 'complete') {

        chrome.notifications.create(null, {
            type: "basic",
            title: 'end',
            message: request.value,
            iconUrl: "images/0.png"
        })
    }
})
console.log("Big brother is watching you ..")