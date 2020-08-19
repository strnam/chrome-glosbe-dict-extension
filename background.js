console.log('This is background scripts');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    let msg = {
        txt: "hello tab"
    }
    chrome.tabs.sendMessage(tab.id, msg)
}

chrome.contextMenus.create({title:"Translate '%s'",contexts: ["all"], "onclick": onRequest});

function onRequest(info, tab) {
    let params = `resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=900,left=1500,top=-1000`;
    var selection = info.selectionText;
    let url = "https://glosbe.com/en/vi/" + selection
    window.open(url, 'dictionary', params);
};
