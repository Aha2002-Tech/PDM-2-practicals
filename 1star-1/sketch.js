let button;
let input;
let feedback; 
const correctPassword = "Andeif";


function setup() {
  createCanvas(500, 600);
  

  input = createInput('');
  input.position(100, 250);

  button = createButton('Submit');
  button.position(300, 250);
  
  
  button.mousePressed(checkPassword);
}

function draw() {
  
  background(255, 0, 255); 

  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text('Username:', 50, 100);

  fill (255,255);
  text(feedback, 20, 300);
  

}

function checkPassword() {
  let msg = input.value();
  
  if (msg === correctPassword) {
    feedback = " That is correct!";
  } else {
    feedback = "Try again.";
    feedback.position(200,300);
  }
  
}