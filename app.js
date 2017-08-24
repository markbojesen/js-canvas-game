// variables
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
const ballRadius = 10;

// movement
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, ballRadius, 0, Math.PI*2); // circle
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear area after movement to avoid a line
    drawBall();
    x += dx;
    y += dy;

    if (x + dx > canvas.width || x + dx < 0) {
        dx = -dx;
    }

    if (y + dy > canvas.height || y + dy < 0) {
        dy = -dy;
    }
}

setInterval(draw, 10)