var moment = require('moment');

var now = moment();

 console.log(now.format('x'));
// console.log(now.format('MMM Do YYYY, h:mma'));

var timestamp = 1469617310596;
var timestampMoment = moment.utc(timestamp);

// console.log(timestampMoment.format());
console.log(timestampMoment.local().format('hh:mm a'));
// console.log((new Date()).getHours()); 