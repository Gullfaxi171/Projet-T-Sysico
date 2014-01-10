//focale des 4 cameras : 
var fov0 = 1.57;

// on définit les 4 vues
var views = [
		// vue en bas à gauche (vue 1)
		// camera n°4
		{
			left : 0,
			bottom : 0,
			width : 0.5,
			height : 0.5,
			background : new THREE.Color().setRGB(0.2, 0.5, 0.7),
			eye : [ 0, 0, 0 ],
			up : [ 0, -1, -1 ],
			fov : fov0,
			updateCamera : function(camera, scene, mouseX, mouseY) {
				// modèle de commande pour le LeapMotion
				// camera.position.x += mouseX * 0.05;
				// camera.position.x = Math.max( Math.min( camera.position.x,
				// 2000 ), -2000 );
				camera.position.x = 100
						* Math.cos(mouseX / window.innerWidth * 3.14 + 4.71)
						* Math.cos(mouseY / window.innerHeight * 3.14);
				camera.position.z = 100
						* Math.sin(mouseX / window.innerWidth * 3.14 + 4.71)
						* Math.cos(mouseY / window.innerHeight * 3.14);
				camera.position.y = 100 * Math.sin(mouseY / window.innerHeight
						* 3.14);
				camera.up.x = -1 * Math.cos(mouseX / window.innerWidth * 3.14);
				camera.up.y = -1;
				camera.up.z = -Math.sin(mouseX / window.innerWidth * 3.14);
				camera.lookAt(scene.position);
			}
		},
		// vue en haut à gauche (vue 2)
		// camera n°3
		{
			left : 0,
			bottom : 0.5,
			width : 0.5,
			height : 0.5,
			background : new THREE.Color().setRGB(0.5, 0.5, 0.7),
			eye : [ 0, 0, 0 ],
			up : [ 0, 1, -1 ],
			fov : fov0,
			updateCamera : function(camera, scene, mouseX, mouseY) {
				camera.position.x = 100
						* Math.cos(mouseX / window.innerWidth * 3.14 + 3.14)
						* Math.cos(mouseY / window.innerHeight * 3.14);
				camera.position.z = 100
						* Math.sin(mouseX / window.innerWidth * 3.14 + 3.14)
						* Math.cos(mouseY / window.innerHeight * 3.14);
				camera.position.y = 100 * Math.sin(mouseY / window.innerHeight
						* 3.14);
				camera.up.x = -1 * Math.sin(mouseX / window.innerWidth * 3.14);
				camera.up.y = 1;
				camera.up.z = Math.cos(mouseX / window.innerWidth * 3.14);
				camera.lookAt(scene.position);
			}
		},

		// vue en bas à droite (vue 4)
		// camera n°1
		{
			left : 0.5,
			bottom : 0,
			width : 0.5,
			height : 0.5,
			background : new THREE.Color().setRGB(0.7, 0.5, 0.5),
			eye : [ 0, 0, 0 ],
			up : [ 0, -1, -1 ],
			fov : fov0,
			updateCamera : function(camera, scene, mouseX, mouseY) {
				camera.position.x = 100
						* Math.cos(mouseX / window.innerWidth * 3.14)
						* Math.cos(mouseY / window.innerHeight * 3.14);
				camera.position.z = 100
						* Math.sin(mouseX / window.innerWidth * 3.14)
						* Math.cos(mouseY / window.innerHeight * 3.14);
				camera.position.y = 100 * Math.sin(mouseY / window.innerHeight
						* 3.14);
				camera.up.x = -1 * Math.sin(mouseX / window.innerWidth * 3.14);
				camera.up.y = -1;
				camera.up.z = Math.cos(mouseX / window.innerWidth * 3.14);
				camera.lookAt(scene.position);
			}
		},
		// vue en haut à droite (vue 3)
		// camera n°2
		{
			left : 0.5,
			bottom : 0.5,
			width : 0.5,
			height : 0.5,
			background : new THREE.Color().setRGB(0.5, 0.7, 0.7),
			eye : [ 0, 0, 0 ],
			up : [ 0, 1, -1 ],
			fov : fov0,
			updateCamera : function(camera, scene, mouseX, mouseY) {
				camera.position.x = 100
						* Math.cos(mouseX / window.innerWidth * 3.14 + 1.57)
						* Math.cos(mouseY / window.innerHeight * 3.14);
				camera.position.z = 100
						* Math.sin(mouseX / window.innerWidth * 3.14 + 1.57)
						* Math.cos(mouseY / window.innerHeight * 3.14);
				camera.position.y = 100 * Math.sin(mouseY / window.innerHeight
						* 3.14);
				camera.up.x = -1 * Math.cos(mouseX / window.innerWidth * 3.14);
				camera.up.y = 1;
				camera.up.z = -1 * Math.sin(mouseX / window.innerWidth * 3.14);
				camera.lookAt(scene.position);
			}
		} ];