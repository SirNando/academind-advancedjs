//Optional parameter functions. Optional parameters should be defined in the function's end
function greetUser(greeting, userName = "user") {
  //console.log(greeting + " " + userName + "!");
  console.log(`${greeting}, ${userName}!`); //Template literal string
}
greetUser("Hello", "Nando");
greetUser("Hi");

//Multi parameter function which can take a variable number of them. They are called "rest parameters"
function sumUp(...numbers) {
  let result = 0;

  for (number of numbers) {
    result += number;
  }

  return result;
}

//Converting an array of numbers into a list so we can pass them to the function as separate parameters
const inputNumbers = [1,2,3];
console.log(sumUp(...inputNumbers)); //The three dots is known as the "spread" operator