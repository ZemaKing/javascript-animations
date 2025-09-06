let ol = 0; // Original Location
let isPlaying = false;
let circleInterval;

function circleAnimation(time) {
	ol++;
	document.getElementById("circle").style.left = ol + "px";

	circleInterval = requestAnimationFrame(circleAnimation);
}

function mouseClicked() {
	if (isPlaying) {
		isPlaying = false;

		document.getElementById("circle").style.backgroundColor = "dimgray";

		cancelAnimationFrame(circleInterval);
	} else {
		isPlaying = true;

		document.getElementById("circle").style.backgroundColor = "crimson";

		circleInterval = requestAnimationFrame(circleAnimation);
	}
}

document.getElementById("circle").addEventListener("click", mouseClicked);
document.getElementById("circle").style.backgroundColor = "dimgray";
