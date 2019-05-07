chrome.runtime.onMessage.addListener(gotMessage);

let running = false
let runningFollow = false
let runningTag = false

function displayStart(message, sender) {
  function timerClicker(selected, time){
    return setTimeout(function(){ selected.click() }, time)
  }

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
    if (!document.evaluate("//h2[text()='This Account is Private']", document, null, XPathResult.BOOLEAN_TYPE, null).booleanValue){
      const clickFollowersList = document.evaluate("/html/body/span/section/main/div/header/section/ul/li[2]/a", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
      timerClicker(clickFollowersList, 300)
      
  
      let counterFollowers = 1
      const followersLoop = setInterval(function(){ 
       
          if (counterFollowers < 4) {
            counterFollowers++
            setTimeout(function(){ 
              document.evaluate("/html/body/div[3]/div/div[2]/ul/div/li["+counterFollowers+"]/div/div[2]/button", document, null, XPathResult.ANY_TYPE, null).iterateNext().click()
             }, 500);
          } else if(counterFollowers === 4) {
            setTimeout(function(){ 
              document.evaluate("//span[contains(@aria-label,'Close')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()
             }, 500)
            setTimeout(function(){ 
              document.evaluate("//div[2]/input", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.value = 'lol'
            }, 1000)
            setTimeout(function(){ 
              counterFollowers++
              chrome.runtime.sendMessage({tag1: true});
            }, 1500)
          }
          else {
            clearInterval(followersLoop);
          }
      }, 1500);
    } else {
      console.log('this account is private man')
    }

  }
}


function gotMessage(message, sender, sendResponse) {
  console.log(sender.id)
  running = message.running
  runningFollow = message.runningFollow
  displayStart(message, sender)
}