import Dot from '/circle/src/dot.js';
import Player from '/circle/src/player.js';
import InputHandler from '/circle/src/input.js';


export default class App {

	constructor(canvasWidth, canvasHeight){
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.canvasWidthCenter = canvasWidth/2;
		this.canvasHeightCenter = canvasHeight/2;

		this.circleRadius = canvasWidth/2;
		this.offset = 911211049;
		this.numberOfPoints = 200;

	}

	start() {

		//Build array with set number of objects and offset		
		this.points = [];
		var angle = (2 *Math.PI)/this.numberOfPoints;

		this.InputHandler = new InputHandler(this);

		var i=0;
		for(var a = 0; a<(2*Math.PI); a+=angle){
			
			/*
			loop produces deviations using PI calculation. 
			if-statement fix to end loop after set number of iterations
			*/
			i++;
			if (i>this.numberOfPoints) { break; };
			
			this.points.push( new Dot(
				1, 
				this.canvasWidthCenter + this.circleRadius * Math.cos(a), 
				this.canvasHeightCenter + this.circleRadius * Math.sin(a),
				a,
				)
			);
		}

		//let player = new Player(true);

	}



	draw(ctx) {

		this.points.forEach(object => object.drawDot(ctx));
		this.points.forEach(object => object.drawLine(
			1,
			ctx,
			this.canvasWidthCenter + this.circleRadius * Math.cos(object.position.a*this.offset),
			this.canvasHeightCenter + this.circleRadius * Math.sin(object.position.a*this.offset),
			));

		document.getElementById("offset").innerHTML = this.offset;
		document.getElementById("numberofpoints").innerHTML = this.numberOfPoints;

		this.offset+=0.001;
	}

	update(progress) {

		//Build array with set number of objects and offset		
		this.points = [];
		var angle = (2 *Math.PI)/this.numberOfPoints;

		var i=0;
		for(var a = 0; a<(2*Math.PI); a+=angle){
			
			/*
			loop produces deviations using PI calculation. 
			if-statement fix to end loop after set number of iterations
			*/
			i++;
			if (i>this.numberOfPoints) { break; };
			
			this.points.push( new Dot(
				1, 
				this.canvasWidthCenter + this.circleRadius * Math.cos(a), 
				this.canvasHeightCenter + this.circleRadius * Math.sin(a),
				a,
				)
			);
		}
		

	}

	deleteLastPoint(){
		this.points.pop();
	}

	addPointLast(style, posX, posY, angle){
		this.points.push( new Dot(
			style, 
			posX, 
			posY,
			angle,
			)
		);
	}
}
