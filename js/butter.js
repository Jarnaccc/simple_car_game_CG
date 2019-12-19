'use strict'

class Butter extends Collidable {
	constructor(x, y, z) {
		super();
		
		this.basicMaterial = new THREE.MeshBasicMaterial({ color: 0xFFE599, wireframe: false });
		this.gouraudMaterial = new THREE.MeshLambertMaterial({color: 0xFFE599, wireframe: false});
		this.phongMaterial = new THREE.MeshPhongMaterial({color: 0xFFE599,specular:0xFFF2CC, wireframe:false});
		this.material = this.gouraudMaterial;

		this.geometry = new THREE.CubeGeometry(20, 8, 10);
		this.mesh = new THREE.Mesh(this.geometry, this.material);

		this.position.set(x, y + 4, z);
		this.add(this.mesh);

		scene.add(this);
		butters.push(this);

		this.radius = 12;
		this.rotateY(Math.random());
		this.changeGouraud();
	}

	/* STATIC: Butters are meant to be immovable in our track */
	treatCollision(obj) {}

	changePhong(){
		this.material = this.phongMaterial;
   		this.mesh.material = this.material;
  	}

  	changeGouraud(){
		this.material = this.gouraudMaterial;
		this.mesh.material = this.material;
 	}

 	changeBasic(){
		this.material = this.basicMaterial;
		this.mesh.material = this.material;
 	}
}