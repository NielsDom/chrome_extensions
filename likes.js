const likesMinuteInput = document.getElementById('likesMinuteInput');
const likesMinute = document.getElementById('likesMinute');
const maxLikeInput = document.getElementById('maxLikeInput');
const maxLikeCounter = document.getElementById('maxLikeCounter');
const startBtn = document.getElementById('start');

let msg = {
  likesMinute: 20,
  maxLikeCounter: 10,
  running: false,
  runningFollow: false
};
let params = {
  active: true,
  currentWindow: true
}

function sendMessage(){
  function gotTabs(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, msg)
  }
  chrome.tabs.query(params, gotTabs);
}

startBtn.addEventListener("click", function(){
  if(!msg.running){
    msg.running = true
    document.getElementById("domrunning").innerHTML = "Running!"
    startBtn.innerHTML = "stop"
  } else {
    msg.running = false
    document.getElementById("domrunning").innerHTML = "Not running!"
    startBtn.innerHTML = "start"
  }
  return sendMessage()
})


likesMinuteInput.addEventListener('keyup', function(){
  likesMinute.textContent = likesMinuteInput.value
  msg.likesMinute = Number(likesMinuteInput.value) 
});

maxLikeInput.addEventListener('keyup', function(){
  maxLikeCounter.textContent = maxLikeInput.value
  msg.maxLikeCounter = Number(maxLikeInput.value) 
});





const startFollow = document.getElementById('startFollow');

startFollow.addEventListener("click", function(){
  if(!msg.runningFollow){
    msg.runningFollow = true
  } else {
    msg.runningFollow = false
  }
  return sendMessage()
})