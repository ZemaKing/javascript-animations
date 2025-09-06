let ol = 0; // Original Location
let sc = 1; // Scale
let isPlaying = false;
let circleInterval;

let el = document.getElementById("circle");

function circleAnimation() {
	ol++;
	sc++;

	el.style.left = ol + "px";
	el.style.width = sc + "px";
	el.style.height = sc + "px";
	el.style.borderRadius = sc * 100 + "px";

	circleInterval = requestAnimationFrame(circleAnimation);
}

function mouseClicked() {
	if (isPlaying) {
		isPlaying = false;

		el.style.backgroundColor = "dimgray";

		cancelAnimationFrame(circleInterval);
	} else {
		isPlaying = true;

		el.style.backgroundColor = "crimson";

		circleInterval = requestAnimationFrame(circleAnimation);
	}
}

el.addEventListener("click", mouseClicked);
el.style.backgroundColor = "dimgray";
