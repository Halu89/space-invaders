var alien = new Path.Rectangle(new Point(150, 60), new Point(170, 70));
alien.fillColor = "black";

var canonPos = [view.size.width / 2, view.size.height * 0.9];
var canon = new Path.Rectangle(canonPos, new Size(16, 10));
canon.fillColor = "green";

var laserShots = []; // Must be global to get accessed from both shoot and animate function

// For debug
canon.selected = true;
alien.selected = true;

var direction = true; // True for right, false for left.
var stepSize = view.size.width / 8;

// var timerID = setInterval(move, 500);




function lateralMove() {
  if (direction) {
    alien.position.x += stepSize;
  } else {
    alien.position.x -= stepSize;
  }
}

function move() {
  lateralMove();
  var isAlienInScreen =
    alien.bounds.right >= view.size.width - stepSize ||
    alien.bounds.left <= stepSize;

  if (isAlienInScreen) {
    alien.position.y += stepSize * 0.7; //adjusts for the width / height ratio of the view
    direction = !direction;
    lateralMove();
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


drawLimeAlien(10, 10, 4)