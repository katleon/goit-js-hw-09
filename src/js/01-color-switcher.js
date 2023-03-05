const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyBackground = document.querySelector('body');
let timer = null;

function onBtnDisabled() {
  if (!startBtn.disabled) {
    startBtn.disabled = true;
    stopBtn.disabled = false;
  } else {
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
}

function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
}

startBtn.addEventListener('click', () => {
  onBtnDisabled();
  timer = setInterval(() => {
    bodyBackground.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  onBtnDisabled();
});
