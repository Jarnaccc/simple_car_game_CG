'use strict'

class Car extends Collidable {
	constructor(x, y, z) {
		super();

		/* BODY: Design and place the main part of our car */
		this.basicMaterial1 = new THREE.MeshBasicMaterial({ color: 0xCC0000, wireframe:false });
		this.gouraudMaterial1 = new THREE.MeshLambertMaterial({color: 0xCC0000, wireframe:false});
		this.phongMaterial1 = new THREE.MeshPhongMaterial({color: 0xCC0000,specular:0xaa0000, wireframe:false});
		this.material1 = this.gouraudMaterial1;

		this.geometry = new THREE.Geometry();
		this.geometry.vertices.push(
			new THREE.Vector3(-11, 4,  6),
			new THREE.Vector3( 11, 4,  6),
			new THREE.Vector3( 11, 4, -6),
			new THREE.Vector3(-11, 4, -6),

			new THREE.Vector3(-11, -4,  6),
			new THREE.Vector3( 11, -4,  6),
			new THREE.Vector3( 11, -4, -6),
			new THREE.Vector3(-11, -4, -6)
		)
		this.geometry.faces.push(new THREE.Face3(0, 1, 2)); //Front Face
		this.geometry.faces.push(new THREE.Face3(0, 2, 3));

		this.geometry.faces.push(new THREE.Face3(4, 6, 5)); //Back Face
		this.geometry.faces.push(new THREE.Face3(7, 6, 4));

		this.geometry.faces.push(new THREE.Face3(3, 2, 6)); //Top Face
		this.geometry.faces.push(new THREE.Face3(3, 6, 7));

		this.geometry.faces.push(new THREE.Face3(0, 4, 5)); //Bottom Face
		this.geometry.faces.push(new THREE.Face3(0, 5, 1));

		this.geometry.faces.push(new THREE.Face3(1, 5, 6)); //Right Face
		this.geometry.faces.push(new THREE.Face3(1, 6, 2));

		this.geometry.faces.push(new THREE.Face3(0, 3, 7)); //left Face
		this.geometry.faces.push(new THREE.Face3(0, 7, 4));

		this.geometry.computeFaceNormals();

		this.mesh1 = new THREE.Mesh(this.geometry, this.material1);
		this.mesh1.position.set(0, 6, 0);	
		this.add(this.mesh1);

		/* TOP: Design and place the ceiling of our car */
		this.geometry = new THREE.Geometry();
		this.geometry.vertices.push(
			new THREE.Vector3(-4, 5,  6), 
			new THREE.Vector3( 4, 5,  6),
			new THREE.Vector3( 4, 5, -6),
			new THREE.Vector3(-4, 5, -6),

			new THREE.Vector3(-7, -5,  6), 
			new THREE.Vector3( 7, -5,  6),
			new THREE.Vector3( 7, -5, -6),
			new THREE.Vector3(-7, -5, -6)
		)
		this.geometry.faces.push(new THREE.Face3(0,1,2));//Front Face
		this.geometry.faces.push(new THREE.Face3(0,2,3));

		this.geometry.faces.push(new THREE.Face3(4,6,5));//Back Face
		this.geometry.faces.push(new THREE.Face3(7,6,4));

		this.geometry.faces.push(new THREE.Face3(3,2,6));//Top Face
		this.geometry.faces.push(new THREE.Face3(3,6,7));

		this.geometry.faces.push(new THREE.Face3(0,4,5));//Bottom Face
		this.geometry.faces.push(new THREE.Face3(0,5,1));

		this.geometry.faces.push(new THREE.Face3(1,5,6));//Right Face
		this.geometry.faces.push(new THREE.Face3(1,6,2));

		this.geometry.faces.push(new THREE.Face3(0,3,7));//left Face
		this.geometry.faces.push(new THREE.Face3(0,7,4));

		this.geometry.computeFaceNormals();

		this.basicMaterial2 = new THREE.MeshBasicMaterial({ color: 0xCC0000, wireframe: false });
		this.gouraudMaterial2 = new THREE.MeshLambertMaterial({ color: 0xCC0000, wireframe: false });
		this.phongMaterial2 = new THREE.MeshPhongMaterial({ color: 0xCC0000, specular: 0xaa0000, wireframe: false });
		this.material2 = this.gouraudMaterial2;
		
		this.mesh2 = new THREE.Mesh(this.geometry, this.material1);
		this.mesh2.position.set(-3, 15, 0);
		this.add(this.mesh2);

		/* BIG WHEELS: Design and place both of our big back wheels */
		this.geometry = new THREE.Geometry();
		this.geometry.vertices.push(
			new THREE.Vector3( 4, 0, -2),
			new THREE.Vector3( 4, 0,  2),
			new THREE.Vector3(-4, 0, -2),
			new THREE.Vector3(-4, 0,  2),

			new THREE.Vector3( 3.464,  3.464, -2),
			new THREE.Vector3( 3.464,  3.464,  2),
			new THREE.Vector3(-3.464,  3.464, -2),
			new THREE.Vector3(-3.464,  3.464,  2),

			new THREE.Vector3( 3.464, -3.464, -2),
			new THREE.Vector3( 3.464, -3.464,  2),
			new THREE.Vector3(-3.464, -3.464, -2),
			new THREE.Vector3(-3.464, -3.464,  2),

			new THREE.Vector3( 0,  4,  -2),
			new THREE.Vector3( 0,  4,   2),
			new THREE.Vector3( 0, -4,  -2),
			new THREE.Vector3( 0, -4,   2),
	
			new THREE.Vector3(0, 0, -2),
			new THREE.Vector3(0, 0,  2)

		)

		// SIDES
		this.geometry.faces.push(new THREE.Face3(0,1,4));
		this.geometry.faces.push(new THREE.Face3(1,5,4));

		this.geometry.faces.push(new THREE.Face3(4,5,12));
		this.geometry.faces.push(new THREE.Face3(5,13,12));

		this.geometry.faces.push(new THREE.Face3(12,13,6));
		this.geometry.faces.push(new THREE.Face3(13,7,6));

		this.geometry.faces.push(new THREE.Face3(6,7,2));
		this.geometry.faces.push(new THREE.Face3(7,3,2));

		this.geometry.faces.push(new THREE.Face3(2,3,10));
		this.geometry.faces.push(new THREE.Face3(3,11,10));

		this.geometry.faces.push(new THREE.Face3(10,11,14));
		this.geometry.faces.push(new THREE.Face3(11,15,14));

		this.geometry.faces.push(new THREE.Face3(14,15,8));
		this.geometry.faces.push(new THREE.Face3(15,9,8));

		this.geometry.faces.push(new THREE.Face3(8,9,0));
		this.geometry.faces.push(new THREE.Face3(9,1,0));

		// FRONT
		this.geometry.faces.push(new THREE.Face3(5, 1,17));
		this.geometry.faces.push(new THREE.Face3(13,5,17));
		this.geometry.faces.push(new THREE.Face3(7,13,17));
		this.geometry.faces.push(new THREE.Face3(3,7,17));
		this.geometry.faces.push(new THREE.Face3(11,3,17));
		this.geometry.faces.push(new THREE.Face3(15,11,17));
		this.geometry.faces.push(new THREE.Face3(9,15,17));
		this.geometry.faces.push(new THREE.Face3(1,9,17));

		// BACK
		this.geometry.faces.push(new THREE.Face3(0,4, 16));
		this.geometry.faces.push(new THREE.Face3(4,12,16));
		this.geometry.faces.push(new THREE.Face3(12,6,16));
		this.geometry.faces.push(new THREE.Face3(6,2,16));
		this.geometry.faces.push(new THREE.Face3(2,10,16));
		this.geometry.faces.push(new THREE.Face3(10,14,16));
		this.geometry.faces.push(new THREE.Face3(14,8,16));
		this.geometry.faces.push(new THREE.Face3(8,0,16));

		this.geometry.computeFaceNormals();

		this.basicMaterial3 = new THREE.MeshBasicMaterial({ color: 0x6C6F60, wireframe: false });
		this.gouraudMaterial3 = new THREE.MeshLambertMaterial({color: 0x6C6F60, wireframe: false});
		this.phongMaterial3 = new THREE.MeshPhongMaterial({color: 0x6C6F60,specular:0xfA6A89F, wireframe:false});
		this.material3 = this.gouraudMaterial3;

		this.mesh3 = new THREE.Mesh(this.geometry, this.material3);
		this.mesh3.position.set(-5, 4, -8);
		this.add(this.mesh3);

		this.basicMaterial4 = new THREE.MeshBasicMaterial({ color: 0x6C6F60, wireframe: false });
		this.gouraudMaterial4 = new THREE.MeshLambertMaterial({color: 0x6C6F60, wireframe: false});
		this.phongMaterial4 = new THREE.MeshPhongMaterial({color: 0x6C6F60,specular:0xfA6A89F, wireframe:false});
		this.material4 = this.gouraudMaterial4;
		this.geometry.computeFaceNormals();

		this.mesh4 = new THREE.Mesh(this.geometry, this.material4);
		this.mesh4.position.set(-5, 4, 8);
		this.add(this.mesh4);

		/* SMALL WHEELS: Design and place both of our small front wheels */
		this.geometry = new THREE.Geometry();
		this.geometry.vertices.push(
			new THREE.Vector3( 2, 0, -2),
			new THREE.Vector3( 2, 0,  2),
			new THREE.Vector3(-2, 0, -2),
			new THREE.Vector3(-2, 0,  2),

			new THREE.Vector3( 1.732,  1.732, -2),
			new THREE.Vector3( 1.732,  1.732,  2),
			new THREE.Vector3(-1.732,  1.732, -2),
			new THREE.Vector3(-1.732,  1.732,  2),

			new THREE.Vector3( 1.732, -1.732, -2),
			new THREE.Vector3( 1.732, -1.732,  2),
			new THREE.Vector3(-1.732, -1.732, -2),
			new THREE.Vector3(-1.732, -1.732,  2),

			new THREE.Vector3( 0,  2, -2),
			new THREE.Vector3( 0,  2,  2),
			new THREE.Vector3( 0, -2, -2),
			new THREE.Vector3( 0, -2,  2),
	
			new THREE.Vector3( 0, 0, -2),
			new THREE.Vector3( 0, 0,  2)

		)

		// SIDES
		this.geometry.faces.push(new THREE.Face3(0,1,4));
		this.geometry.faces.push(new THREE.Face3(1,5,4));

		this.geometry.faces.push(new THREE.Face3(4,5,12));
		this.geometry.faces.push(new THREE.Face3(5,13,12));

		this.geometry.faces.push(new THREE.Face3(12,13,6));
		this.geometry.faces.push(new THREE.Face3(13,7,6));

		this.geometry.faces.push(new THREE.Face3(6,7,2));
		this.geometry.faces.push(new THREE.Face3(7,3,2));

		this.geometry.faces.push(new THREE.Face3(2,3,10));
		this.geometry.faces.push(new THREE.Face3(3,11,10));

		this.geometry.faces.push(new THREE.Face3(10,11,14));
		this.geometry.faces.push(new THREE.Face3(11,15,14));

		this.geometry.faces.push(new THREE.Face3(14,15,8));
		this.geometry.faces.push(new THREE.Face3(15,9,8));

		this.geometry.faces.push(new THREE.Face3(8,9,0));
		this.geometry.faces.push(new THREE.Face3(9,1,0));

		// FRONT
		this.geometry.faces.push(new THREE.Face3(5, 1,17));
		this.geometry.faces.push(new THREE.Face3(13,5,17));
		this.geometry.faces.push(new THREE.Face3(7,13,17));
		this.geometry.faces.push(new THREE.Face3(3,7,17));
		this.geometry.faces.push(new THREE.Face3(11,3,17));
		this.geometry.faces.push(new THREE.Face3(15,11,17));
		this.geometry.faces.push(new THREE.Face3(9,15,17));
		this.geometry.faces.push(new THREE.Face3(1,9,17));

		// BACK
		this.geometry.faces.push(new THREE.Face3(0,4, 16));
		this.geometry.faces.push(new THREE.Face3(4,12,16));
		this.geometry.faces.push(new THREE.Face3(12,6,16));
		this.geometry.faces.push(new THREE.Face3(6,2,16));
		this.geometry.faces.push(new THREE.Face3(2,10,16));
		this.geometry.faces.push(new THREE.Face3(10,14,16));
		this.geometry.faces.push(new THREE.Face3(14,8,16));
		this.geometry.faces.push(new THREE.Face3(8,0,16));

		this.geometry.computeFaceNormals();	
		this.basicMaterial5 = new THREE.MeshBasicMaterial({ color: 0x6C6F60, wireframe: false });
		this.gouraudMaterial5 = new THREE.MeshLambertMaterial({color: 0x6C6F60, wireframe: false});
		this.phongMaterial5 = new THREE.MeshPhongMaterial({color: 0x6C6F60,specular:0xfA6A89F, wireframe:false});
		this.material5 = this.gouraudMaterial5;
		this.mesh5 = new THREE.Mesh(this.geometry, this.material5);
		this.mesh5.position.set(5, 2, -8);
		this.add(this.mesh5);

		this.geometry.computeFaceNormals();
		this.basicMaterial6 = new THREE.MeshBasicMaterial({ color: 0x6C6F60, wireframe: false });
		this.gouraudMaterial6 = new THREE.MeshLambertMaterial({color: 0x6C6F60, wireframe: false});
		this.phongMaterial6 = new THREE.MeshPhongMaterial({color: 0x6C6F60,specular:0xfA6A89F, wireframe:false});
		this.material6 = this.gouraudMaterial6;
		this.mesh6 = new THREE.Mesh(this.geometry, this.material6);
		this.mesh6.position.set(5, 2, 8);
		this.add(this.mesh6);

		scene.add(this);
		
		this.position.x = x-30;
		this.position.y = y;
		this.position.z = z-220;
		this.prevPosition = new THREE.Vector3(x-30, y, z-220);

		this.positionInit = new THREE.Vector3(x-30, y, z-220);
		this.speed = 0;
		this.acceleration = 0.25;
		this.direction = new THREE.Vector3(1, 0, 0);
		this.radius = 13;
		this.mass = 300;

		this.moveForth = false;
		this.moveBack = false;
		this.turnLeft = false; 
		this.turnRight = false;

		this.changeGouraud();

		/* HEADLIGHTS */
		this.rHeadLight = new THREE.SpotLight(0xFFFFFF, 2, 400);
		this.rHeadLight.position.set(10, 10, -5);
		this.add(this.rHeadLight);
		this.rHeadLight.target.position.set(-this.position.x*this.direction.x, 0, -this.position.z*this.direction.z);
		this.add(this.rHeadLight.target);

		this.lHeadLight = new THREE.SpotLight(0xFFFFFF, 2, 400);
		this.lHeadLight.position.set(10, 10, 5);
		this.add(this.lHeadLight);
		this.lHeadLight.target.position.set(-this.position.x*this.direction.x, 0, -this.position.z*this.direction.z);
		this.add(this.lHeadLight.target);

		this.rightLight = new THREE.Mesh(new THREE.SphereGeometry(1.5), new THREE.MeshBasicMaterial({ color: 0xCCCCCC, wireframe: false }));
		this.rightLight.position.set(10, 10, -5);
		this.add(this.rightLight);

		this.leftLight = new THREE.Mesh(new THREE.SphereGeometry(1.5), new THREE.MeshBasicMaterial({ color: 0xCCCCCC, wireframe: false }));
		this.leftLight.position.set(10, 10, 5);
		this.add(this.leftLight);
	}

