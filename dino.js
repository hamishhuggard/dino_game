// NEXT TIME:

// fix sinking into ground ✅
// adjust gravity ✅
// prevent double jumping ✅
// implement an obstacle ✅
// detect collision with box
// repeating obstacles

const dino = document.getElementById("walk1");
const square = document.getElementById("square");

let squareX = 400;
let squareY = 180;

square.style.position = 'absolute';
square.style.left = `${squareX}px`;
square.style.top = `${squareY}px`;

let x = 100;
let y = 100;

dino.style.position = 'absolute';
dino.style.left = `${x}px`;
dino.style.top = `${y}px`;

// DETECT SPACEBAR PRESS
document.addEventListener('keydown', function(e) {
    if ((e.key === ' ') && (y === 100)) {
        console.log('Spacebar pressed');
        y = y - 10;
        dino.style.top = `${y}px`;
        jump();
    }

});

// GAME LOOP
let ySpeed = 0;

function jump() {
    ySpeed -= 10; 
    // ySpeed = -10;
}

// create a gameloop
function gameLoop() {
    requestAnimationFrame(gameLoop);
    
    ySpeed += 0.5; // is gravity set correctly?
    y = y + ySpeed;
    
    dino.style.top = `${y}px`;

    squareX = squareX - 5;
    square.style.left = `${squareX}px`;

    // console.log(y)
    if (y > 100) {
        ySpeed = 0;
        y = 100;
    }
        
    // console.log({x, y, squareX, squareY})
    if ((y === squareY) && (x === squareX)) {
        alert("game over");
    }
    
    
}

function gameOver() {
    // console.log.gameOver

}    
gameLoop();


// ANIMATION
let imageCounter = 0;
function nextFrame() {
    
    imageCounter = imageCounter + 1;
    if (imageCounter > 3) {
        imageCounter = 0;
    } 
    // console.log('walk' + imageCounter + '.png');
    document.getElementById("walk1").src = 'walk' + imageCounter + '.png';
    
}
setInterval(nextFrame, 1000);


// START THE GAME
function startGame(event) {
    // console.log(event.key);
}
document.addEventListener("keydown", startGame);



// todo: call jump() when spacebar pressed





