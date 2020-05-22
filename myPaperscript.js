var alien = new Path.Rectangle(new Point(150, 60), new Point(170, 70));
alien.selected = true;

var direction = true; // True for right, false for left.
var stepSize = view.size.width / 8 

alien.fillColor = "black";

var timerID = setInterval(move, 500);

function lateralMove() {
  if (direction) {
    alien.position.x += stepSize
  } else {
    alien.position.x -= stepSize
  }
}

function move() {
  lateralMove();
  if (alien.bounds.right >= view.size.width-stepSize || alien.bounds.left <= stepSize) {
    alien.position.y += stepSize * 0.7; //adjusts for the width / height ratio of the view
    direction= !direction;
    lateralMove();
  } 


 
}
