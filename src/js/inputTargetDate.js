import Timer from './timer'

import Swal from 'sweetalert2'


const inputEl = document.querySelector('#date-selector');
const timerBtn = document.querySelector('[data-start]');


timerBtn.addEventListener('click', handleTimerStart);



function getTargetDate() {
    console.log(inputEl.value.split('-').join(','))
    return inputEl.value.split('-').join(',')
    
}


function handleTimerStart() {
  const targetDate = getTargetDate();
  const timer = new Timer({ selector: '#timer', targetDate });
  if (timer.getMs() <= 0) {
    console.log('Please choose a date in the future');
    Swal.fire({
      title: 'Error!',
      text: 'Please choose a date in the future',
      icon: 'error',
      confirmButtonText: 'Ok',
    });

    return;
  }

  timer.timerStart();
}