

export default class Timer {
    constructor({selector, targetDate}) {
        this.targetDate = targetDate;
        this.selector = selector;
        // this.timerNode = document.querySelector(selector);

        this.refs = {
            days: document.querySelector(`${this.selector} [data-days]`),
            hours: document.querySelector(`${this.selector} [data-hours]`),
            minutes: document.querySelector(`${this.selector} [data-minutes]`),
            seconds: document.querySelector(`${this.selector} [data-seconds]`),
            inputEl: document.getElementById('date-selector')
        }
    }

    getMs() {
        const targetDate = Date.parse(this.targetDate);
        const currenDate = Date.now();
        return targetDate - currenDate;
    }
    
    
    timerStart() {
        this.intervalId = setInterval(() => {
            const diffMs = this.getMs();
            if (diffMs <= 0) {
                this.timerStop()
                return 
            }

            const { days, hours, minutes, seconds } = convertMs(diffMs)
            this.renderTimerData({ days, hours, minutes, seconds })

        },1000)
    }


    renderTimerData({ days, hours, minutes, seconds }) {
        this.refs.days.textContent = days;
        this.refs.hours.textContent = pad(hours);
        this.refs.minutes.textContent = pad(minutes);
        this.refs.seconds.textContent = pad(seconds);
    };




};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


    function pad(value) {
     return String(value).padStart(2, '0');
    };

// const timer = new Timer({ selector: "#timer", targetDate: "2021, 07, 12" });

