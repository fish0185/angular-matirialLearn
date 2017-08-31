var fs = require('fs');

fs.writeFileSync('text.txt', 'Hello fs!');

console.log(fs.readFileSync('text.txt').toString());