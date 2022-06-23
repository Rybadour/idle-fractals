const width = window.innerWidth/2,
      height = window.innerHeight/2;

// Create a canvas
const canvas = document.getElementById('main-canvas');
if (canvas) {
  main(canvas as HTMLCanvasElement);
}

function main(canvas: HTMLCanvasElement) {
  canvas.width = width;
  canvas.height = height;
  document.body.appendChild(canvas);

  // Create 2d context, and fillStyle
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!!;
  ctx.fillStyle = '#000';

  // Create triangle points
  var points = [
      [ width/2, 0 ],
      [ 0, height ],
      [ width, height ]
  ];

  // Let's start in the center
  var current = [ width/2, height/2 ];

  // Draw a dot (1x1 rectangle)
  function draw_point(){
      ctx.fillRect(current[0],current[1],1,1);
  }

  // Move half way to a random vertex of the triangle
  function move_point(){
      var target = points[Math.random() * points.length | 0];
      current[0] = ( current[0] + target[0] ) / 2;
      current[1] = ( current[1] + target[1] ) / 2;
  }

  var iter = 80000;

  function update() {
    if (iter <= 0) return;
    
    for (let i = 0; i < 10; i++) {
      iter--;
      draw_point();
      move_point();
    }
    
    window.requestAnimationFrame(update);
  }

  // Draw until we run out of iterations
  window.requestAnimationFrame(update);
}