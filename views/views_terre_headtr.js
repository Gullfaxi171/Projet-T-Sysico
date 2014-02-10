//focale des 4 cameras : 
var fov0 = 1.57;
var radius = 100;

// on définit les 4 vues
var views = [
		// vue en bas à gauche (vue 1)
		// camera n°4
		{
			left : 0,
			bottom : 0,
			width : 0.5,
			height : 0.5,
			background : new THREE.Color().setRGB(0, 0, 0),
			eye : [ 0, 0, 0 ],
			up : [ 0, -1, -1 ],
			fov : fov0,
			updateCamera : function(camera, scene, headPosX, headPosY) {
				 camera.position.x = radius
						* Math.cos(headPosX / 180 * 3.14 + 4.71)
						* Math.cos(headPosY / 180 * 3.14);
				camera.position.z = radius
						* Math.sin(headPosX / 180 * 3.14 + 4.71)
						* Math.cos(headPosY / 180 * 3.14);
				camera.position.y = radius * Math.sin(headPosY / 180
						* 3.14);
				camera.up.x = -1 * Math.cos(headPosX / 180 * 3.14);
				camera.up.y = -1;
				camera.up.z = -Math.sin(headPosX / 180 * 3.14);
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
			background : new THREE.Color().setRGB(0, 0, 0),
			eye : [ 0, 0, 0 ],
			up : [ 0, 1, -1 ],
			fov : fov0,
			updateCamera : function(camera, scene, headPosX, headPosY) {
				camera.position.x = radius
						* Math.cos(headPosX / 180 * 3.14 + 3.14)
						* Math.cos(headPosY / 180 * 3.14);
				camera.position.z = radius
						* Math.sin(headPosX / 180 * 3.14 + 3.14)
						* Math.cos(headPosY / 180 * 3.14);
				camera.position.y = radius * Math.sin(headPosY / 180
						* 3.14);
				camera.up.x = -1 * Math.sin(headPosX / 180 * 3.14);
				camera.up.y = 1;
				camera.up.z = Math.cos(headPosX / 180 * 3.14);
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
			background : new THREE.Color().setRGB(0, 0, 0),
			eye : [ 0, 0, 0 ],
			up : [ 0, -1, -1 ],
			fov : fov0,
			updateCamera : function(camera, scene, headPosX, headPosY) {
				camera.position.x = radius
						* Math.cos(headPosX / 180 * 3.14)
						* Math.cos(headPosY / 180 * 3.14);
				camera.position.z = radius
						* Math.sin(headPosX / 180 * 3.14)
						* Math.cos(headPosY / 180 * 3.14);
				camera.position.y = radius * Math.sin(headPosY / 180
						* 3.14);
				camera.up.x = -1 * Math.sin(headPosX / 180 * 3.14);
				camera.up.y = -1;
				camera.up.z = Math.cos(headPosX / 180 * 3.14);
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
			background : new THREE.Color().setRGB(0, 0, 0),
			eye : [ 0, 0, 0 ],
			up : [ 0, 1, -1 ],
			fov : fov0,
			updateCamera : function(camera, scene, headPosX, headPosY) {
				camera.position.x = radius
						* Math.cos(headPosX / 180 * 3.14 + 1.57)
						* Math.cos(headPosY / 180 * 3.14);
				camera.position.z = radius
						* Math.sin(headPosX / 180 * 3.14 + 1.57)
						* Math.cos(headPosY / 180 * 3.14);
				camera.position.y = radius * Math.sin(headPosY / 180
						* 3.14);
				camera.up.x = -1 * Math.cos(headPosX / 180 * 3.14);
				camera.up.y = 1;
				camera.up.z = -1 * Math.sin(headPosX / 180 * 3.14);
				camera.lookAt(scene.position);
			}
		} ];