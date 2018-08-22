var canvas = document.getElementById("my_canvas");
var c = canvas.getContext("2d");


var container = {
    x:0,
    y:0,
  width: 1240,
  height:100
};

var circles = [{
  x: 50,
  y: 100,
  r: 10,
  vx: 10,
  vy: 9,

}, {
  x: 150,
  y: 80,
  r: 20,
  vx: 15,
  vy: 8
},
 {
  x: 100,
  y: 50,
  r: 15,
  vx: 8,
  vy: 10
}];

function animate() {
  
  c.fillStyle = "#000000";
 c.fillRect(container.x, container.y, container.width, container.height);


  for (var i = 0; i < circles.length; i++) {
    
    
    c.beginPath();
    c.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI * 2);
    c.strokeStyle="pink";
    c.stroke();

    
    if (circles[i].x - circles[i].r + circles[i].vx < container.x || circles[i].x + circles[i].r + circles[i].vx > container.x + container.width) {
      circles[i] .vx = -circles[i].vx;
    }

    if (circles[i].y + circles[i].r + circles[i].vy > container.y + container.height || circles[i].y - circles[i].r + circles[i].vy < container.y) {
      circles[i].vy = -circles[i].vy;
    }

    circles[i].x += circles[i].vx;
    circles[i].y += circles[i].vy;
  }

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);