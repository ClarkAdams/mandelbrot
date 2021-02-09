import Player from '/circle/src/player.js';
import App from '/circle/src/app.js';


let canvas = document.getElementById("frame");
let ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

let app = new App(CANVAS_WIDTH, CANVAS_HEIGHT);
app.start();
app.draw(ctx);

let player = new Player(true);

function loop(timestamp){
	var progress = timestamp - lastRender;
	

	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	if (player.playback) {
		//console.log('playback active');
	}
	app.update(progress);
	app.draw(ctx);

	lastRender = timestamp;
	
	window.requestAnimationFrame(loop);
}

var lastRender = 0;
window.requestAnimationFrame(loop);
/*
ctx.beginPath();
ctx.arc(FRAME_WIDTH_CENTER, FRAME_HEIGHT_CENTER, FRAME_WIDTH/2, 0, 2*Math.PI);
ctx.stroke();
*/
