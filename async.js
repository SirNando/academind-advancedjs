const fs = require("fs/promises");

//Error handling if a non-important function fails for some reason
async function readFile() {
  //Synchronous operation, in which we read the file and then execute the rest of the code
  /* const fileData = fs.readFileSync("data.txt"); */

  // Asynchronous operation, where the file will be read but meanwhile the rest of the code can execute
  /* const fileData = fs.readFile("data.txt", function (error, fileData) { //It needs a "Callback" function
    if (error) throw error;
    console.log("File parsing done");
    console.log(fileData.toString());
  }); */

/*   fs.readFile("data.txt")
    .then(function (fileData) {
      console.log("File parsing done");
      console.log(fileData.toString());
    })
    .then(function () {
      console.log("Second operation!");
    })
    .catch(function (error) {
      console.log(error);
    });

  console.log("Hi there!");
} */

try {
  fileData = await fs.readFile("data.txt"); //This will stop code execution until the operation is done, in case we can't use a synchronous method
} catch (error) {
  console.log(error);
}
console.log("File parsing done");
console.log(fileData.toString());
}
readFile();
