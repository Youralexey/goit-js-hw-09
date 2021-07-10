window.onload = () => {
    const timerDay = document.querySelector('[data-days]');
    const timerHour = document.querySelector('[data-hours]');
    const timerMin = document.querySelector('[data-minutes]');
    const timerSec = document.querySelector('[data-seconds]');
    const timer = document.getElementById('timer');
    const inputTimer = document.getElementById('date-selector');
    const startBtn = document.querySelector('[data-start]');

    const timerDays = 11;

    
    let currentTime = Date.parse(new Date()); //ТЕКУЩЕЕ ВРЕМЯ в миллисекундах!
    

    const deadLine = new Date(currentTime + timerDays * 24 * 60 * 1000); //текущее время + заданый таймер
    let timeInterval;
    let timeLeft;

    const timeRemaining = endDate => {
        let diff = Date.parse(endDate) - currentTime;//разница между тек.врем. и дедлайном
        let formattedDays = diff / 86_400_000;//перевод в читаемые величины
        let formattedHours = diff / 3_600_000;
        let formattedMinutes = diff / 60000;
        let formattedSeconds = diff / 1000;

        let seconds = Math.floor(formattedSeconds % 60);
        let minutes = Math.floor(formattedMinutes % 60);
        let hours = Math.floor(formattedHours % 24);
        let days = Math.floor(formattedDays % 365);

        return {
            diff,
            seconds,
            minutes,
            hours,
            days,
        };
    };

    const startTimer = () => {
        timeInterval = setInterval(tick, 1000)
    };

    const tick = () => { //таймер
        let getTime = timeRemaining(deadLine);
        let seconds = getTime(seconds);
        let minutes = getTime(minutes);
        let hours = getTime(hours);
        let days = getTime(days);
         
    };
    inputTimer.addEventListener('input', tick)






    startBtn.addEventListener('click', startTimer)



}


// //число приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
// function pad(value) {
//     return String(value).padStart(2, '0');
// };
// //конвертация с миллисекунд в дни, часы, минуты, секунды
// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = this.pad.Math.floor(ms / day);
//   const hours = this.pad.Math.floor((ms % day) / hour);
//   const minutes = this.pad. Math.floor(((ms % day) % hour) / minute);
//   const seconds = this.pad. Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function getCountdown() {
//         this.intervalId = setInterval(() => {
//             const currentDate = Date.now();
//             const deltaTime = this.targetDate - currentDate;
//             const time = this.convertMs(deltaTime);
//         }, 1000);
// }

// startBtn.addEventListener('click', startTimer)

//  const startTimer = timeLeft => {
//     if (timeLeft) {
//       timeInterval = setInterval(tick, 1000);
//     } else {
//       const currentTime = Date.parse(new Date());
//       deadLine = new Date(currentTime + timerMinutes * 60 * 1000);
//       timeInterval = setInterval(tick, 1000);
//     }
// };
  
// const tick = () => {
//     let getTime = timeRemaining(deadLine);
//     let days = getTime.days;
//     let hours = getTime.hours;
//     let minutes = getTime.minutes;
//     let seconds = getTime.seconds;
    
//     if (getTime.diff === 0) {
//       clearInterval(timeInterval);
//     }
//   };