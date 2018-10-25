let stars = [];
//let speed;


function setup() {
  createCanvas(1120, 630); //16:9 ratio
  for (let i = 0; i < 1000; i++) {
    stars[i] = new Star();
  }
}
function draw() {
  //speed = map(mouseX, 0, width, 0, 50);
  background(0);
  translate(width / 2, height / 2);

}
