var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var r = c.getBoundingClientRect();
c.addEventListener("click", function(e) {
	ctx.fillStyle = "rgba(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", 100)";
	ctx.fillRect( e.clientX - r.left, e.clientY - r.top, 100, 200 );	
    });
                     
var clear = document.getElementById("clearButton");
clear.addEventListener("click", function() {
	ctx.clearRect(0, 0, c.width, c.height);
    });

