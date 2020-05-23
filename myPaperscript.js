var alien = new Path.Rectangle(new Point(150, 60), new Point(170, 70));
alien.fillColor = "black";

var canon;

var laserShots = []; // Must be global to get accessed from both shoot and animate function

// For debug

alien.selected = true;

var direction = true; // True for right, false for left.
var stepSize = view.size.width / 25;

var timerID = setInterval(move, 500);


var aliens = new Group();

function lateralMove(alien) {
  
    if (direction) {
      alien.position.x += stepSize;
    } else {
      alien.position.x -= stepSize;
    }
  

}

function move() {
  var aliensArray = aliens.children

  lateralMove(aliens)
  var isAlienInScreen =
    aliens.bounds.right >= view.size.width - stepSize ||
    aliens.bounds.left <= stepSize;

  if (isAlienInScreen) {
    aliens.position.y += stepSize * 0.2; //adjusts for the width / height ratio of the view
    direction = !direction;
    lateralMove(aliens);
  }
  // For debug
  if (alien.bounds.bottom >= view.size.height) {
    alien.position = [150, 60];
  }
}

// canon controls
function onKeyDown(event) {
  if (event.key === "left" || event.key === "q") {
    // Move left if not at the border
    canonMoveL();
  } else if (event.key === "right" || event.key === "d") {
    // Move right if not at the border
    canonMoveR();
  } else if (event.key === "space") {
    // Shoot
    console.log("PEW PEW !!");
    shoot();
  }
}

function canonMoveL() {
  if (canon.bounds.left >= 20) {
    canon.position.x -= 10;
  }
}

function canonMoveR() {
  if (canon.bounds.right <= view.size.width - 20) {
    canon.position.x += 10;
  }
}

function shoot() {
  //offset the position of the shot from the center of the canon shape
  var laserPos = new Point(canon.position + [0, -4])
  var laserShot = new Path(laserPos, laserPos + [0, -11]);
  laserShot.strokeColor = 'red'
  laserShot.selected = true; // For debug
  laserShots.push(laserShot);
}

function laserMove() {
   
    //animate the laser shots fired (works on an empty array)
    laserShots.forEach(function (item) {
      item.position.y -= 2;
      //Remove the shots out of bounds
      if (item.position.y < 0) {
        var outOfBounds = laserShots.shift();
        outOfBounds.remove();
      }
    });

   
    
  
  
}

function isLaserHitting() {
  laserShots.forEach(function(shot, index, array) {
    
    if (shot.intersects(alien)){
      console.log("I'm hit !")
      shot.remove(); // Removes from the global project object
      array.splice(index,1) // Removes the laser shot from the laserShots array

      alien.remove(); // add a cool explosion
    }
  })
  
}

function onFrame(event) {
  // If a laser has been fired, animate it
  laserMove();
  isLaserHitting();
}

setup(2);

console.log(aliens)


