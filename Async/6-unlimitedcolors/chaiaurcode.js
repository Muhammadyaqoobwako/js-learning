//genrate a random color

const randomColor = function () {
  const hex = '123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(ChangeBgColor, 1000);
  }
  function ChangeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', startChangingColor);
