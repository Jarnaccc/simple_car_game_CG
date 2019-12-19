'use strict'

class Table extends THREE.Object3D {
	constructor(x, y, z) {
		super();

		this.geometry = new THREE.Geometry();
		this.geometry.vertices.push(
			new THREE.Vector3(600, 1, -300), // TOP
			new THREE.Vector3(600, 1, -100),
			new THREE.Vector3(600, 1, 100),
			new THREE.Vector3(600, 1, 300),

			new THREE.Vector3(400, 1, -300),
			new THREE.Vector3(400, 1, -100),
			new THREE.Vector3(400, 1,  100),
			new THREE.Vector3(400, 1,  300),

			new THREE.Vector3(200, 1, -300),
			new THREE.Vector3(200, 1, -100),
			new THREE.Vector3(200, 1,  100),
			new THREE.Vector3(200, 1,  300),

			new THREE.Vector3(0, 1, -300),
			new THREE.Vector3(0, 1, -100),
			new THREE.Vector3(0, 1,  100),
			new THREE.Vector3(0, 1,  300),

			new THREE.Vector3(-200, 1, -300),
			new THREE.Vector3(-200, 1, -100),
			new THREE.Vector3(-200, 1,  100),
			new THREE.Vector3(-200, 1,  300),
			
			new THREE.Vector3(-400, 1, -300),
			new THREE.Vector3(-400, 1, -100),
			new THREE.Vector3(-400, 1,  100),
			new THREE.Vector3(-400, 1,  300),

			new THREE.Vector3(-600, 1, -300),
			new THREE.Vector3(-600, 1, -100),
			new THREE.Vector3(-600, 1,  100),
			new THREE.Vector3(-600, 1,  300),

			new THREE.Vector3(600, -1, -300), // BOTTOM
			new THREE.Vector3(600, -1, -100),
			new THREE.Vector3(600, -1,  100),
			new THREE.Vector3(600, -1,  300),

			new THREE.Vector3(400, -1, -300),
			new THREE.Vector3(400, -1, -100),
			new THREE.Vector3(400, -1,  100),
			new THREE.Vector3(400, -1,  300),

			new THREE.Vector3(200, -1, -300),
			new THREE.Vector3(200, -1, -100),
			new THREE.Vector3(200, -1,  100),
			new THREE.Vector3(200, -1,  300),

			new THREE.Vector3(0, -1, -300),
			new THREE.Vector3(0, -1, -100),
			new THREE.Vector3(0, -1,  100),
			new THREE.Vector3(0, -1,  300),

			new THREE.Vector3(-200, -1, -300),
			new THREE.Vector3(-200, -1, -100),
			new THREE.Vector3(-200, -1,  100),
			new THREE.Vector3(-200, -1,  300),
			
			new THREE.Vector3(-400, -1, -300),
			new THREE.Vector3(-400, -1, -100),
			new THREE.Vector3(-400, -1,  100),
			new THREE.Vector3(-400, -1,  300),

			new THREE.Vector3(-600, -1, -300),
			new THREE.Vector3(-600, -1, -100),
			new THREE.Vector3(-600, -1,  100),
			new THREE.Vector3(-600, -1,  300)
		)

		// TOP
		this.geometry.faces.push(new THREE.Face3(0,4,5));
		this.geometry.faces.push(new THREE.Face3(5,1,0));
		this.geometry.faces.push(new THREE.Face3(1,5,6));
		this.geometry.faces.push(new THREE.Face3(6,2,1));
		this.geometry.faces.push(new THREE.Face3(2,6,7));
		this.geometry.faces.push(new THREE.Face3(7,3,2));
		this.geometry.faces.push(new THREE.Face3(4,8,9));
		this.geometry.faces.push(new THREE.Face3(9,5,4));
		this.geometry.faces.push(new THREE.Face3(5,9,10));
		this.geometry.faces.push(new THREE.Face3(10,6,5));
		this.geometry.faces.push(new THREE.Face3(6,10,11));
		this.geometry.faces.push(new THREE.Face3(11,7,6));
		this.geometry.faces.push(new THREE.Face3(8,12,13));
		this.geometry.faces.push(new THREE.Face3(13,9,8));
		this.geometry.faces.push(new THREE.Face3(9,13,14));
		this.geometry.faces.push(new THREE.Face3(14,10,9));
		this.geometry.faces.push(new THREE.Face3(10,14,15));
		this.geometry.faces.push(new THREE.Face3(15,11,10));
		this.geometry.faces.push(new THREE.Face3(12,16,17));
		this.geometry.faces.push(new THREE.Face3(17,13,12));
		this.geometry.faces.push(new THREE.Face3(13,17,18));
		this.geometry.faces.push(new THREE.Face3(18,14,13));
		this.geometry.faces.push(new THREE.Face3(14,18,19));
		this.geometry.faces.push(new THREE.Face3(19,15,14));
		this.geometry.faces.push(new THREE.Face3(16,20,21));
		this.geometry.faces.push(new THREE.Face3(21,17,16));
		this.geometry.faces.push(new THREE.Face3(17,21,22));
		this.geometry.faces.push(new THREE.Face3(22,18,17));
		this.geometry.faces.push(new THREE.Face3(18,22,23));
		this.geometry.faces.push(new THREE.Face3(23,19,18));
		this.geometry.faces.push(new THREE.Face3(20,24,25));
		this.geometry.faces.push(new THREE.Face3(25,21,20));
		this.geometry.faces.push(new THREE.Face3(21,25,26));
		this.geometry.faces.push(new THREE.Face3(26,22,21));  
		this.geometry.faces.push(new THREE.Face3(22,26,27));
		this.geometry.faces.push(new THREE.Face3(27,23,22));

		// BOTTOM
		this.geometry.faces.push(new THREE.Face3(28,29,33));
		this.geometry.faces.push(new THREE.Face3(33,32,28));
		this.geometry.faces.push(new THREE.Face3(29,30,34));
		this.geometry.faces.push(new THREE.Face3(34,33,29));
		this.geometry.faces.push(new THREE.Face3(30,31,35));
		this.geometry.faces.push(new THREE.Face3(35,34,30));
		this.geometry.faces.push(new THREE.Face3(32,33,37));
		this.geometry.faces.push(new THREE.Face3(37,36,32));
		this.geometry.faces.push(new THREE.Face3(33,34,38));
		this.geometry.faces.push(new THREE.Face3(38,37,33));
		this.geometry.faces.push(new THREE.Face3(34,35,39));
		this.geometry.faces.push(new THREE.Face3(39,38,34));
		this.geometry.faces.push(new THREE.Face3(36,37,41));
		this.geometry.faces.push(new THREE.Face3(41,40,36));
		this.geometry.faces.push(new THREE.Face3(37,38,42));
		this.geometry.faces.push(new THREE.Face3(42,41,37));
		this.geometry.faces.push(new THREE.Face3(38,39,43));
		this.geometry.faces.push(new THREE.Face3(43,42,38));
		this.geometry.faces.push(new THREE.Face3(40,41,45));
		this.geometry.faces.push(new THREE.Face3(45,44,40));
		this.geometry.faces.push(new THREE.Face3(41,42,46));
		this.geometry.faces.push(new THREE.Face3(46,45,41));
		this.geometry.faces.push(new THREE.Face3(42,43,47));
		this.geometry.faces.push(new THREE.Face3(47,46,42));
		this.geometry.faces.push(new THREE.Face3(44,45,49));
		this.geometry.faces.push(new THREE.Face3(49,48,44));
		this.geometry.faces.push(new THREE.Face3(45,46,50));
		this.geometry.faces.push(new THREE.Face3(50,49,45));
		this.geometry.faces.push(new THREE.Face3(46,47,51));
		this.geometry.faces.push(new THREE.Face3(51,50,46));
		this.geometry.faces.push(new THREE.Face3(48,49,53));
		this.geometry.faces.push(new THREE.Face3(53,52,48));
		this.geometry.faces.push(new THREE.Face3(49,50,54));
		this.geometry.faces.push(new THREE.Face3(54,53,49));  
		this.geometry.faces.push(new THREE.Face3(50,51,55));
		this.geometry.faces.push(new THREE.Face3(55,54,50));

		// SIDES
		this.geometry.faces.push(new THREE.Face3(8,0,28));
		this.geometry.faces.push(new THREE.Face3(28,30,8));
		this.geometry.faces.push(new THREE.Face3(16,8,30));
		this.geometry.faces.push(new THREE.Face3(30,44,16));
		this.geometry.faces.push(new THREE.Face3(24,16,44));
		this.geometry.faces.push(new THREE.Face3(44,52,24));
		this.geometry.faces.push(new THREE.Face3(27,24,52));
		this.geometry.faces.push(new THREE.Face3(52,55,27));
		this.geometry.faces.push(new THREE.Face3(19,27,55));
		this.geometry.faces.push(new THREE.Face3(55,47,19));
		this.geometry.faces.push(new THREE.Face3(11,19,27));
		this.geometry.faces.push(new THREE.Face3(27,39,11));
		this.geometry.faces.push(new THREE.Face3(3,11,39));
		this.geometry.faces.push(new THREE.Face3(39,31,3));
		this.geometry.faces.push(new THREE.Face3(0,3,31));
		this.geometry.faces.push(new THREE.Face3(31,28,0));

		/* TOWEL: Add a towel to our table */
		var textloader = new THREE.TextureLoader();
		var towel = textloader.load("./textures/Towel.jpg");

		this.geometry = new THREE.CubeGeometry(1200, 1, 600);	
		this.basicMaterial = new THREE.MeshBasicMaterial({ map: towel });
		this.gouraudMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, map: towel });
		this.phongMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF, specular: 0x111111, shininess: 10, map: towel });
		this.material = this.gouraudMaterial;

		this.mesh1 = new THREE.Mesh(this.geometry, this.material);
		this.mesh1.position.set(0,0,0);
		this.add(this.mesh1);

		// Table Legs
		this.geometry = new THREE.Geometry();
		this.geometry.vertices.push(
			new THREE.Vector3(-10, 15,  10), 
			new THREE.Vector3( 10, 15,  10),
			new THREE.Vector3( 10, 15, -10),
			new THREE.Vector3(-10, 15, -10),

			new THREE.Vector3(-10, -15,  10), 
			new THREE.Vector3( 10, -15,  10),
			new THREE.Vector3( 10, -15, -10),
			new THREE.Vector3(-10, -15, -10)
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
		this.mesh2 = new THREE.Mesh(this.geometry, this.material);
		this.mesh2.position.set(-550, -15, -250);
		this.add(this.mesh2);

		this.geometry.computeFaceNormals();
		this.mesh3 = new THREE.Mesh(this.geometry, this.material);
		this.mesh3.position.set(-550, -15, 250);
		this.add(this.mesh3);

		this.geometry.computeFaceNormals();
		this.mesh4 = new THREE.Mesh(this.geometry, this.material);
		this.mesh4.position.set(550, -15, 250);
		this.add(this.mesh4);

		this.geometry.computeFaceNormals();
		this.mesh5 = new THREE.Mesh(this.geometry, this.material);
		this.mesh5.position.set(550, -15, -250);
		this.add(this.mesh5);

		scene.add(this);

		this.position.x = x;
		this.position.y = y;
		this.position.z = z;

		this.tableWidth = 1200;
		this.tableHeight = 600;
		this.changeGouraud();
	}

	changePhong() {
		this.material = this.phongMaterial;
		this.mesh1.material = this.material;
		this.mesh2.material = this.material;
		this.mesh3.material = this.material;
		this.mesh4.material = this.material;
		this.mesh5.material = this.material;
	}

	changeGouraud() {
		this.material = this.gouraudMaterial;
		this.mesh1.material = this.material;
		this.mesh2.material = this.material;
		this.mesh3.material = this.material;
		this.mesh4.material = this.material;
		this.mesh5.material = this.material;
	}

	changeBasic() {
		this.material = this.basicMaterial;
		this.mesh1.material = this.material;
		this.mesh2.material = this.material;
		this.mesh3.material = this.material;
		this.mesh4.material = this.material;
		this.mesh5.material = this.material;
	}
}