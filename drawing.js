var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var r = c.getBoundingClientRect();

var coor = {x : null, y : null};

var drawRect = function(e){
	ctx.fillStyle = "rgba(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", 100)";
	ctx.fillRect( e.clientX - r.left, e.clientY - r.top, 100, 200 );	
    }

var drawCircles = function(e){
	ctx.beginPath();
	ctx.arc(e.clientX - r.left, e.clientY - r.top, 20, 0, Math.PI * 2);
	ctx.closePath();
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.stroke();
	}

var connectCircles = function(e){
	ctx.moveTo(e.clientX - r.left, e.clientY - r.top);
	ctx.lineTo(coor.x, coor.y);
	ctx.stroke()
	}
	
c.addEventListener("click", function(e) {
	drawCircles(e);
	if (coor.x !== null) connectCircles(e);
	coor.x = e.clientX - r.left;
	coor.y = e.clientY - r.top;
	});
                     
var clear = document.getElementById("clearButton");
clear.addEventListener("click", function() {
	ctx.clearRect(0, 0, c.width, c.height);
	coor.x = null;
	coor.y = null;
    });


