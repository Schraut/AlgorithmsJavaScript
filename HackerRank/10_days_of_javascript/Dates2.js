function getDayName(dateString) {
  let dayName;
  var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var d = new Date(dateString);

  dayName = days[d.getDay()];

  return dayName;
}