	headLight(){
		this.rHeadLight.visible = !this.rHeadLight.visible;
		this.lHeadLight.visible = !this.lHeadLight.visible;
	}

	moveCar() {
		var rot = 0.05;

		this.prevPosition.x = this.position.x;
		this.prevPosition.z = this.position.z;

		//position
		this.position.x += this.direction.x * this.speed;
		this.position.z += this.direction.z * this.speed;


		this.rHeadLight.lookAt(this.direction);
		this.lHeadLight.lookAt(this.direction);

		//acceleration
		if (this.moveForth) this.acceleration = 0.125;
		else if (this.moveBack) this.acceleration = -0.125;
		 
		//turn
		if (((this.turnRight && this.moveForth) || (this.turnLeft && this.moveBack) )&& this.speed != 0) {
			this.direction.applyAxisAngle(new THREE.Vector3(0, 1, 0).normalize(), -rot);
			this.rotateY(-rot);
		} else if (((this.turnLeft && this.moveForth) || (this.turnRight && this.moveBack) )&& this.speed != 0) {
			this.direction.applyAxisAngle(new THREE.Vector3(0, 1, 0).normalize(), rot);
			this.rotateY(rot);
		}

		//speed
		if (this.speed < 6 && this.speed > -6 && (this.moveBack || this.moveForth))
			this.speed = this.speed + this.acceleration;

		//stop
		if ((this.moveBack==false && this.moveForth==false)) {
			if (this.speed < 0)
				this.speed += 0.0625;
			else if (this.speed > 0)
				this.speed -= 0.0625;
		}

		if (onTable(this) == false) {
			this.restart();
		}
	}

