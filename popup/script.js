var debug = false;

function debugging() {
    chrome.runtime.sendMessage({debugging: "Debug Message"});
}

addEventListener('DOMContentLoaded', e => {
    document.querySelector('#arrowLeft').addEventListener('click', btn => {
        if (!debug) {
            chrome.windows.getLastFocused(cWindow => {
                chrome.tabs.query({windowId: cWindow.id}, tabs => {
                    var state = true;
                    var right = [];
                    for (let i = 0; i < tabs.length; i++) {
                        if (state==true && !tabs[i].active) {right.push(tabs[i]);}
                        if (tabs[i].active) {state = !state;}
                    }
                    chrome.action.setBadgeText({text: `${left.length}`})
                    chrome.action.setBadgeBackgroundColor({color: "gray"});
                    chrome.action.setBadgeTextColor({color: "white"});
                    chrome.tabs.remove(right.map(tab => tab.id));
                    chrome.runtime.sendMessage({msg: "counter"});
                });
            });
        } else {
            debugging();
        }
    });
    
    document.querySelector('#arrowRight').addEventListener('click', btn => {
        if (!debug) {
            chrome.windows.getLastFocused(cWindow => {
                chrome.tabs.query({windowId: cWindow.id}, tabs => {
                    var state = false;
                    var right = [];
                    for (let i = 0; i < tabs.length; i++) {
                        if (state==true && !tabs[i].active) {right.push(tabs[i]);}
                        if (tabs[i].active) {state = !state;}
                    }
                    chrome.action.setBadgeBackgroundColor({color: "gray"});
                    chrome.action.setBadgeTextColor({color: "white"});
                    chrome.action.setBadgeText({text: `${right.length}`})
                    chrome.tabs.remove(right.map(tab => tab.id));
                    chrome.runtime.sendMessage({msg: "counter"});
                });
            });
        } else {
            debugging();
        }
    });
});
