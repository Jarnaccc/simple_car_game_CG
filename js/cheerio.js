'use strict' 

class Cheerio extends Collidable {
	constructor(x, y, z) {
		super();

		this.geometry = new THREE.TorusGeometry(2, 1, 16, 25);
		this.basicMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: false });
		this.gouraudMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00, wireframe: false });
		this.phongMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00, specular: 0xffff99, wireframe: false });
		this.material = this.gouraudMaterial;
		this.mesh = new THREE.Mesh(this.geometry, this.material);

		this.add(this.mesh);
		this.rotation.x = Math.PI / 2;
		this.position.set(x, y + 2, z);
		scene.add(this);

		this.speed = 0;
		this.acceleration = 0.25;
		this.direction = new THREE.Vector3(1, 0, 0);
		this.radius = 3;
		this.mass = 10;
		
		cheerios.push(this);
		this.changeGouraud();
	}

	moveCheerio() {
		if (onTable(this) == false)
			this.visible = false;

		this.position.x += this.direction.x * this.speed;
		this.position.z += this.direction.z * this.speed;

		if (this.speed < 0)
			this.speed += 0.0625;
		else if (this.speed > 0)
			this.speed -= 0.0625;
		else if (this.speed > -0.0625 && this.speed < 0.0625)
			this.speed = 0;
	}

	treatCollision(obj) {
		if (obj instanceof Cheerio) {
			var phi   = Math.atan((obj.position.z - this.position.z) / (obj.position.x - this.position.x));
			var teta1 = Math.atan((this.position.z) / (this.position.x));
			var teta2 = Math.atan((obj.position.z) / (obj.position.x));
			
			var speedx = (this.speed*Math.cos(teta1 - phi)*(this.mass-obj.mass) + 2*obj.mass * obj.speed * Math.cos(teta2 - phi))/(this.mass+obj.mass) * Math.cos(phi) + this.speed*Math.sin(teta1 - phi)*Math.cos(teta2 + Math.PI/2);
			var speedz = (this.speed*Math.cos(teta1 - phi)*(this.mass-obj.mass) + 2*obj.mass * obj.speed * Math.cos(teta2 - phi))/(this.mass+obj.mass) * Math.sin(phi) + this.speed*Math.sin(teta1 - phi)*Math.sin(teta2 + Math.PI/2);
			
			this.speed = Math.sqrt(Math.pow(speedx, 2) + Math.pow(speedz, 2));
			this.direction = new THREE.Vector3(speedx, 0, speedz).normalize();
		}
		if (obj instanceof Car) {
			this.speed = (this.speed*(this.mass-obj.mass) + 2*obj.mass * obj.speed)/(this.mass+obj.mass);
			this.direction.x = car.direction.x;
			this.direction.z = car.direction.z;
		}
	}

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