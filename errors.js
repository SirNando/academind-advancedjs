const fs = require("fs");

//Error handling if a non-important function fails for some reason
function readFile() {
    try {
        const fileData = fs.readFileSync("data.json");
    } catch(error) {
        console.log(error);
    }
    console.log("Hi there!");
}

readFile();