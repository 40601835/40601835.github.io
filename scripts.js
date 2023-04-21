/* 
	changing texts scripts
	This script was adapted to cycle through text tips - this feature is incomplete
	https://www.w3schools.com/howto/howto_js_toggle_text.asp
*/
function myFunction() {
  var x = document.getElementById("changeme");
  if (x.innerHTML === "Lorem ipsum dolor sit amet") {
    x.innerHTML = "This is a really really really really really really long tip";
  } else {
    x.innerHTML = "Lorem ipsum dolor sit amet";
  }
}

var canvas = document.getElementById("my_canvas");
var ctx = canvas.getContext('2d');

ctx.fillStyle = "#cdb4dbff";
ctx.fillRect(0,0,50,50);

ctx.fillStyle = "black";
ctx.lineWidth = 1
ctx.beginPath();
ctx.arc(25,25,25,0,Math.PI*2,true);
ctx.fill();

ctx.fillStyle = "#ffc8ddff";
ctx.lineWidth = 1
ctx.beginPath();
ctx.arc(25,25,12.5,0,Math.PI*2,true);
ctx.fill();