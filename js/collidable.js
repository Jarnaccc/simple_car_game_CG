'use strict'

class Collidable extends THREE.Object3D {
	constructor() {
		super();
		this.onTable = true;
	}

	hasCollided(obj) {
		return Math.pow(this.position.x - obj.position.x, 2) + Math.pow(this.position.z - obj.position.z, 2) <=
			Math.pow((this.radius + obj.radius), 2) ;
	}

	treatCollision(obj) {}

	randomPosition(y) {
		var x = Math.floor((Math.random() * table.tableWidth) - table.tableWidth / 2);
		var z = Math.floor((Math.random() * table.tableHeight) - table.tableHeight / 2);

		this.position.set(x, y, z);
		
		if (this.hasCollided(car))
			this.randomPosition(y);
	}

	changePhong() {}

	changeGouraud() {}

	changeBasic() {}
}