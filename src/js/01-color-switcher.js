

const startBtn1 = document.querySelector('[data-start]');
const stopBtn1 = document.querySelector('[data-stop]');

startBtn1.addEventListener('click', onClickBtnStart);
stopBtn1.addEventListener('click', onClickBtnStop);

function onClickBtnStart() {
  startBtn1.disabled = true;
  intervalId = setInterval(() => {
      const selectedColor = getRandomHexColor();
    document.body.style.backgroundColor = selectedColor;
  },1000)
}

function onClickBtnStop() {
  startBtn1.disabled = false;
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
