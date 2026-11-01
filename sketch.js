let ball;


function setup() {
  createCanvas(400, 400); 
  ball = new Walker();
}


function draw() {
  background(220, 500);
  ball.move();
  ball.hitWall();
  ball.show();
}

function circle2(posVector, d) {
  circle(posVector.x, posVector.y, d);
}

function mouseClicked() {
  ball.diz += 0.2;
}
