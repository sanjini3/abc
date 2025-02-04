const fs = require('fs');


const textToAppend = "This is the appended text.\n";

fs.appendFile("./sample.txt", textToAppend, (err) => {
  if (err) {
    console.error("Error appending to the file:", err);
  } else {
    console.log("Text appended successfully!");

   
    const data = fs.readFileSync("./sample.txt", "utf8");
    console.log(data);
  }
});
