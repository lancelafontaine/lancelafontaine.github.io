/*
Source code obtained from http://codepen.io/SeanCarlin/pen/raoZmr. Licensed under the MIT license.
*/

var ctx = c.getContext("2d"),
    stars = [],
    initialStars = 50,
    n = initialStars,
    incrementStars = 5,
    maxSize = 5,
    mouse = false,
    i;

c.width = innerWidth;
c.height = innerHeight;

ctx.fillStyle = "#4b4b4b";


function init() {
  for (i = 0; i < initialStars; i++){
    stars.push({
      x: Math.floor(Math.random() * c.width),
      y: Math.floor(Math.random() * c.height),
      size: Math.random()*maxSize,
      speed: undefined
    });
  }

  draw();
}

function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  for (var i = 0; i < n; i++){
    star = stars[i];
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size/2, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fill();
  }
}

function update(){
  for (var i = 0; i < n; i++){
    star = stars[i];
    star.speed = star.size;

    if (mouse)
      star.x+=star.speed*10;
    else
      star.x+=star.speed;

    if (star.x > c.width)
      delete star;
  }
}

function createNewStars(){
  n+=incrementStars;
  for (var i = 0; i < incrementStars; i++){
    stars.push({
      x: -Math.floor(Math.random() * c.width),
      y: Math.floor(Math.random() * c.height),
      size: Math.random()*maxSize,
      speed: undefined
    });
  }
}

function main(){
  draw();
  update();
  requestAnimationFrame(main);
}

setInterval(createNewStars,500);

c.addEventListener("mousedown", function(){
  mouse = true;
});

c.addEventListener("mouseup", function(){
  mouse = false;
});

init();
main();
