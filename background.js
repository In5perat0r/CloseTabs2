chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.msg == 'counter') {
        setTimeout(() => {
            chrome.action.setBadgeText({text: ""});
        }, 5000);
    }
})