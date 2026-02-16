

let shapes = new Map();

function setup(){

createCanvas(500,600);

fill(255,0,255);
  stroke(0);
fill(255,0,255)
shapes.set(ellipse, []);
shapes.set(rect,[]);


}
function draw(){

background(255);

textSize(32);
  
  strokeWeight(4);
  text('Congratulations', 100, 100);


    for (const [key, value] of shapes) {
    for (const item of value) {
     
      key(...item); 
    }
  }
}


function mouseClicked(){

const args = [mouseX, mouseY, random(20, 50), random(20, 50)];
if (frameCount % 2 === 0) {
    shapes.get(ellipse).push(args);
  } else {
    shapes.get(rect).push(args);
  }
  
  console.log(shapes);



}

