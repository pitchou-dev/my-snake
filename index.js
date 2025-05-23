const startbouton=document.getElementById('startbouton'); 
const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

const appleImg = new Image();
appleImg.src = "apple.png";

const obstacleImg = new Image();
obstacleImg.src = "obstacle.png";


const eatSound = new Audio("eat.mp3");
const dieSound = new Audio("die.mp3");

let gameStarted = false;
startbouton.addEventListener('click', () => {
  startbouton.style.display= 'none';
  canvas.style.display= 'block';
  startGame();
});

let speed = 120;
let snake = {
  body: [
    { x:150 , y:100 },
    { x:160 , y:100 },
    { x:170 , y:100 },
  ]
};
let direction = "right";
let apple = {};
let obstacles = [];
let score = 0;
let interval;

function startGame() {
  gameStarted = true;

  document.addEventListener("keydown",(e)=>{
    if (e.key==="ArrowUp"&&direction!=="down") direction="up";
    else if (e.key==="ArrowDown"&&direction!=="up") direction="down";
    else if (e.key==="ArrowLeft" && direction!=="right")direction="left";
    else if (e.key==="ArrowRight" && direction!=="left") direction="right";
  });

  function drawSnake() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="white";
    ctx.font="20px'Press Start 2P'";
    ctx.fillText(`score:${score}`,20,30);

    drawApple();
    drawObstacles();

    snake.body.forEach((part,i)=>{
      ctx.fillStyle = "white";
      ctx.fillRect(part.x,part.y,9,9);
      if (i!==snake.body.length-1&&part.x===snake.body.at(-1).x&&part.y===snake.body.at(-1).y) {
        gameOver();
      }
    });

    let head= { ...snake.body.at(-1) };
    if (direction=== "up") 
      head.y -= 10;
    if (direction=== "down") 
      head.y += 10;
    if (direction=== "left") 
      head.x -= 10;
    if (direction=== "right") 
      head.x += 10;
    if(head.x < 0)head.x=canvas.width-10;
    else if(head.x >= canvas.width)
      head.x=0;
    if (head.y < 0)
      head.y=canvas.height-10;
    else if(head.y >= canvas.height)
      head.y=0;
    if(obstacles.some(ob=>ob.x=== head.x&&ob.y===head.y)) {
      gameOver();
      return;
    }
    snake.body.push(head);
    if(head.x===apple.x&&head.y===apple.y) {
      eatSound.play(); 
      generateApple();
      score++;
      speedup();
    } else {
      snake.body.shift();
    }
  }

  function drawApple() {
    ctx.drawImage(appleImg,apple.x,apple.y,13,13);
  }

  function drawObstacles() {
    obstacles.forEach(ob => {
      ctx.drawImage(obstacleImg,ob.x,ob.y,13,13);
    });
  }

  function generateApple() {
    let newApple;
    do {
      newApple = {
        x:Math.floor(Math.random()*(canvas.width / 10))* 10,
        y:Math.floor(Math.random()*(canvas.height / 10))* 10
      };
    } while (
      obstacles.some(ob => ob.x === newApple.x && ob.y === newApple.y)
    );
    apple = newApple;
  }

  function generateObstacles() {
    obstacles = [];
    let numberOfObstacles = 35;
    let tries = 0;

    while (obstacles.length < numberOfObstacles && tries < 500) {
      tries++;
      let newObstacle = {
        x:Math.floor(Math.random()*(canvas.width/10))*10,
        y:Math.floor(Math.random()*(canvas.height/10))*10
      };

      const tooCloseToSnake = snake.body.some(part =>
        Math.abs(part.x - newObstacle.x) < 30 &&
        Math.abs(part.y - newObstacle.y) < 30
      );

      const tooCloseToOtherObstacles = obstacles.some(ob =>
        Math.abs(ob.x - newObstacle.x) < 30 &&
        Math.abs(ob.y - newObstacle.y) < 30
      );

      if (
        !tooCloseToSnake &&
        !tooCloseToOtherObstacles &&
        !obstacles.some(ob=>ob.x===newObstacle.x && ob.y===newObstacle.y)
      ) {
        obstacles.push(newObstacle);
      }
    }
  }

  function speedup() {
    if (speed >= 50) speed -= 5;
    clearInterval(interval);
    interval = setInterval(drawSnake, speed);
  }

  generateObstacles();
  generateApple();
  interval = setInterval(drawSnake, speed);
}

function gameOver() {
  dieSound.play(); 
  clearInterval(interval);
  canvas.style.display='none';
  document.getElementById('gameOverScreen').style.display='block';
  document.getElementById ('finalScore').innerText=`Your score:${score}`;
}

function restartGame() {
  direction = "right";
  score = 0;
  speed = 120;
  snake = {
    body: [
      { x:150 , y:100 },
      { x:160 , y:100 },
      { x:170 , y:100 },
    ]
  };
  document.getElementById('gameOverScreen').style.display='none';
  canvas.style.display ='block';
  startGame();
}