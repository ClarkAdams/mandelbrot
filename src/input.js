export default class InputHandler {

	constructor(app){
		document.addEventListener("keydown", event => {
			
			switch (event.keyCode) {

				case 37:
					//left
					app.offset-=0.01;
					break;
				case 38:
					//up
					app.numberOfPoints+=1;
					break;		
				case 39:
					//right
					app.offset+=0.01;
					break;
				case 40:
					//down
					app.numberOfPoints-=1;
					break;
			}
		});

		
	}

}