// Time Conversion
// https://www.hackerrank.com/challenges/time-conversion/problem

// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(s) {
  const timeArray = s.slice(0, 8).split(':'); // split the array and git rid of AM and PM
  console.log(timeArray); // ['07', '05', '45']
  // If s has 'PM', add 12. If s has 'AM', replace timeArray[0] with '00'.
  timeArray[0] =
    s.indexOf('PM') > -1
      ? timeArray[0] == 12
        ? '12'
        : Number(timeArray[0]) + 12
      : timeArray[0] == 12
      ? '00'
      : timeArray[0];
  console.log(timeArray.join(':')); // Join timeArray with ':' to display military time.
  return timeArray.join(':');
}
timeConversion('07:05:45PM');
timeConversion('07:05:45AM');
