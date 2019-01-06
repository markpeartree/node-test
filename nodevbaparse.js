var fs = require('fs');

var vbaJSON = JSON.parse(fs.readFileSync('./users.json'))

console.log(vbaJSON[0].Firstname);
