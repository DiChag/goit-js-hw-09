const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

let intervalId = null;
refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', onBtnStart);
refs.btnStop.addEventListener('click', onBtnStop);

function onBtnStart() {
  intervalId = setInterval(colorSwitcher, 1000);
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
}

function onBtnStop() {
  clearInterval(intervalId);
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorSwitcher() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}
