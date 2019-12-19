var stalkerCamera, scene, renderer1, renderer2;
var geometry, material, mesh;
var oranges = [];
var cheerios = [];
var butters = [];
var candles = [];
var car, table, world_clock, sun;
var cameraID = 1;
var directionalLight;
var ligthingPhong = true;
var calculatingLight = true;
var lives_three;
var lifeCamera, endMenu, pauseMenu;
var stopped = false, dead = false;
var headLightsON = true;

'use strict'

function pauseGame() {
	endMenu.visible = false;
	pauseMenu.visible = true;
	stopAnimaton();
}

function gameOver() {
	endMenu.visible = true;
	pauseMenu.visible = false;
	dead = true;
	stopAnimaton();
}

function restartDead() {
	restartTrack();
	dead = false;
	stopAnimaton();
}

function stopAnimaton() {
	stopped = !stopped;
	world_clock.running ? world_clock.stop() : world_clock.start();
}

function onTable(obj) {
	if (-table.tableWidth / 2 < obj.position.x && obj.position.x < table.tableWidth / 2
		&& -table.tableHeight / 2 < obj.position.z && obj.position.z < table.tableHeight / 2) {
		obj.onTable = true;
		return true;
	} else {
		obj.onTable = false;
		return false;
	}
}

function createOrtographicCamera() {
	if (window.innerHeight > window.innerWidth) {
		var aspectRatio = window.innerHeight / window.innerWidth;
		ortographicCamera = new THREE.OrthographicCamera(-table.tableWidth / 2, table.tableWidth / 2, table.ableHeight * aspectRatio, -table.tableHeight * aspectRatio, 1, 1000);
	} else {
		var aspectRatio = window.innerWidth / window.innerHeight;
		ortographicCamera = new THREE.OrthographicCamera(-table.tableWidth * aspectRatio / 2, table.tableWidth * aspectRatio / 2, table.tableHeight, -table.tableHeight, 1, 1000);
	}

	ortographicCamera.position.set(0, 500, 0);
	ortographicCamera.lookAt(scene.position);
}

function createPauseCamera(){
	pauseCamera =  new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1200);

	pauseCamera.position.set(0, -450, 0);
	pauseCamera.lookAt(new THREE.Vector3( 0, -1000, 0));
}

function createLifeCamera() {
	if (window.innerHeight > window.innerWidth) {
		var aspectRatio = window.innerHeight / window.innerWidth;
		lifeCamera = new THREE.OrthographicCamera(-table.tableWidth / 25, table.tableWidth / 25, table.tableHeight * aspectRatio / 10, -table.tableHeight * aspectRatio / 15, 1, 1000);
	} else {
		var aspectRatio = window.innerWidth / window.innerHeight;
		lifeCamera = new THREE.OrthographicCamera(-table.tableWidth * aspectRatio / 25, table.tableWidth * aspectRatio / 25, table.tableHeight / 10, -table.tableHeight / 15, 1, 1000);
	}
	lifeCamera.position.set(5000, 50, 5000);
	lifeCamera.lookAt(new THREE.Vector3(5000, 0, 5000));
}

function createPerspectiveCamera() {
	perspectiveCamera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
	
	perspectiveCamera.position.set(0, 500, 500);
	perspectiveCamera.lookAt(scene.position);
}

function createStalkerCamera() {
	stalkerCamera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
	stalkerCamera.direction = new THREE.Vector3(1, 0, 0);

	moveStalkerCamera();
}

function moveStalkerCamera() {
	stalkerCamera.position.x = car.position.x - 70 * car.direction.x;
	stalkerCamera.position.y = car.position.y + 40;
	stalkerCamera.position.z = car.position.z - 70 * car.direction.z;

	stalkerCamera.lookAt(car.position);
}

function createScene() {
	scene = new THREE.Scene();

	table = new Table(0, -1, 0);
	createTrack(table);

	goal = new Goal();

	car = new Car(0, 0, 0);

	orange = new Orange();
	orange = new Orange();
	orange = new Orange();
	orange = new Orange();
	orange = new Orange();
	orange = new Orange();

	butter = new Butter(70, 0, -185);
	butter = new Butter(190, 0, -250);
	butter = new Butter(500, 0, 150);
	butter = new Butter(400, 0, -150);
	butter = new Butter(-400, 0, -150);
	butter = new Butter(-500, 0, 150);
	butter = new Butter(-70, 0, 185);
	butter = new Butter(-190, 0, 250);

	candle = new Candle(-520, 0, -220);
	candle = new Candle(520, 0, 220);
	candle = new Candle(-520, 0, 220);
	candle = new Candle(520, 0, -220);
	candle = new Candle(150, 0, 120);
	candle = new Candle(-150, 0, -120);



	sun = new THREE.DirectionalLight(0xeedd82, 1);
	sun.position.set(0, 500, 500);
	scene.add(sun);


}

