const moment = require('moment');

const days   = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getNextFiveDays() {
  const start    = days.indexOf(moment().format('dddd'));
  const nextFive = [];
  for (let i = start + 1; i <= start + 5; i += 1) {
    nextFive.push(days[i % 7]);
  }
  return nextFive;
}

module.exports = { getNextFiveDays };
