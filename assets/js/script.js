var image = document.getElementById('cursor');


// Light Logic
function init() {
  document.onmousemove = mousemove;
}

function mousemove(event) {
  var mouse_x = event.clientX;
  var mouse_y = event.clientY;

  var fl = document.getElementById('flashlight')
  if (fl) {
    fl.style.transform = 'translate(calc(' + mouse_x + 'px - 50vw), ' + 'calc(' + mouse_y + 'px - 50vh))';
  }
}

init();


// Cursor Logic

document.addEventListener('mousemove', function (event) {
  image.style.left = event.pageX + 'px';
  image.style.top = event.pageY + 'px';
});


// Rain Logic
$(document).ready(function () {
  var canvas = $('#canvas')[0];
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';


    var init = [];
    var maxParts = 1000;
    for (var a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 10 + 2,
        ys: Math.random() * 10 + 10
      })
    }

    var particles = [];
    for (var b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (var c = 0; c < particles.length; c++) {
        var p = particles[c];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx.stroke();
      }
      move();
    }

    function move() {
      for (var b = 0; b < particles.length; b++) {
        var p = particles[b];
        p.x += p.xs;
        p.y += p.ys;
        if (p.x > w || p.y > h) {
          p.x = Math.random() * w;
          p.y = -20;
        }
      }
    }

    setInterval(draw, 30);

  }
});


// Preloader Logic
window.onload = function () {
  document.querySelector("#pre-loader").style.display = "none";
}