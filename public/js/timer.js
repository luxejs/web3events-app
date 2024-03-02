document.addEventListener('DOMContentLoaded', () => {

    const daysElement = document.querySelector('.countdown .days');
  const hoursElement = document.querySelector('.countdown .hours');
  const minutesElement = document.querySelector('.countdown .minutes');
  const secondsElement = document.querySelector('.countdown .seconds');
  
  let days = parseInt(daysElement.style.getPropertyValue('--value'));
  let hours = parseInt(hoursElement.style.getPropertyValue('--value'));
  let minutes = parseInt(minutesElement.style.getPropertyValue('--value'));
  let seconds = parseInt(secondsElement.style.getPropertyValue('--value'));
  
  setInterval(() => {
    if (seconds > 0) {
      seconds--;
    } else {
      seconds = 59;
  
      if (minutes > 0) {
        minutes--;
      } else {
        minutes = 59;
  
        if (hours > 0) {
          hours--;
        } else {
          hours = 23;
  
          if (days > 0) {
            days--;
          } else {
            days = 0;
          }
        }
      }
    }
  
    daysElement.style.setProperty('--value', days);
    hoursElement.style.setProperty('--value', hours);
    minutesElement.style.setProperty('--value', minutes);
    secondsElement.style.setProperty('--value', seconds);
  }, 1000);
  
  
  
  });