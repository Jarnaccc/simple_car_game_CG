'use strict'

class Orange extends Collidable {
	constructor() {
		super();

		this.basicMaterial2 = new THREE.MeshBasicMaterial({color: 0x3F2810, wireframe: false});
		this.gouraudMaterial2 = new THREE.MeshLambertMaterial({color: 0x3F2810, wireframe: false});
		this.phongMaterial2 = new THREE.MeshPhongMaterial({color: 0x3F2810,specular:0xFFCC7F, wireframe:false});
		this.material = this.gouraudMaterial;

		this.geometry = new THREE.SphereGeometry(8, 10, 10);
		this.mesh1 = new THREE.Mesh(this.geometry, this.material2);
		this.mesh1.position.set(0, 0, 0);
		this.add(this.mesh1);

		this.geometry = new THREE.TorusBufferGeometry(3, 1, 8, 15, 2*Math.PI/1.5);

		this.basicMaterial1 = new THREE.MeshBasicMaterial({color: 0xFF9900, wireframe: false});
		this.gouraudMaterial1 = new THREE.MeshLambertMaterial({color: 0xFF9900, wireframe: false});
		this.phongMaterial1 = new THREE.MeshPhongMaterial({color: 0xFF9900,specular:0xFFCC7F, wireframe:false});
		this.mesh2 = new THREE.Mesh(this.geometry, this.material1);
		this.mesh2.position.set(4, 4, 4);
		this.add(this.mesh2);

		this.randomPosition(8);

		this.speed = (Math.random() * 0.5) + 0.05 + world_clock.getElapsedTime()*0.001;
		this.direction = new THREE.Vector3(1, 0, 0);
		this.direction.applyAxisAngle(new THREE.Vector3(0, 1, 0).normalize(), (Math.random() * 4*Math.PI) - 2*Math.PI);
	
		scene.add(this);
		oranges.push(this);

		this.onTable = true;
		this.timer = 0;
		this.clock = new THREE.Clock(true);
		this.radius = 4;
		this.changeGouraud();
	}

	restartOrange() {
		if (this.clock.getElapsedTime() > (Math.random() * 3) + 0.5) {
			this.randomPosition(8);
			
			this.speed = (Math.random() * 0.5) + 0.05 + world_clock.getElapsedTime() * 0.001;
			
			this.direction = new THREE.Vector3(1, 0, 0);
			this.direction.applyAxisAngle(new THREE.Vector3(0, 1, 0).normalize(), (Math.random() * 4*Math.PI) - 2*Math.PI);
			
			this.clock.stop();
			this.visible = true;
		}
	}

	moveOrange() {
		if (this.speed < 2 && this.speed > -2)
			this.speed += world_clock.getElapsedTime() * 0.001;

		this.position.x += this.direction.x * this.speed;
		this.position.z += this.direction.z * this.speed;
		
		// TO BE IMPROVED
		this.rotateOnAxis(new THREE.Vector3(this.direction.z, 0, -this.direction.x).normalize(), 
			Math.sqrt(Math.pow(this.direction.x * this.speed, 2) + Math.pow(this.direction.z * this.speed, 2)) / 8);

		if (this.clock.running == true) {
			this.restartOrange();
		} else if (onTable(this) == false) {
			this.visible = false;
			this.clock.start();
		}
	}

	treatCollision(obj) {
		this.clock.start();
		this.position.set(-1000, -1000, -1000);
		this.visible = false;
	}

	changePhong() {
		this.mesh1.material = this.phongMaterial1;
		this.mesh2.material = this.phongMaterial2;
	}

	changeGouraud() {
		this.mesh1.material = this.gouraudMaterial1;
		this.mesh2.material = this.gouraudMaterial2;
	}

	changeBasic() {
		this.mesh1.material = this.basicMaterial1;
		this.mesh2.material = this.basicMaterial2;
	}
}