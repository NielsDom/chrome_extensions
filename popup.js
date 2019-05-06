const likesMinuteInput = document.getElementById('likesMinuteInput');
const likesMinute = document.getElementById('likesMinute');
const maxLikeInput = document.getElementById('maxLikeInput');
const maxLikeCounter = document.getElementById('maxLikeCounter');
const startBtn = document.getElementById('start');

let msg = {
  likesMinute: 20,
  maxLikeCounter: 10,
  running: false
};
let params = {
  active: true,
  currentWindow: true
}

function sendMessage(){
  chrome.tabs.query(params, function(tabs){chrome.tabs.sendMessage(tabs[0].id, msg)});
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