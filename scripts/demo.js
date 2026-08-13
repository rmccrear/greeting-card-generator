let name = prompt("Name: ");
function makeCard() {
  console.log("Your name is: " + name);
}

setInterval(makeCard, 3000);
