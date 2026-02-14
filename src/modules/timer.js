export const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;

    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {timeRemaining, hours, minutes, seconds};
  };

  const zeroFormat = (data) => {
    if (data < 10) {
      return "0" + data;
    } else {
      return data;
    }
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    if (getTime.timeRemaining > 0) {
      timerHours.textContent = zeroFormat(getTime.hours);
      timerMinutes.textContent = zeroFormat(getTime.minutes);
      timerSeconds.textContent = zeroFormat(getTime.seconds);
    } else {
      clearInterval(intervalId);
    }
  };

  const intervalId = setInterval(updateClock, 1000);
};
