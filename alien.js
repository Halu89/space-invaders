// Credits to Vladimir on Codepen.io


// Change these  parameters
drawShip(220, 400, 5);
drawUFO(190, 70, 8);

for (var x = 0; x < 400; x += 50){
  // and these  parameters
  drawLimeAlien(60 + x, 150, 3);
  drawBlueAlien(60 + x, 190, 3);
  drawRedAlien(60 + x, 230, 3);
  drawYellowAlien(60 + x, 270, 3);
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
globals.drawLimeAlien = function (xPosition, yPosition, magnification) {

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
  
  var eye = new Path();
  eye.fillColor = 'black';
  eye.add(new Point(3 * m + xPos, yPos + m * 3));
  eye.add(new Point(5 * m + xPos, yPos + m * 3));
  eye.add(new Point(5 * m + xPos, yPos + m * 4));
  eye.add(new Point(3 * m + xPos, yPos + m * 4));
  var eye = new Path();
  eye.fillColor = 'black';
  eye.add(new Point(6 * m + xPos, yPos + m * 3));
  eye.add(new Point(8 * m + xPos, yPos + m * 3));
  eye.add(new Point(8 * m + xPos, yPos + m * 4));
  eye.add(new Point(6 * m + xPos, yPos + m * 4));
  
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
  
  var eye = new Path();
  eye.fillColor = 'black';
  eye.add(new Point(19 * m + xPos - 16 * m, yPos + m * 3));
  eye.add(new Point(20 * m + xPos - 16 * m, yPos + m * 3));
  eye.add(new Point(20 * m + xPos - 16 * m, yPos + m * 4));
  eye.add(new Point(19 * m + xPos - 16 * m, yPos + m * 4));
  var eye = new Path();
  eye.fillColor = 'black';
  eye.add(new Point(23 * m + xPos - 16 * m, yPos + m * 3));
  eye.add(new Point(24 * m + xPos - 16 * m, yPos + m * 3));
  eye.add(new Point(24 * m + xPos - 16 * m, yPos + m * 4));
  eye.add(new Point(23 * m + xPos - 16 * m, yPos + m * 4));
  
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
  
  var eye = new Path();
  eye.fillColor = 'black';
  eye.add(new Point(3 * m + xPos, yPos - 13 * m + m * 16));
  eye.add(new Point(4 * m + xPos, yPos - 13 * m + m * 16));
  eye.add(new Point(4 * m + xPos, yPos - 13 * m + m * 17));
  eye.add(new Point(3 * m + xPos, yPos - 13 * m + m * 17));
  var eye = new Path();
  eye.fillColor = 'black';
  eye.add(new Point(7 * m + xPos, yPos - 13 * m + m * 16));
  eye.add(new Point(8 * m + xPos, yPos - 13 * m + m * 16));
  eye.add(new Point(8 * m + xPos, yPos - 13 * m + m * 17));
  eye.add(new Point(7 * m + xPos, yPos - 13 * m + m * 17));
  
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
  
  var eye = new Path();
  eye.fillColor = 'black';
  eye.add(new Point(19 * m + xPos - 16 * m, yPos - 13 * m + m * 16));
  eye.add(new Point(20 * m + xPos - 16 * m, yPos - 13 * m + m * 16));
  eye.add(new Point(20 * m + xPos - 16 * m, yPos - 13 * m + m * 17));
  eye.add(new Point(19 * m + xPos - 16 * m, yPos - 13 * m + m * 17));
  var eye = new Path();
  eye.fillColor = 'black';
  eye.add(new Point(23 * m + xPos - 16 * m, yPos - 13 * m + m * 16));
  eye.add(new Point(24 * m + xPos - 16 * m, yPos - 13 * m + m * 16));
  eye.add(new Point(24 * m + xPos - 16 * m, yPos - 13 * m + m * 17));
  eye.add(new Point(23 * m + xPos - 16 * m, yPos - 13 * m + m * 17));
  
}


  
  
