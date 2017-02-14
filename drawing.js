var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var r = c.getBoundingClientRect();
c.addEventListener("click", function(e) {drawCircles(e);});
                     
var clear = document.getElementById("clearButton");
clear.addEventListener("click", function() {
	ctx.clearRect(0, 0, c.width, c.height);
    });

var drawRect(e) = function(e){
	ctx.fillStyle = "rgba(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", 100)";
	ctx.fillRect( e.clientX - r.left, e.clientY - r.top, 100, 200 );	
    };

var drawCircles(e) = function(e){
	ctx.beginPath();
	ctx.moveTo(e.clientX - r.left, e.clientY - r.top);
	ctx.arc(e.clientX - r.left, e.clientY - r.top, 50, 0, Math.PI * 2);
	ctx.closePath();
	ctx.fillStyle = "red";
	ctx.fill();
	};
