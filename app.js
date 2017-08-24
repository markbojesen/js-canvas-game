// canvas & movement variables
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ballRadius = 10;
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;

// paddle variables
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth)/2;

// keypress variables
let rightPressed = false;
let leftPressed = false;

// event listeners
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    } 
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } 
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

// ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2); // circle
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// paddle
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// movement
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear area after movement to avoid a line
    drawBall();
    drawPaddle();

    // bounce off right/left side
    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) { 
        dx = -dx;
    }
    // bounce off top, kill when hitting bottom
    if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height-ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth+10) {
            dy = -dy;
        }
        else {
            // alert("GAME OVER RETARD!");
            document.location.reload();
        }
    }

    // paddle movement (7px to either right or left)
    if (rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    } 
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
}

setInterval(draw, 10);


