
// Helper function
// Gives a random number
function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}




// User input
let name = prompt("A name:");
console.log(name);
let adj = prompt("An adj:");
let noun = prompt("A noun:");

let closings = [
  "Stay Golden, Pony Boy",
  "You're GREAT!",
  "Better eat your Wheaties"
];


// Computer Output
function makeCard() {
  console.log("Dear " + name + ",");
  console.log("You are as " + adj + " as a " + noun + ".");
  let index = randomNumber(0, 2);
  let x = closings[index];
  console.log(x);
}

makeCard();