	treatCollision(obj) { 
		if (obj instanceof Butter || obj instanceof Candle) {
			this.position.x = this.prevPosition.x;
			this.position.z = this.prevPosition.z;
			this.speed = 0;

		} else if (obj instanceof Cheerio) {
			if (obj.speed == 0) {
				this.speed = this.speed * 0.99;
			} else {
				this.speed = this.speed * 0.99 + obj.speed * 0.001;
			}
		}
	}

	restart() {
		this.position.x = this.positionInit.x;
		this.position.y = this.positionInit.y;
		this.position.z = this.positionInit.z;
		this.speed = 0;
		this.acceleration = 0.25;
		this.moveForth = false;
		this.moveBack = false;
		this.turnLeft = false; 
		this.turnRight = false;
		this.direction = new THREE.Vector3(1, 0, 0);
		this.rotation.set(0,0,0);

		lives_three.loseLife();
	}

	changePhong() {
		this.material1 = this.phongMaterial1;
		this.material2 = this.phongMaterial3;

		this.mesh1.material = this.material1;
		this.mesh2.material = this.material1;

		this.mesh3.material= this.material2;
		this.mesh4.material = this.material2;
		this.mesh5.material = this.material2;
		this.mesh6.material = this.material2;
	}

	changeGouraud() {
		this.material1 = this.gouraudMaterial1;
		this.material2 = this.gouraudMaterial3;

		this.mesh1.material = this.material1;
		this.mesh2.material = this.material1;

		this.mesh3.material = this.material2;
		this.mesh4.material = this.material2;
		this.mesh5.material = this.material2;
		this.mesh6.material = this.material2;
	}

	changeBasic() {
		this.material1 = this.basicMaterial1;
		this.material2 = this.basicMaterial3;

		this.mesh1.material = this.material1;
		this.mesh2.material = this.material1;

		this.mesh3.material = this.material2;
		this.mesh4.material = this.material2;
		this.mesh5.material = this.material2;
		this.mesh6.material = this.material2;
	}
}