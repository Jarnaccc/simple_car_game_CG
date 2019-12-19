'use strict'

class Life extends THREE.Object3D{
	constructor(x){
		super();

		/* BODY: Design and place the main part of our car */
		this.basicMaterial1 = new THREE.MeshBasicMaterial({ color: 0xCC0000, wireframe: false });
		this.gouraudMaterial1 = new THREE.MeshLambertMaterial({ color: 0xCC0000, wireframe: false });
		this.phongMaterial1 = new THREE.MeshPhongMaterial({ color: 0xCC0000, specular: 0xaa0000, wireframe: false });
		this.material1 = this.basicMaterial1;

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
		this.material2 = this.basicMaterial2;
		
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

		//sides
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

		//front
		this.geometry.faces.push(new THREE.Face3(5, 1,17));
		this.geometry.faces.push(new THREE.Face3(13,5,17));
		this.geometry.faces.push(new THREE.Face3(7,13,17));
		this.geometry.faces.push(new THREE.Face3(3,7,17));
		this.geometry.faces.push(new THREE.Face3(11,3,17));
		this.geometry.faces.push(new THREE.Face3(15,11,17));
		this.geometry.faces.push(new THREE.Face3(9,15,17));
		this.geometry.faces.push(new THREE.Face3(1,9,17));

		//back
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
		this.material3 = this.basicMaterial3;

		this.mesh3 = new THREE.Mesh(this.geometry, this.material3);
		this.mesh3.position.set(-5, 4, -8);
		this.add(this.mesh3);

		this.basicMaterial4 = new THREE.MeshBasicMaterial({ color: 0x6C6F60, wireframe: false });
		this.gouraudMaterial4 = new THREE.MeshLambertMaterial({ color: 0x6C6F60, wireframe: false });
		this.phongMaterial4 = new THREE.MeshPhongMaterial({ color: 0x6C6F60, specular: 0xfA6A89F, wireframe: false });
		this.material4 = this.basicMaterial4;
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

			new THREE.Vector3( 0,  2,  -2),
			new THREE.Vector3( 0,  2,   2),
			new THREE.Vector3( 0, -2,  -2),
			new THREE.Vector3( 0, -2,  2),
	
			new THREE.Vector3(0, 0, -2),
			new THREE.Vector3(0, 0,  2)

		)

		//sides
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

		//front
		this.geometry.faces.push(new THREE.Face3(5, 1,17));
		this.geometry.faces.push(new THREE.Face3(13,5,17));
		this.geometry.faces.push(new THREE.Face3(7,13,17));
		this.geometry.faces.push(new THREE.Face3(3,7,17));
		this.geometry.faces.push(new THREE.Face3(11,3,17));
		this.geometry.faces.push(new THREE.Face3(15,11,17));
		this.geometry.faces.push(new THREE.Face3(9,15,17));
		this.geometry.faces.push(new THREE.Face3(1,9,17));

		//back
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
		this.gouraudMaterial5 = new THREE.MeshLambertMaterial({ color: 0x6C6F60, wireframe: false });
		this.phongMaterial5 = new THREE.MeshPhongMaterial({ color: 0x6C6F60, specular: 0xfA6A89F, wireframe: false });
		this.material5 = this.basicMaterial5;
		this.mesh5 = new THREE.Mesh(this.geometry, this.material5);
		this.mesh5.position.set(5, 2, -8);
		this.add(this.mesh5);

		this.geometry.computeFaceNormals();
		this.basicMaterial6 = new THREE.MeshBasicMaterial({ color: 0x6C6F60, wireframe: false });
		this.gouraudMaterial6 = new THREE.MeshLambertMaterial({ color: 0x6C6F60, wireframe: false });
		this.phongMaterial6 = new THREE.MeshPhongMaterial({ color: 0x6C6F60, specular: 0xfA6A89F, wireframe: false });
		this.material6 = this.basicMaterial6;
		this.mesh6 = new THREE.Mesh(this.geometry, this.material6);
		this.mesh6.position.set(5, 2, 8);
		this.add(this.mesh6);

		scene.add(this);

		this.position.set(5000 + x, 0, 5000);
		this.rotation.x = -Math.PI / 2;

		scene.add(this);
	}

	destroy() {
		scene.remove(this);
	}
}