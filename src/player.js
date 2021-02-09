export default class Player {

	constructor(playback){
		this.playback = playback;
		this.targetNumberOfPoints = 0;
		this.targetOffset = 0;
	}

	randomePlayer(app){

		if (this.targetNumberOfPoints==app.numberOfPoints) {
			var numberOfPoints = Math.floor(Math.random() * 501) + 10;
		}
		if (this.targetOffset==app.offset) {
			var offset = (Math.floor(Math.random() * 100) + 1)/10;
		}

		if (this.targetNumberOfPoints>app.numberOfPoints) {
			app.addPointLast(1, posX, posY, angle)
		}
		if (this.targetNumberOfPoints<app.numberOfPoints) {
			app.deleteLastPoint();
		}
		if (this.offset>app.offset) {
			// statement
		}
		if (this.offset<app.offset) {
			// statement
		}
		else {
			
		}
		
		

		//app.points.forEach(object => object.position.)

		//console.log(numberOfPoints, offset);
	}

}