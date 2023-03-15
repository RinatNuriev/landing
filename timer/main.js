const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let hour = Math.floor(seconds / 60 / 60);
    let minutes = Math.floor(seconds / 60) - (hour * 60);
    let second = seconds % 60;

    function editNum(time) {
      return time < 10 ? '0' + time : time
    }
    return `${editNum(hour)}:${editNum(minutes)}:${editNum(second)}`

  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  inputEl.value = e.target.value.replace(/[^+\d]/g, '')
});

buttonEl.addEventListener('click', () => {
  let seconds = Number(inputEl.value);

  setInterval(() => {
    if(seconds) {
      timerEl.textContent = animateTimer(seconds)
      seconds--
    } else {
      timerEl.textContent = '00:00:00'
      return
    }
  }, 1000)

  inputEl.value = '';
});