function render() {
	if(stopped){
		renderer1.setScissorTest (true);
		renderer1.setScissor(0, 0, window.innerWidth, window.innerHeight);
		renderer1.setViewport(0, 0, window.innerWidth, window.innerHeight);
		renderer1.render(scene, pauseCamera);
	}
	else if (cameraID == 1){ 
		renderer1.setScissorTest (true);
		renderer1.setScissor(0, 0, window.innerWidth, window.innerHeight);
		renderer1.setViewport(0, 0, window.innerWidth, window.innerHeight);
		renderer1.render(scene, ortographicCamera);
	}
	else if (cameraID == 2){
		renderer1.setScissorTest (true);
		renderer1.setScissor(0, 0, window.innerWidth, window.innerHeight);
		renderer1.setViewport(0, 0, window.innerWidth, window.innerHeight);
		renderer1.render(scene, perspectiveCamera);
	}	
	else if (cameraID == 3){ 
		renderer1.setScissorTest (true);
		renderer1.setScissor(0, 0, window.innerWidth, window.innerHeight);
		renderer1.setViewport(0, 0, window.innerWidth, window.innerHeight);
		renderer1.render(scene, stalkerCamera);
	}

	renderer1.setScissor(window.innerWidth - window.innerWidth / 10, 0, window.innerWidth / 10, window.innerHeight / 10);
	renderer1.setViewport(window.innerWidth - window.innerWidth / 10 , 0, window.innerWidth / 10, window.innerHeight / 10);

	renderer1.render(scene, lifeCamera);
}

function onResize() {
	if (window.innerHeight > window.innerWidth) {
		var aspectRatio = window.innerHeight / window.innerWidth;
		ortographicCamera.left = -table.tableWidth / 2;
		ortographicCamera.right = table.tableWidth / 2;
		ortographicCamera.top = table.tableHeight * aspectRatio;
		ortographicCamera.bottom = -table.tableHeight * aspectRatio;
	} else {
		var aspectRatio = window.innerWidth / window.innerHeight;
		ortographicCamera.left = -table.tableWidth * aspectRatio / 2;
		ortographicCamera.right = table.tableWidth * aspectRatio / 2;
		ortographicCamera.top = table.tableHeight;
		ortographicCamera.bottom = -table.tableHeight;
	}

	renderer1.setSize(window.innerWidth, window.innerHeight);

	ortographicCamera.aspect = aspectRatio;
	ortographicCamera.updateProjectionMatrix();

	perspectiveCamera.aspect = aspectRatio;
	perspectiveCamera.updateProjectionMatrix();

	stalkerCamera.aspect = aspectRatio;
	stalkerCamera.updateProjectionMatrix();
}

function onKeyDown(e) {
	switch (e.keyCode) {
		case 38: /* UP ARROW */
			car.moveForth = true;
			break;

		case 40: /* DOWN ARROW */
			car.moveBack = true;
			break;

		case 37: /* LEFT ARROW */
			car.turnLeft = true;
			break;

		case 39: /* RIGHT ARROW */
			car.turnRight = true;
			break;

		case 49: // 1
			cameraID = 1;
			break;
		
		case 50: // 2
			cameraID = 2;
			break;
		
		case 51: // 3
			cameraID = 3;
			break;

		case 65: // A
			scene.traverse(function (node) {
				if (node instanceof (THREE.Mesh)) {
					if (node.material instanceof Array) {
						node.material.forEach(function (obj) {
							obj.wireframe = !obj.wireframe
						});
					}
					node.material.wireframe = !node.material.wireframe;
				}
			});
			break;
		case 67: // C
			for (var i = 0; i < candles.length; i++) {
				candles[i].turnOn_Off();
			};
			break;

		case 76: // L
			changeAllBasic();
			break;

		case 78: // N
			sun.visible = !(sun.visible);
			break;
	
		case 71: // G
			changeLighting();
			break;

		case 83: // S
			if(!dead)
				pauseGame();
			break;

		case 82: // R
			if (dead) {
				scene.remove(lives_three);
				lives_three = new Lifes();
				dead = false;
				restartDead();
			}
			break;

		case 72: // H
			car.headLight();
			break;
	}
}

