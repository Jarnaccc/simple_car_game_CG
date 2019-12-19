'use strict' 

class Goal extends Collidable {
	constructor(x, y, z) {
		super();

		/* First Z coordinate for the first line of the goal line */
		this.outerLowerChess = -155;

		/* “for” loop intended to design a chess-like pattern */
		for (var i = 0; i <= 20; i++) {
			this.geometry = new THREE.CubeGeometry(3, 0, 3);
			this.basicMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false });
			this.gouraudMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, wireframe: false});
			this.phongMaterial = new THREE.MeshPhongMaterial({color: 0xffffff,specular:0x333333, wireframe:false});
			this.material = this.gouraudMaterial;
			
			/* Outer Left Chess Strip */ 
			this.mesh = new THREE.Mesh(this.geometry, this.material);
			this.mesh.position.set(3, 0.1, this.outerLowerChess);
			this.add(this.mesh);

			/* Outer Right Chess Strip */
			this.mesh = new THREE.Mesh(this.geometry, this.material);
			this.mesh.position.set(-3, 0.1, this.outerLowerChess);
			this.add(this.mesh);

			/* Middle Chess Strip (will not be added in both limits) */
			if (i == 20) this.outerLowerChess += 6;
			this.mesh = new THREE.Mesh(this.geometry, this.material);
			this.mesh.position.set(0, 0.1, this.outerLowerChess-3);
			this.add(this.mesh);

			/* Each cell is a 3x3 square, so we will skip an empty 3x3 space between each cell */
			this.outerLowerChess = this.outerLowerChess - 6;
		}

		scene.add(this);
		this.changeGouraud();
	}
	
	/* TO DO: Future GOAL message when car runs over the Goal Line */
	treatCollision() {}

	changePhong() {
		this.material = this.phongMaterial;
		this.mesh.material = this.material;
	}

	changeGouraud() {
		this.material = this.gouraudMaterial;
		this.mesh.material = this.material;
	}

	changeBasic() {
		this.material = this.basicMaterial;
		this.mesh.material = this.material;
	}
}