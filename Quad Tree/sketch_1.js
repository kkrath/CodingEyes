let qTree;
function setup() {
  createCanvas(400, 400);
  let boundary = new Rectangle(200,200,200,200);
  qTree  = new QuadTree(boundary, 4);
    for(let i = 0; i < 500; i++){
    let x = random(width);
    let y = random(height);
    let p = new Point(x, y);
    console.log(x +","+y);
    qTree.insert(p);
  }
}

function draw(){
  background(0);
  qTree.show();

  stroke(0,255,0);
  rectMode(CENTER);
  let range = new Rectangle(mouseX, mouseY, 25, 25);
  rect(range.x, range.y, range.w * 2, range.h * 2);
  let points = qTree.query(range);
  for(let p of points){
    strokeWeight(4);
    point(p.x,p.y);
  }
}
