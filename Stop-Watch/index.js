let secondsElapsed = 0;
let interval = null;
let startBtn = document.getElementById("start-button");
const time = document.getElementById("time");

function timer() {
  secondsElapsed++;
  setTime();
}

function padStart(value) {
  return String(value).padStart(2, "0");
}

function setTime() {
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function startClock() {
  // Hides the start button after clicking it once
  startBtn.disabled = true;
  clearInterval(interval);
  if (interval) stopClock;
  interval = setInterval(timer, 1000);
}

function stopClock() {
  clearInterval(interval);
  startBtn.disabled = false;
}

function resetClock() {
  stopClock();
  secondsElapsed = 0;
  setTime();
}
