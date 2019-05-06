chrome.runtime.onMessage.addListener(gotMessage);

let running = false
let runningFollow = false

function displayStart(message) {
  

  if(running) {
    let counter = 0
    const liker = setInterval(function(){ 
      counter++
        if (counter <= message.maxLikeCounter && running) {
          console.log(message)
          setTimeout(function(){ document.evaluate("//span[contains(@aria-label,'Like')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click() }, 200);
          setTimeout(function(){ document.evaluate("//a[text()='Next']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click() }, 1000);
        } else {
          clearInterval(liker);
        }
    }, 1500);
  } else if(runningFollow) {
    document.evaluate("//button[contains(text(),'Follow')][1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()
  }

}

function gotMessage(message, sender, sendResponse) {
  running = message.running
  runningFollow = message.runningFollow
  displayStart(message)
}

