'use strict'

class Lifes extends THREE.Object3D {
	constructor(x) {
		super();
		
		this.life1 = new Life(0);
		this.life2 = new Life(30);
		this.life3 = new Life(60);

		this.lifes = [this.life1, this.life2, this.life3];

		this.num = 3;
	}

	loseLife() {
		this.num--;
		if (this.num > 0) {
			this.lifes[this.num].destroy();
		} else {
			this.lifes[this.num].destroy();
			gameOver();
		}
	}

	changeToOrtographicCamera() {
		for (var i = 0; i < this.num; i++) {
			this.lifes[i].changeToOrtographicCamera(50*i);
		}
	}

	changeToPerspectiveCamera() {
		for (var i = 0; i < this.num; i++) {
			this.lifes[i].changeToPerspectiveCamera(50*i);
		}
	}

	changeToStalkerCamera() {
		for (var i = 0; i < this.num; i++) {
			this.lifes[i].changeToStalkerCamera(50*i);
		}
	}

	numLifes(){
		alert(this.num);
	}
}