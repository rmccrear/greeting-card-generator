let count = 10;

function tick() {
	count = count - 1;
	if(count < 0) {
		console.log("Lift off")
	} else {
		console.log("Lift off in: " + count);
	}
}

setInterval(tick, 1000);