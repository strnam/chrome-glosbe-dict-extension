console.log("Ready")


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message.txt);
    if (message.txt === "hello tab"){
        let paragraphs = document.getElementsByTagName("p");
        for (elt of paragraphs){
            elt.style['background-color'] = "#FF00FF";
        }
    }
}