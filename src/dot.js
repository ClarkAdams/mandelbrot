

export default class Dot {

	constructor(style, posX, posY, dotPosAngle){
		this.style = style;
		
		this.position = {
			x: posX,
			y: posY,
			a: dotPosAngle,
		}
		
	}

	drawDot(ctx){
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
	}

	drawLine(style, ctx, targetX, targetY) {
		ctx.strokeStyle ='red';
		ctx.lineWidth =1;
		ctx.beginPath();
		ctx.moveTo(this.position.x, this.position.y);

		ctx.lineTo(targetX, targetY);
		ctx.stroke();
	}

	update(){

	}

}