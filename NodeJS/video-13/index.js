let moment = require('moment');
let timezone = require('moment-timezone');

// console.log(moment().format("MMM Do YY"));
// let targettimezone;
moment.tz.setDefault('Asia/kolkata');
// console.log(process.argv);

if (process.argv.length != 3) {
    console.log(`npm start <timezone>`)
    process.exit[1];
} else {
    timezone = process.argv[2];
}
// const targettimezone = "Europe/"
console.log( timezone + moment.tz(timezone).format());