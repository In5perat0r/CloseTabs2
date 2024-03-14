addEventListener('DOMContentLoaded', e => {
    document.querySelector('#arrowLeft').addEventListener('click', btn => {
        console.log('Left');
        chrome.windows.getLastFocused(cWindow => {
            chrome.tabs.query({windowId: cWindow.id}, tabs => {
                var state = true;
                var right = [];
                for (let i = 0; i < tabs.length; i++) {
                    if (state==true && !tabs[i].active) {right.push(tabs[i]);}
                    if (tabs[i].active) {state = !state;}
                }
                chrome.tabs.remove(right.map(tab => tab.id));
            });
        });
    });
    
    document.querySelector('#arrowRight').addEventListener('click', btn => {
        console.log('Right');
        chrome.windows.getLastFocused(cWindow => {
            chrome.tabs.query({windowId: cWindow.id}, tabs => {
                var state = false;
                var right = [];
                for (let i = 0; i < tabs.length; i++) {
                    if (state==true && !tabs[i].active) {right.push(tabs[i]);}
                    if (tabs[i].active) {state = !state;}
                }
                chrome.tabs.remove(right.map(tab => tab.id));
            });
        });
    });
});