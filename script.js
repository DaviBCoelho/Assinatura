function toggleMode() {
    const html = document.documentElement

    if (html.classList.contains ('rotate')) {
        html.classList.remove ('rotate')
    } else {
        html.classList.add ('rotate')
    }
}

function toggleButton() {
    const html = document.documentElement

    if (html.classList.contains ('button-rotate')) {
        html.classList.remove ('button-rotate')
    } else {
        html.classList.add ('button-rotate')
    }
}



//window.addEventListener("load", () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    var rect = canvas.getBoundingClientRect();
    ctx.translate(-rect.x, -rect.y);
    let painting = false;
  
    function startPosition(e) {
      painting = true;
      draw(e);
    }
  
    function finishedPosition() {
      painting = false;
      ctx.beginPath();
    }
  
    function draw(e) {
      if (!painting) return;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.strokeStyle = "black";
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
      if (html.classList.contains ('button-rotate-canvas')){
      ctx.rotate(angle)}
    }
  
    function translateCanvasResize(e) {
      var rect2 = canvas.getBoundingClientRect();
      ctx.translate(rect.x-rect2.x, rect.y-rect2.y)
      rect = rect2
    }
  
    function translateCanvasScroll(e) {
      var rect2 = canvas.getBoundingClientRect();
      ctx.translate(rect.x-rect2.x, rect.y-rect2.y)
      rect = rect2
    }
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mouseout', finishedPosition);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('touchstart', startPosition);
    canvas.addEventListener('touchend', finishedPosition);
    canvas.addEventListener('touchmove', draw);
    window.addEventListener('resize', translateCanvasResize);
    window.addEventListener('scroll', translateCanvasScroll);

  //});

  function Erase() {
    const context = canvas.getContext('2d');
    context.clearRect(50, 100, canvas.width, canvas.height);
  }


function toggleCanvas(){
    const html = document.documentElement

    if (html.classList.contains ('button-rotate-canvas')) {
        html.classList.remove ('button-rotate-canvas')
    } else {
        html.classList.add ('button-rotate-canvas')
    }
}

function Save(){
    var canvas = document.getElementById('canvas');
    var link = document.getElementById('link');
  link.setAttribute('download', 'MintyPaper.png');
  link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  link.click();

}

canvas.addEventListener("touchmove", function (e) {
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);
  