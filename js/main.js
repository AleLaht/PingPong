const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d')

const ai = {
    width: 10,
    height: 50,
    x: 10,
    y: canvas.height / 2
}

const player = {
    width: 10,
    height: 50,
    x: 0,
    y: canvas.height / 2
}

const ball = {
    radius: 5,
    speed: 5,
    velocityX: 5,
    velocityY: 5,
    x: canvas.width / 2,
    y: canvas.height / 2
}