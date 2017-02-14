var c = document.getElementById("slate");
var ctx = c.getContext("2d");

ctx.fillStyle = "#ff0000";

c.addEventListener("click", function(e) {
	ctx.fillRect( 50, 50, 100, 200 );	
    });
                     
var clear = document.getElementById("clearButton");
clear.addEventListener("click", function() {
	ctx.clearRect(0, 0, c.width, c.height);
    });

