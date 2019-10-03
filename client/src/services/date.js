const convertMS = milliseconds => {
  let day;
  let hour;
  let minute;
  let seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds %= 60;
  hour = Math.floor(minute / 60);
  minute %= 60;
  day = Math.floor(hour / 24);
  hour %= 24;
  return {
    day,
    hour,
    minute,
    seconds,
  };
};

export default convertMS;
