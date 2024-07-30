function setup() {
 createCanvas(700, 480);

// R, G & B values.
  background (250 ,165 , 80);

// take a big brush
  strokeWeight(10);
// dip it in color purple
  stroke('yellow');
         
// place a dot on a screen
         point(100/5, 200/5);
}

function draw(){
  //declare variables
  let posY = mouseY;
  let posX = mouseX;
  point(posX, posY);
  // point(-posX, posY);
}
