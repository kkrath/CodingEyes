var cities = [];
var totalCities = 6;
var recordDistances  = 0;
var bestEver;

function setup(){
  createCanvas(600,400);
  for(var i = 0; i < totalCities; i++){
    var v = createVector(random(width),random(height));
    cities[i] = v;
  }
  recordDistances = calcDistance(cities);
  bestEver = cities.slice();
}

function draw(){
  background(0);
  fill(355);
  for(var i = 0; i < cities.length; i++){
    ellipse(cities[i].x, cities[i].y, 4, 4);
  }

  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for(var i = 0; i < cities.length; i++){
    vertex(cities[i].x, cities[i].y)
  }
  endShape();

  stroke(255, 0, 255);
  strokeWeight(4);
  noFill();
  beginShape();
  for(var i = 0; i < bestEver.length; i++){
    vertex(bestEver[i].x, bestEver[i].y)
  }
  endShape();


  var i = floor(random(cities.length));
  var j = floor(random(cities.length));
  swap(cities,i,j);

  var d = calcDistance(cities);
  if (d < recordDistances){
    recordDistances = d;
    bestEver = cities.slice();
    console.log(recordDistances);
  }
}

function swap(a, i, j){
  var temp = a[i];
  a[i] = a [j];
  a[j] = temp;
}


function calcDistance(points){
  var totalDistance  = 0;
  for(var i = 0; i < points.length - 1; i++){
    var d  = dist(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
    totalDistance += d;
  }
  return totalDistance;
}
