var canvas, ctx;

$(document).ready(function () {
  canvas = $('#splash .logo').get(0);

  if (!canvas.getContext) {
    fallback();
  } else {
    ctx = canvas.getContext('2d');
    setInterval(function () {
      drawFrame();
    }, 1000 / 30);
  }
});

function fallback () {
  
}

function drawFrame () {
  canvas.width = canvas.width;
  var width = canvas.width;
  var height = canvas.height;

  ctx.imageSmoothingEnabled = false;
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(0, height / 3);
  ctx.lineTo(width, height / 3);
  ctx.lineTo(width / 2, height);
  ctx.lineTo(0, height / 3);
  ctx.lineTo(width / 4, height * .133);
  ctx.lineTo(width / 4 * 3, height * .133);
  ctx.lineTo(width, height / 3);
  ctx.closePath();
  ctx.stroke();

  var t = +new Date() / 2000;
  for (var i = 1; i < 7; i++) {
    var hw = width / 2;
    var x = Math.sin(t + i) * hw + hw;

    ctx.beginPath();
    ctx.moveTo(width / 4, height * .133);
    ctx.lineTo(x.clamp(0, width), height / 3); 
    ctx.lineTo(width / 4 * 3, height * .133);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width / 2, height);
    ctx.lineTo(x.clamp(0, width), height / 3);
    ctx.closePath();
    ctx.stroke();
  }
}

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

