

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onClickBtnStart);
stopBtn.addEventListener('click', onClickBtnStop);

function onClickBtnStart() {
  startBtn.disabled = true;
  intervalId = setInterval(() => {
      const selectedColor = getRandomHexColor();
    document.body.style.backgroundColor = selectedColor;
  },1000)
}

function onClickBtnStop() {
  startBtn.disabled = false;
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
