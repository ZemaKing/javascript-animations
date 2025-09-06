let canvas = document.getElementById("animated-canvas");
let context = canvas.getContext("2d");
let canvasInterval = requestAnimationFrame(canvasAnimation);
let circleX = 60;

function canvasAnimation() {
	circleX++;
	drawCircle(circleX, canvas.height / 2, 25);
	canvasInterval = requestAnimationFrame(canvasAnimation);
}

function drawCircle(x, y, s) {
	clearCanvas();
	context.fillStyle = "crimson";
	context.beginPath();
	context.arc(x, y, s, 0, 2 * Math.PI);
	context.fill();
}

function clearCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

drawCircle();