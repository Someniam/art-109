
let canvas; 
let count = 94;
let loX = new Array(count);
let loY = new Array(count);
let speedX = new Array(count);
let speedY = new Array(count);
let cirSize = new Array(count);
let colorsR = new Array(count);
let colorsG = new Array(count);
let colorsB = new Array(count);
let opacity = new Array(count);
let eyeball = new Array(count);


function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index", -2);
    background(100,100,100);

    for (let i=0; i < loX.length; i++) {
    loX[i] = width/2;
    loY[i] = height/2;
    speedX[i] = random(-3, 3);
    speedY[i] = random(-3, 3);
    cirSize[i] = random(10, 50);
    colorsR[i] = int(random(0, 255));
    colorsG[i] = int(random(0, 255));
    colorsB[i] = int(random(0, 255));
    opacity[i] = int(random(40, 155));
    eyeball[i] = int(random(0,2));
    console.log(speedX);
  }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {

  background(100);
  // makes a frame
  fill(250);
  rect(40, 40, width-80, height-80);

  for (let i = 0; i < loX.length; i++) {

     //check boundaries for all balls
     // note the '40+' and '-40' are to pull in the borders to match 
     // the background rect

    if (loX[i] < 40+cirSize[i]/2 || loX[i] > (width-40)-cirSize[i]/2 ) {
      speedX[i] = -speedX[i];
    }
    if (loY[i] < 40+cirSize[i]/2 || loY[i] > (height-40)-cirSize[i]/2) {
      speedY[i] = -speedY[i];
    }

    //draw all balls
    push();
    translate(loX[i],loY[i]);
    fill(colorsR[i],colorsG[i] ,colorsB[i],opacity[i]);
    ellipse(0,0,cirSize[i],cirSize[i]);

    if (eyeball[i] == 1){
      fill(0,120);
      ellipse(0,0,cirSize[i]-9, cirSize[i]-9);

    }
    pop();

   
    //update all positions
    loX[i] += speedX[i];
    loY[i] += speedY[i];

  } // end of loop

}

function mouseMoved(){
    drawThing(mouseX, mouseY);
}

function drawThing(_x, _y){
    strokeWeight(0);
    fill(random(200,255), random(200,255), random(200,255))
    ellipse(_x, _y, 30, 30);
}