const likeInput = document.getElementById('likeInput');
const likeCounter = document.getElementById('likeCounter');
const maxLikeInput = document.getElementById('maxLikeInput');
const maxLikeCounter = document.getElementById('maxLikeCounter');
const start = document.getElementById('start');

likeInput.addEventListener('keyup', displayLikeCounter);
maxLikeInput.addEventListener('keyup', displayMaxLike);
start.addEventListener('click', displayMaxLike);

function displayLikeCounter() {
  likeCounter.textContent = likeInput.value
}
function displayMaxLike() {
  maxLikeCounter.textContent = maxLikeInput.value
}
function displayStart() {
  document.getElementById('showStart').textContent = 'lol'
}