function setup(magnification) {
  // Credits to Vladimir on Codepen.io for the drawings
// https://codepen.io/vherever/pen/Inyhm?editors=0010

var canonPos = [view.size.width / 2, view.size.height * 0.9];

// Change these  parameters
canon = drawShip(canonPos[0], canonPos[1], magnification);
canon.selected = true; // for debug


for (var x = 40; x < 300; x += 45){
  // and these  parameters
  aliens.addChild(drawLimeAlien(60 + x, 10, 2));
  aliens.addChild(drawBlueAlien(60 + x, 50, 2));
  aliens.addChild(drawRedAlien(60 + x, 90, 2));
  aliens.addChild(drawYellowAlien(60 + x, 130, 2));
}


///////////////////////////////////////////////////////
//
// this function draws a ship
//
function drawShip(xPosition, yPosition, magnification) {

  var xPos = xPosition;
  var yPos = yPosition;
  var m = magnification;
  
  var ship = new Path();
  ship.fillColor = 'deepSkyBlue';
  ship.add(new Point(0 * m + xPos, yPos + m * 7));
  ship.add(new Point(0 * m + xPos, yPos + m * 4));
  ship.add(new Point(1 * m + xPos, yPos + m * 4));
  ship.add(new Point(1 * m + xPos, yPos + m * 3));
  ship.add(new Point(5 * m + xPos, yPos + m * 3));
  ship.add(new Point(5 * m + xPos, yPos + m * 1));
  ship.add(new Point(6 * m + xPos, yPos + m * 1));
  ship.add(new Point(6 * m + xPos, yPos + m * 0));
  ship.add(new Point(7 * m + xPos, yPos + m * 0));
  ship.add(new Point(7 * m + xPos, yPos + m * 1));
  ship.add(new Point(8 * m + xPos, yPos + m * 1));
  ship.add(new Point(8 * m + xPos, yPos + m * 3));
  ship.add(new Point(12 * m + xPos, yPos + m * 3));
  ship.add(new Point(12 * m + xPos, yPos + m * 4));
  ship.add(new Point(13 * m + xPos, yPos + m * 4));
  ship.add(new Point(13 * m + xPos, yPos + m * 7));
  
  return ship
}


///////////////////////////////////////////////////////
//
// this function draws a UFO
//
function drawUFO(xPosition, yPosition, magnification) {

  var xPos = xPosition;
  var yPos = yPosition;
  var m = magnification;
  
  var ufo = new Path();
  ufo.fillColor = 'purple';
  ufo.add(new Point(0 * m + xPos, yPos + m * 5));
  ufo.add(new Point(0 * m + xPos, yPos + m * 4));
  ufo.add(new Point(1 * m + xPos, yPos + m * 4));
  ufo.add(new Point(1 * m + xPos, yPos + m * 3));
  ufo.add(new Point(2 * m + xPos, yPos + m * 3));
  ufo.add(new Point(2 * m + xPos, yPos + m * 2));
  ufo.add(new Point(3 * m + xPos, yPos + m * 2));
  ufo.add(new Point(3 * m + xPos, yPos + m * 1));
  ufo.add(new Point(5 * m + xPos, yPos + m * 1));
  ufo.add(new Point(5 * m + xPos, yPos + m * 0));
  ufo.add(new Point(11 * m + xPos, yPos + m * 0));
  ufo.add(new Point(11 * m + xPos, yPos + m * 1));
  ufo.add(new Point(13 * m + xPos, yPos + m * 1));
  ufo.add(new Point(13 * m + xPos, yPos + m * 2));
  ufo.add(new Point(14 * m + xPos, yPos + m * 2));
  ufo.add(new Point(14 * m + xPos, yPos + m * 3));
  ufo.add(new Point(15 * m + xPos, yPos + m * 3));
  ufo.add(new Point(15 * m + xPos, yPos + m * 4));
  ufo.add(new Point(16 * m + xPos, yPos + m * 4));
  ufo.add(new Point(16 * m + xPos, yPos + m * 5));
  ufo.add(new Point(14 * m + xPos, yPos + m * 5));
  ufo.add(new Point(14 * m + xPos, yPos + m * 6));
  ufo.add(new Point(13 * m + xPos, yPos + m * 6));
  ufo.add(new Point(13 * m + xPos, yPos + m * 7));
  ufo.add(new Point(12 * m + xPos, yPos + m * 7));
  ufo.add(new Point(12 * m + xPos, yPos + m * 6));
  ufo.add(new Point(11 * m + xPos, yPos + m * 6));
  ufo.add(new Point(11 * m + xPos, yPos + m * 5));
  ufo.add(new Point(9 * m + xPos, yPos + m * 5));
  ufo.add(new Point(9 * m + xPos, yPos + m * 6));
  ufo.add(new Point(7 * m + xPos, yPos + m * 6));
  ufo.add(new Point(7 * m + xPos, yPos + m * 5));
  ufo.add(new Point(5 * m + xPos, yPos + m * 5));
  ufo.add(new Point(5 * m + xPos, yPos + m * 6));
  ufo.add(new Point(4 * m + xPos, yPos + m * 6));
  ufo.add(new Point(4 * m + xPos, yPos + m * 7));
  ufo.add(new Point(3 * m + xPos, yPos + m * 7));
  ufo.add(new Point(3 * m + xPos, yPos + m * 6));
  ufo.add(new Point(2 * m + xPos, yPos + m * 6));
  ufo.add(new Point(2 * m + xPos, yPos + m * 5));
  
  var block = new Path();
  block.fillColor = 'black';
  block.add(new Point(3 * m + xPos, yPos + m * 3));
  block.add(new Point(4 * m + xPos, yPos + m * 3));
  block.add(new Point(4 * m + xPos, yPos + m * 4));
  block.add(new Point(3 * m + xPos, yPos + m * 4));
  var block = new Path();
  block.fillColor = 'black';
  block.add(new Point(6 * m + xPos, yPos + m * 3));
  block.add(new Point(7 * m + xPos, yPos + m * 3));
  block.add(new Point(7 * m + xPos, yPos + m * 4));
  block.add(new Point(6 * m + xPos, yPos + m * 4));
  var block = new Path();
  block.fillColor = 'black';
  block.add(new Point(9 * m + xPos, yPos + m * 3));
  block.add(new Point(10 * m + xPos, yPos + m * 3));
  block.add(new Point(10 * m + xPos, yPos + m * 4));
  block.add(new Point(9 * m + xPos, yPos + m * 4));
  var block = new Path();
  block.fillColor = 'black';
  block.add(new Point(12 * m + xPos, yPos + m * 3));
  block.add(new Point(13 * m + xPos, yPos + m * 3));
  block.add(new Point(13 * m + xPos, yPos + m * 4));
  block.add(new Point(12 * m + xPos, yPos + m * 4));

}


///////////////////////////////////////////////////////
//
// this function draws the lime alien
//
function drawLimeAlien(xPosition, yPosition, magnification) {

  var xPos = xPosition;
  var yPos = yPosition;
  var m = magnification;
  
  var alien = new Path();
  alien.fillColor = 'lime';
  alien.add(new Point(0 * m + xPos, yPos + m * 5));
  alien.add(new Point(0 * m + xPos, yPos + m * 2));
  alien.add(new Point(1 * m + xPos, yPos + m * 2));
  alien.add(new Point(1 * m + xPos, yPos + m * 1));
  alien.add(new Point(4 * m + xPos, yPos + m * 1));
  alien.add(new Point(4 * m + xPos, yPos + m * 0));
  alien.add(new Point(7 * m + xPos, yPos + m * 0));
  alien.add(new Point(7 * m + xPos, yPos + m * 1));
  alien.add(new Point(10 * m + xPos, yPos + m * 1));
  alien.add(new Point(10 * m + xPos, yPos + m * 2));
  alien.add(new Point(11 * m + xPos, yPos + m * 2));
  alien.add(new Point(11 * m + xPos, yPos + m * 5));
  alien.add(new Point(8 * m + xPos, yPos + m * 5));
  alien.add(new Point(8 * m + xPos, yPos + m * 6));
  alien.add(new Point(9 * m + xPos, yPos + m * 6));
  alien.add(new Point(9 * m + xPos, yPos + m * 7));
  alien.add(new Point(11 * m + xPos, yPos + m * 7));
  alien.add(new Point(11 * m + xPos, yPos + m * 8));
  alien.add(new Point(9 * m + xPos, yPos + m * 8));
  alien.add(new Point(9 * m + xPos, yPos + m * 7));
  alien.add(new Point(7 * m + xPos, yPos + m * 7));
  alien.add(new Point(7 * m + xPos, yPos + m * 6));
  alien.add(new Point(6 * m + xPos, yPos + m * 6));
  alien.add(new Point(6 * m + xPos, yPos + m * 5));
  alien.add(new Point(5 * m + xPos, yPos + m * 5));
  alien.add(new Point(5 * m + xPos, yPos + m * 6));
  alien.add(new Point(6 * m + xPos, yPos + m * 6));
  alien.add(new Point(6 * m + xPos, yPos + m * 7));
  alien.add(new Point(5 * m + xPos, yPos + m * 7));
  alien.add(new Point(5 * m + xPos, yPos + m * 6));
  alien.add(new Point(4 * m + xPos, yPos + m * 6));
  alien.add(new Point(4 * m + xPos, yPos + m * 7));
  alien.add(new Point(2 * m + xPos, yPos + m * 7));
  alien.add(new Point(2 * m + xPos, yPos + m * 8));
  alien.add(new Point(0 * m + xPos, yPos + m * 8));
  alien.add(new Point(0 * m + xPos, yPos + m * 7));
  alien.add(new Point(2 * m + xPos, yPos + m * 7));
  alien.add(new Point(2 * m + xPos, yPos + m * 6));
  alien.add(new Point(3 * m + xPos, yPos + m * 6));
  alien.add(new Point(3 * m + xPos, yPos + m * 5));
  alien.add(new Point(0 * m + xPos, yPos + m * 5));
  
  var eyeL = new Path();
  eyeL.fillColor = 'black';
  eyeL.add(new Point(3 * m + xPos, yPos + m * 3));
  eyeL.add(new Point(5 * m + xPos, yPos + m * 3));
  eyeL.add(new Point(5 * m + xPos, yPos + m * 4));
  eyeL.add(new Point(3 * m + xPos, yPos + m * 4));
  var eyeR = new Path();
  eyeR.fillColor = 'black';
  eyeR.add(new Point(6 * m + xPos, yPos + m * 3));
  eyeR.add(new Point(8 * m + xPos, yPos + m * 3));
  eyeR.add(new Point(8 * m + xPos, yPos + m * 4));
  eyeR.add(new Point(6 * m + xPos, yPos + m * 4));
  
  return new Group(alien, eyeL, eyeR)
}


///////////////////////////////////////////////////////
//
// this function draws the blue alien
//
function drawBlueAlien(xPosition, yPosition, magnification) {

  var xPos = xPosition;
  var yPos = yPosition;
  var m = magnification;
  
  var alien = new Path();
  alien.fillColor = 'blue';
  alien.add(new Point(16 * m + xPos - 16 * m, yPos + m * 5));
  alien.add(new Point(16 * m + xPos - 16 * m, yPos + m * 3));
  alien.add(new Point(17 * m + xPos - 16 * m, yPos + m * 3));
  alien.add(new Point(17 * m + xPos - 16 * m, yPos + m * 2));
  alien.add(new Point(18 * m + xPos - 16 * m, yPos + m * 2));
  alien.add(new Point(18 * m + xPos - 16 * m, yPos + m * 1));
  alien.add(new Point(20 * m + xPos - 16 * m, yPos + m * 1));
  alien.add(new Point(20 * m + xPos - 16 * m, yPos + m * 0));
  alien.add(new Point(23 * m + xPos - 16 * m, yPos + m * 0));
  alien.add(new Point(23 * m + xPos - 16 * m, yPos + m * 1));
  alien.add(new Point(25 * m + xPos - 16 * m, yPos + m * 1));
  alien.add(new Point(25 * m + xPos - 16 * m, yPos + m * 2));
  alien.add(new Point(26 * m + xPos - 16 * m, yPos + m * 2));
  alien.add(new Point(26 * m + xPos - 16 * m, yPos + m * 3));
  alien.add(new Point(27 * m + xPos - 16 * m, yPos + m * 3));
  alien.add(new Point(27 * m + xPos - 16 * m, yPos + m * 5));
  alien.add(new Point(24 * m + xPos - 16 * m, yPos + m * 5));
  alien.add(new Point(24 * m + xPos - 16 * m, yPos + m * 6));
  alien.add(new Point(25 * m + xPos - 16 * m, yPos + m * 6));
  alien.add(new Point(25 * m + xPos - 16 * m, yPos + m * 7));
  alien.add(new Point(26 * m + xPos - 16 * m, yPos + m * 7));
  alien.add(new Point(26 * m + xPos - 16 * m, yPos + m * 8));
  alien.add(new Point(25 * m + xPos - 16 * m, yPos + m * 8));
  alien.add(new Point(25 * m + xPos - 16 * m, yPos + m * 7));
  alien.add(new Point(24 * m + xPos - 16 * m, yPos + m * 7));
  alien.add(new Point(24 * m + xPos - 16 * m, yPos + m * 8));
  alien.add(new Point(23 * m + xPos - 16 * m, yPos + m * 8));
  alien.add(new Point(23 * m + xPos - 16 * m, yPos + m * 7));
  alien.add(new Point(24 * m + xPos - 16 * m, yPos + m * 7));
  alien.add(new Point(24 * m + xPos - 16 * m, yPos + m * 6));
  alien.add(new Point(23 * m + xPos - 16 * m, yPos + m * 6));
  alien.add(new Point(23 * m + xPos - 16 * m, yPos + m * 5));
  alien.add(new Point(20 * m + xPos - 16 * m, yPos + m * 5));
  alien.add(new Point(20 * m + xPos - 16 * m, yPos + m * 6));
  alien.add(new Point(23 * m + xPos - 16 * m, yPos + m * 6));
  alien.add(new Point(23 * m + xPos - 16 * m, yPos + m * 7));
  alien.add(new Point(20 * m + xPos - 16 * m, yPos + m * 7));
  alien.add(new Point(20 * m + xPos - 16 * m, yPos + m * 6));
  alien.add(new Point(19 * m + xPos - 16 * m, yPos + m * 6));
  alien.add(new Point(19 * m + xPos - 16 * m, yPos + m * 7));
  alien.add(new Point(20 * m + xPos - 16 * m, yPos + m * 7));
  alien.add(new Point(20 * m + xPos - 16 * m, yPos + m * 8));
  alien.add(new Point(19 * m + xPos - 16 * m, yPos + m * 8));
  alien.add(new Point(19 * m + xPos - 16 * m, yPos + m * 7));
  alien.add(new Point(18 * m + xPos - 16 * m, yPos + m * 7));
  alien.add(new Point(18 * m + xPos - 16 * m, yPos + m * 8));
  alien.add(new Point(17 * m + xPos - 16 * m, yPos + m * 8));
  alien.add(new Point(17 * m + xPos - 16 * m, yPos + m * 7));
  alien.add(new Point(18 * m + xPos - 16 * m, yPos + m * 7));
  alien.add(new Point(18 * m + xPos - 16 * m, yPos + m * 6));
  alien.add(new Point(19 * m + xPos - 16 * m, yPos + m * 6));
  alien.add(new Point(19 * m + xPos - 16 * m, yPos + m * 5));
  alien.add(new Point(16 * m + xPos - 16 * m, yPos + m * 5));
  
  var eyeL = new Path();
  eyeL.fillColor = 'black';
  eyeL.add(new Point(19 * m + xPos - 16 * m, yPos + m * 3));
  eyeL.add(new Point(20 * m + xPos - 16 * m, yPos + m * 3));
  eyeL.add(new Point(20 * m + xPos - 16 * m, yPos + m * 4));
  eyeL.add(new Point(19 * m + xPos - 16 * m, yPos + m * 4));
  var eyeR = new Path();
  eyeR.fillColor = 'black';
  eyeR.add(new Point(23 * m + xPos - 16 * m, yPos + m * 3));
  eyeR.add(new Point(24 * m + xPos - 16 * m, yPos + m * 3));
  eyeR.add(new Point(24 * m + xPos - 16 * m, yPos + m * 4));
  eyeR.add(new Point(23 * m + xPos - 16 * m, yPos + m * 4));
  
  return new Group(alien, eyeL, eyeR)
}


///////////////////////////////////////////////////////
//
// this function draws the red alien
//
function drawRedAlien(xPosition, yPosition, magnification) {

  var xPos = xPosition;
  var yPos = yPosition;
  var m = magnification;
  
  var alien = new Path();
  alien.fillColor = 'red';
  alien.add(new Point(0 * m + xPos, yPos - 13 * m + m * 20));
  alien.add(new Point(0 * m + xPos, yPos - 13 * m + m * 17));
  alien.add(new Point(1 * m + xPos, yPos - 13 * m + m * 17));
  alien.add(new Point(1 * m + xPos, yPos - 13 * m + m * 16));
  alien.add(new Point(2 * m + xPos, yPos - 13 * m + m * 16));
  alien.add(new Point(2 * m + xPos, yPos - 13 * m + m * 15));
  alien.add(new Point(3 * m + xPos, yPos - 13 * m + m * 15));
  alien.add(new Point(3 * m + xPos, yPos - 13 * m + m * 13));
  alien.add(new Point(2 * m + xPos, yPos - 13 * m + m * 13));
  alien.add(new Point(2 * m + xPos, yPos - 13 * m + m * 14));
  alien.add(new Point(4 * m + xPos, yPos - 13 * m + m * 14));
  alien.add(new Point(4 * m + xPos, yPos - 13 * m + m * 15));
  alien.add(new Point(7 * m + xPos, yPos - 13 * m + m * 15));
  alien.add(new Point(7 * m + xPos, yPos - 13 * m + m * 14));
  alien.add(new Point(9 * m + xPos, yPos - 13 * m + m * 14));
  alien.add(new Point(9 * m + xPos, yPos - 13 * m + m * 13));
  alien.add(new Point(8 * m + xPos, yPos - 13 * m + m * 13));
  alien.add(new Point(8 * m + xPos, yPos - 13 * m + m * 15));
  alien.add(new Point(9 * m + xPos, yPos - 13 * m + m * 15));
  alien.add(new Point(9 * m + xPos, yPos - 13 * m + m * 16));
  alien.add(new Point(10 * m + xPos, yPos - 13 * m + m * 16));
  alien.add(new Point(10 * m + xPos, yPos - 13 * m + m * 17));
  alien.add(new Point(11 * m + xPos, yPos - 13 * m + m * 17));
  alien.add(new Point(11 * m + xPos, yPos - 13 * m + m * 20));
  alien.add(new Point(10 * m + xPos, yPos - 13 * m + m * 20));
  alien.add(new Point(10 * m + xPos, yPos - 13 * m + m * 18));
  alien.add(new Point(9 * m + xPos, yPos - 13 * m + m * 18));
  alien.add(new Point(9 * m + xPos, yPos - 13 * m + m * 20));
  alien.add(new Point(6 * m + xPos, yPos - 13 * m + m * 20));
  alien.add(new Point(6 * m + xPos, yPos - 13 * m + m * 21));
  alien.add(new Point(8 * m + xPos, yPos - 13 * m + m * 21));
  alien.add(new Point(8 * m + xPos, yPos - 13 * m + m * 19));
  alien.add(new Point(3 * m + xPos, yPos - 13 * m + m * 19));
  alien.add(new Point(3 * m + xPos, yPos - 13 * m + m * 21));
  alien.add(new Point(5 * m + xPos, yPos - 13 * m + m * 21));
  alien.add(new Point(5 * m + xPos, yPos - 13 * m + m * 20));
  alien.add(new Point(2 * m + xPos, yPos - 13 * m + m * 20));
  alien.add(new Point(2 * m + xPos, yPos - 13 * m + m * 18));
  alien.add(new Point(1 * m + xPos, yPos - 13 * m + m * 18));
  alien.add(new Point(1 * m + xPos, yPos - 13 * m + m * 20));
  alien.add(new Point(0 * m + xPos, yPos - 13 * m + m * 20));
  
  var eyeL = new Path();
  eyeL.fillColor = 'black';
  eyeL.add(new Point(3 * m + xPos, yPos - 13 * m + m * 16));
  eyeL.add(new Point(4 * m + xPos, yPos - 13 * m + m * 16));
  eyeL.add(new Point(4 * m + xPos, yPos - 13 * m + m * 17));
  eyeL.add(new Point(3 * m + xPos, yPos - 13 * m + m * 17));
  var eyeR = new Path();
  eyeR.fillColor = 'black';
  eyeR.add(new Point(7 * m + xPos, yPos - 13 * m + m * 16));
  eyeR.add(new Point(8 * m + xPos, yPos - 13 * m + m * 16));
  eyeR.add(new Point(8 * m + xPos, yPos - 13 * m + m * 17));
  eyeR.add(new Point(7 * m + xPos, yPos - 13 * m + m * 17));
  
  return new Group(alien, eyeL, eyeR)
}


///////////////////////////////////////////////////////
//
// this function draws the yellow alien
//
function drawYellowAlien(xPosition, yPosition, magnification) {

  var xPos = xPosition;
  var yPos = yPosition;
  var m = magnification;
  
  var alien = new Path();
  alien.fillColor = 'yellow';
  alien.add(new Point(16 * m + xPos - 16 * m, yPos - 13 * m + m * 20));
  alien.add(new Point(16 * m + xPos - 16 * m, yPos - 13 * m + m * 14));
  alien.add(new Point(17 * m + xPos - 16 * m, yPos - 13 * m + m * 14));
  alien.add(new Point(17 * m + xPos - 16 * m, yPos - 13 * m + m * 16));
  alien.add(new Point(18 * m + xPos - 16 * m, yPos - 13 * m + m * 16));
  alien.add(new Point(18 * m + xPos - 16 * m, yPos - 13 * m + m * 15));
  alien.add(new Point(19 * m + xPos - 16 * m, yPos - 13 * m + m * 15));
  alien.add(new Point(19 * m + xPos - 16 * m, yPos - 13 * m + m * 13));
  alien.add(new Point(18 * m + xPos - 16 * m, yPos - 13 * m + m * 13));
  alien.add(new Point(18 * m + xPos - 16 * m, yPos - 13 * m + m * 14));
  alien.add(new Point(20 * m + xPos - 16 * m, yPos - 13 * m + m * 14));
  alien.add(new Point(20 * m + xPos - 16 * m, yPos - 13 * m + m * 15));
  alien.add(new Point(23 * m + xPos - 16 * m, yPos - 13 * m + m * 15));
  alien.add(new Point(23 * m + xPos - 16 * m, yPos - 13 * m + m * 14));
  alien.add(new Point(25 * m + xPos - 16 * m, yPos - 13 * m + m * 14));
  alien.add(new Point(25 * m + xPos - 16 * m, yPos - 13 * m + m * 13));
  alien.add(new Point(24 * m + xPos - 16 * m, yPos - 13 * m + m * 13));
  alien.add(new Point(24 * m + xPos - 16 * m, yPos - 13 * m + m * 15));
  alien.add(new Point(25 * m + xPos - 16 * m, yPos - 13 * m + m * 15));
  alien.add(new Point(25 * m + xPos - 16 * m, yPos - 13 * m + m * 16));
  alien.add(new Point(26 * m + xPos - 16 * m, yPos - 13 * m + m * 16));
  alien.add(new Point(26 * m + xPos - 16 * m, yPos - 13 * m + m * 14));
  alien.add(new Point(27 * m + xPos - 16 * m, yPos - 13 * m + m * 14));
  alien.add(new Point(27 * m + xPos - 16 * m, yPos - 13 * m + m * 18));
  alien.add(new Point(26 * m + xPos - 16 * m, yPos - 13 * m + m * 18));
  alien.add(new Point(26 * m + xPos - 16 * m, yPos - 13 * m + m * 19));
  alien.add(new Point(25 * m + xPos - 16 * m, yPos - 13 * m + m * 19));
  alien.add(new Point(25 * m + xPos - 16 * m, yPos - 13 * m + m * 21));
  alien.add(new Point(26 * m + xPos - 16 * m, yPos - 13 * m + m * 21));
  alien.add(new Point(26 * m + xPos - 16 * m, yPos - 13 * m + m * 20));
  alien.add(new Point(24 * m + xPos - 16 * m, yPos - 13 * m + m * 20));
  alien.add(new Point(24 * m + xPos - 16 * m, yPos - 13 * m + m * 19));
  alien.add(new Point(19 * m + xPos - 16 * m, yPos - 13 * m + m * 19));
  alien.add(new Point(19 * m + xPos - 16 * m, yPos - 13 * m + m * 20));
  alien.add(new Point(17 * m + xPos - 16 * m, yPos - 13 * m + m * 20));
  alien.add(new Point(17 * m + xPos - 16 * m, yPos - 13 * m + m * 21));
  alien.add(new Point(18 * m + xPos - 16 * m, yPos - 13 * m + m * 21));
  alien.add(new Point(18 * m + xPos - 16 * m, yPos - 13 * m + m * 19));
  alien.add(new Point(17 * m + xPos - 16 * m, yPos - 13 * m + m * 19));
  alien.add(new Point(17 * m + xPos - 16 * m, yPos - 13 * m + m * 18));
  alien.add(new Point(16 * m + xPos - 16 * m, yPos - 13 * m + m * 18));
  
  var eyeL = new Path();
  eyeL.fillColor = 'black';
  eyeL.add(new Point(19 * m + xPos - 16 * m, yPos - 13 * m + m * 16));
  eyeL.add(new Point(20 * m + xPos - 16 * m, yPos - 13 * m + m * 16));
  eyeL.add(new Point(20 * m + xPos - 16 * m, yPos - 13 * m + m * 17));
  eyeL.add(new Point(19 * m + xPos - 16 * m, yPos - 13 * m + m * 17));
  var eyeR = new Path();
  eyeR.fillColor = 'black';
  eyeR.add(new Point(23 * m + xPos - 16 * m, yPos - 13 * m + m * 16));
  eyeR.add(new Point(24 * m + xPos - 16 * m, yPos - 13 * m + m * 16));
  eyeR.add(new Point(24 * m + xPos - 16 * m, yPos - 13 * m + m * 17));
  eyeR.add(new Point(23 * m + xPos - 16 * m, yPos - 13 * m + m * 17));
  
  return new Group(alien, eyeL, eyeR)
}

}