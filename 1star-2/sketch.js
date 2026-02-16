const fillColours = new Map();
const strokeColour = new Map();
let clickCount = 0;

function setup() {
  createCanvas(500, 600);
  background(255);
  fillColours.set(1, color('red'));
  fillColours.set(3, color('blue'));
  fillColours.set(8, color('yellow'));
  fillColours.set(6, color('black'));
  fillColours.set(5, color('green'));
  fillColours.set(7,color('pink'));

  strokeColour.set(2, color(0));       
  strokeColour.set(4, color(255, 0, 0));

  fill(200);
  stroke(20);
}

function mouseClicked() {
  clickCount++; 

  if (fillColours.has(clickCount)) {
    fill(fillColours.get(clickCount));
  }

  if (strokeColour.has(clickCount)) {
    stroke(strokeColour.get(clickCount));
  }
  
  drawShapes(); 
}
function drawShapes() {
  background(255);
  
  for (let i = 0; i < clickCount; i++) {
    let x = random(width);
    let y = random(height);
    ellipse(x, y, 40, 40);
  }
}