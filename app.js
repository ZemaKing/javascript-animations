var ol = 0; // Original Location
var circleInterval = setInterval(circleAnimation, 50);

function circleAnimation() {
    if (ol >= (4000 / 50)) {
        document.getElementById("circle").style.backgroundColor = "dimgray";
        clearInterval(circleInterval);
    } else {
        ol++;
        document.getElementById("circle").style.left = ol + "px";
    }
}