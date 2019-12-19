'use strict'

class Candle extends Collidable {
	constructor(x, y, z){
		super();

		this.geometry = new THREE.CylinderGeometry(3, 3, 28, 5);
		this.basicMaterial1 = new THREE.MeshBasicMaterial({ color: 0xffcc99, wireframe: false });
		this.gouraudMaterial1 = new THREE.MeshLambertMaterial({color: 0xffcc99, wireframe: false});
		this.phongMaterial1 = new THREE.MeshPhongMaterial({color: 0xffcc99,specular:0xFFE5CC, wireframe:false});
		this.material1 = this.gouraudMaterial1;

		this.mesh1 = new THREE.Mesh(this.geometry, this.material1);
		this.mesh1.position.set(0, 0, 0);
		this.add(this.mesh1);

		//pavio
		this.geometry = new THREE.CylinderGeometry(1, 1, 3, 5);
		this.basicMaterial2 = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: false });
		this.gouraudMaterial2 = new THREE.MeshLambertMaterial({color: 0xffff00, wireframe: false});
		this.phongMaterial2 = new THREE.MeshPhongMaterial({color: 0xffff00,specular:0xFFFFB2, wireframe:false});
		this.material2 = this.gouraudMaterial2;
		this.mesh2 = new THREE.Mesh(this.geometry, this.material2);
		this.mesh2.position.set(0, 15.5, 0);
	    this.add(this.mesh2);

	    this.position.set(x, y + 16, z);
		scene.add(this);
		candles.push(this);

		this.candleLight = new THREE.PointLight (0xeedd82, 1,0,2);
		this.candleLight.add (new THREE.Mesh( new THREE.SphereGeometry(2) ,new THREE.MeshBasicMaterial({ color: 0x990000, wireframe: false})));
		
		scene.add(this.candleLight);

		this.candleLight.position.set(x, y + 34, z);

		this.radius = 3;
		this.changeGouraud();
	}

	treatCollision(obj) {}

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

 	turnOn_Off() {
		this.candleLight.visible = !this.candleLight.visible;
 	}
}