function changeAllBasic() {
	if (calculatingLight) {
		for (var i = 0; i < oranges.length; i++) {
			oranges[i].changeBasic();
		}
		for (var i = 0; i < cheerios.length; i++) {
			cheerios[i].changeBasic();
		}
		for (var i = 0; i < butters.length; i++) {
			butters[i].changeBasic();
		}
		for (var i = 0; i < candles.length; i++) {
			candles[i].changeBasic();
		}
		table.changeBasic();
		car.changeBasic();

		calculatingLight = false;
	} else if (ligthingPhong == false) {
		for (var i = 0; i < oranges.length; i++) {
			oranges[i].changeGouraud();
		}
		for (var i = 0; i < cheerios.length; i++) {
			cheerios[i].changeGouraud();
		}
		for (var i = 0; i < butters.length; i++) {
			butters[i].changeGouraud();
		}
		for (var i = 0; i < candles.length; i++) {
			candles[i].changeGouraud();
		}
		table.changeGouraud();
		car.changeGouraud();

		calculatingLight = true;

	} else if (ligthingPhong == true) {
		for (var i = 0; i < oranges.length; i++) {
			oranges[i].changePhong();
		}
		for (var i = 0; i < cheerios.length; i++) {
			cheerios[i].changePhong();
		}
		for (var i = 0; i < butters.length; i++) {
			butters[i].changePhong();
		}
		for (var i = 0; i < candles.length; i++) {
			candles[i].changePhong();
		}
		table.changePhong();
		car.changePhong();

		calculatingLight = true;
	}
}


function changeLighting() {
	if (ligthingPhong) {
		for (var i = 0; i < oranges.length; i++) {
			oranges[i].changeGouraud();
		}
		for (var i = 0; i < cheerios.length; i++) {
			cheerios[i].changeGouraud();
		}
		for (var i = 0; i < butters.length; i++) {
			butters[i].changeGouraud();
		}
		for (var i = 0; i < candles.length; i++) {
			candles[i].changeGouraud();
		}
		table.changeGouraud();
		car.changeGouraud();

		ligthingPhong = false;
	} else {
		for (var i = 0; i < oranges.length; i++) {
			oranges[i].changePhong();
		}
		for (var i = 0; i < cheerios.length; i++) {
			cheerios[i].changePhong();
		}
		for (var i = 0; i < butters.length; i++) {
			butters[i].changePhong();
		}
		for (var i = 0; i < candles.length; i++) {
			candles[i].changePhong();
		}
		table.changePhong();
		car.changePhong();

		ligthingPhong = true;
	}
}

function onKeyUp(e) {
	switch (e.keyCode) {
		/* UP ARROW */
		case 38:
			car.moveForth = false;
			break;

		/*DOWN ARROW */
		case 40:
			car.moveBack = false;
			break;

		/* LEFT ARROW */
		case 37:
			car.turnLeft = false;
			break;

		/* RIGHT ARROW */
		case 39:
			car.turnRight = false;
			break;
	}
}

function checkCheerioCollisions() {
	var l = cheerios.length

	for (var i = 0; i < l; i++) {
		for (var j = 0; j < l - 1; j++) {
			if (cheerios[i].hasCollided(cheerios[j]) && i != j) {
				cheerios[i].treatCollision(cheerios[j]);
				cheerios[j].treatCollision(cheerios[i]);
				break;
			}	
		}
	}
}

function checkCarCollisions() {
	for (var i = 0; i < cheerios.length; i++) {
		if (car.hasCollided(cheerios[i])) {
			car.treatCollision(cheerios[i]);
			cheerios[i].treatCollision(car);
			break;
		}	
	}

	for (var i = 0; i < butters.length; i++) {
		if (car.hasCollided(butters[i]) && car.speed != 0) {
			car.treatCollision(butters[i])
			break;
		}
	}

	for (var i = 0; i < oranges.length; i++) {
		if (car.hasCollided(oranges[i])) {
			car.restart();
			oranges[i].treatCollision(car);
			break;
		}
	}

	for (var i = 0; i < candles.length; i++) {
		if (car.hasCollided(candles[i]) && car.speed != 0) {
			car.treatCollision(candles[i])
			break;
		}
	}
}

function animate() {
	if (!stopped) {
		car.moveCar();

		for (var i = 0; i < oranges.length; i++) {
			oranges[i].moveOrange();
		}

		for (var i = 0; i < cheerios.length; i++) {
			cheerios[i].moveCheerio();
		}

		checkCarCollisions();
		checkCheerioCollisions();

		moveStalkerCamera();
	}

	render();
	requestAnimationFrame(animate);
}

function init() {
	renderer1 = new THREE.WebGLRenderer();
	renderer1.setSize(window.innerWidth, window.innerHeight);

	renderer2 = new THREE.WebGLRenderer();
	renderer2.setSize(window.innerWidth, window.innerHeight);

	world_clock = new THREE.Clock(true);
	world_clock.start();
	
	document.body.appendChild(renderer1.domElement);

	createScene();

	createOrtographicCamera();
	createPerspectiveCamera();
	createStalkerCamera();
	createLifeCamera();
	createPauseCamera();

	lives_three = new Lifes();
	
	window.addEventListener("resize", onResize);
	window.addEventListener("keydown", onKeyDown);
	window.addEventListener("keyup", onKeyUp);

	endMenu = new Menu("gameover");
	pauseMenu = new Menu("pause");
}