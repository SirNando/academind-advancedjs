class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.place = place;
    this.salary = salary;
  }
  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.place}, and I earn $${this.salary}.`
    );
  }
}

const developer = new Job("Developer", "Buenos Aires", "65000");
console.log(developer);
developer.describe();

//Array destructuring
const input = ["Matias", "Nandin"];
const [firstName, lastName] = input;
console.log(firstName, lastName);

//Object destructuring
const restaurant = {
  name: "El gran Macarron",
  message: "An amazing place, really",
};
const { name, description: message } = restaurant; //We can either use the same name or assign a new one to an existing property
console.log(name, description);
