const fs = require("fs");

// Create File
fs.writeFile("message.txt", "Hello from NodeJS", (err) => {
    if (err) throw err;
    console.log("The file has been saved!")
});

// Read File
fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});