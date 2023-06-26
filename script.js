function toggleMode() {
    const html = document.documentElement

    if (html.classList.contains ('rotate')) {
        html.classList.remove ('rotate')
    } else {
        html.classList.add ('rotate')
    }
}

$(document).ready(function () {
    //User Variables
    var canvas = document.getElementById('canvas');  //canvas element
    var context = canvas.getContext("2d");           //context element
    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    canvas.addEventListener("mousedown", mouseDown, false);
        canvas.addEventListener("mousemove", mouseXY, false);
        document.body.addEventListener("mouseup", mouseUp, false);

        //For mobile
        canvas.addEventListener("touchstart", mouseDown, false);
        canvas.addEventListener("touchmove", mouseXY, true);
        canvas.addEventListener("touchend", mouseUp, false);
        document.body.addEventListener("touchcancel", mouseUp, false);

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas

        context.strokeStyle = "#000000";  //set the "ink" color
        context.lineJoin = "miter";       //line join
        context.lineWidth = 2;            //"ink" width

        for (var i = 0; i < clickX.length; i++) {
            context.beginPath();                               //create a path
            if (clickDrag[i] && i) {
                context.moveTo(clickX[i - 1], clickY[i - 1]);  //move to
            } else {
                context.moveTo(clickX[i] - 1, clickY[i]);      //move to
            }
            context.lineTo(clickX[i], clickY[i]);              //draw a line
            context.stroke();                                  //filled with "ink"
            context.closePath();                               //close path
        }
    }

    function addClick(x, y, dragging) {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
    }

    function mouseXY (e) {
        var touches = e.touches || [];
        var touch = touches[0] || {};
        if (paint) {
            addClick(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop - 40, true);
            draw();
        }
   }
   

    function mouseUp() {
      paint = false;
    }

    function mouseDown(e)
    {
      var mouseX = e.pageX - this.offsetLeft;
            var mouseY = e.pageY - this.offsetTop;
            paint = true;
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop - 40);
            draw();
    }

    //Clear the Zig
     document.getElementById("clearSig").onclick = function () {
          clickX = new Array();
          clickY = new Array();
          clickDrag = new Array();
          context.clearRect(0, 0, canvas.width, canvas.height);
          $("#imgData").html('');
    };
});

