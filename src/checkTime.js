const moment = require('moment');

const checkTime = () => {
  const epochJuly30th2019at15h20m00s = 1564500000000;
  const currentTimestampInMilisseconds = moment().valueOf();

  return currentTimestampInMilisseconds === epochJuly30th2019at15h20m00s;
};

module.exports = checkTime;
