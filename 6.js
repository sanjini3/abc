const fs = require('fs');

fs.writeFileSync("./sample.txt","This is the text present in text file")
console.log("End");

const data = fs.readFileSync("./sample.txt","utf8")
console.log(data)
