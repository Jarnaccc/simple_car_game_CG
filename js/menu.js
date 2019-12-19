'use strict'

class Menu extends Collidable {
	constructor(flag) {
		super();

		var texloader = new THREE.TextureLoader();

		if (flag == "gameover") {
			var tex = texloader.load("./textures/GameOver.jpg");
			tex.needsupdate = true;
		} else {
			var tex = texloader.load("./textures/Pause.jpg");
			tex.needsupdate = true;
		}

		this.material1 = new THREE.MeshBasicMaterial({ map: tex });
		this.geometry1 = new THREE.CubeGeometry(450, 1, 450);
		this.mesh1 = new THREE.Mesh(this.geometry1, this.material1);
		this.mesh1.position.set(0, 0, 0);

		this.material2 = new THREE.MeshBasicMaterial({ color: 0xfffffff });
		this.geometry2 = new THREE.CubeGeometry(450, 1, 10);
		this.mesh2 = new THREE.Mesh(this.geometry2, this.material2);
		this.mesh2.position.set(0, 0, 230);

		this.material3 = new THREE.MeshBasicMaterial({ color: 0xfffffff });
		this.geometry3 = new THREE.CubeGeometry(450, 1, 10);
		this.mesh3 = new THREE.Mesh(this.geometry3, this.material3);
		this.mesh3.position.set(0, 0, -230);

		this.material4 = new THREE.MeshBasicMaterial({ color: 0xfffffff });
		this.geometry4 = new THREE.CubeGeometry( 10, 1, 470);
		this.mesh4 = new THREE.Mesh(this.geometry4, this.material4);
		this.mesh4.position.set(230, 0, 0);

		this.material5 = new THREE.MeshBasicMaterial({ color: 0xfffffff });
		this.geometry5 = new THREE.CubeGeometry( 10, 1, 470);
		this.mesh5 = new THREE.Mesh(this.geometry5, this.material5);
		this.mesh5.position.set(-230, 0, 0);

		this.add(this.mesh1);
		this.add(this.mesh2);
		this.add(this.mesh3);
		this.add(this.mesh4);
		this.add(this.mesh5);
		scene.add(this);

		this.position.set(0,-1000,0);
			this.visible = false;
	}
}