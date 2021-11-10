const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d')

let paddleHeight = 50;
let paddleWidth = 10;
let speed = 10;

const ai = {
    width: paddleWidth,
    height: paddleHeight,
    x: canvas.width - paddleWidth,
    y: canvas.height / 2 - paddleHeight / 2
}

const player = {
    width: paddleWidth,
    height: paddleHeight,
    x: 0,
    y: canvas.height / 2 - paddleHeight / 2
}

const ball = {
    radius: 5,
    speed: 5,
    velocityX: 5,
    velocityY: 5,
    x: canvas.width / 2,
    y: canvas.height / 2
}

const drawPlayer = () => {
    ctx.beginPath();
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

const drawBall = () => {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
}

const drawAi = () => {
    ctx.beginPath();
    ctx.fillRect(ai.x, ai.y, ai.width, ai.height);
}

const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPlayer();
    drawAi();
}

const movePlayer = (e) => {
    switch(e.key) {
        case 'ArrowDown':
            player.y += speed;
            console.log('down')
            break;
        case 'ArrowUp':
            player.y -= speed;
            break;
    }
}

const play = () => {

    // Ball movement
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    // Change ball direction if it hits floor or ceiling
    if ((ball.y + ball.radius) >= canvas.height || ball.y - ball.radius <= 0) {
        ball.velocityY = -ball.velocityY;
    }
}

const gameLoop = () => {
    render()
    play()
}

window.addEventListener('keydown', movePlayer)
setInterval(gameLoop, 30);