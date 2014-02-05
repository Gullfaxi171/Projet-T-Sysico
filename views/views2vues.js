//focale des cameras : 
var fov0 = 10;

// rayon et période de la cycloïde
var r = 5000;
var l = 300;
var x0 = 0;

// on définit les 2 vues
var views = [
		// caméra de gauche
		{
			left : 0,
			bottom : 0,
			width : 0.5,
			height : 1,
			background : new THREE.Color().setRGB(0, 0, 0),
			eye : [ 0, 0, 0 ],
			up : [ 0, 1, 0 ],
			fov : fov0,
			updateCamera : function(camera, scene, mouseX, mouseY) {
				
				
				onRenderFcts.push(function(delta, now){
					x0 = -2750 + 2250 * Math.cos(2*now);
					camera.position.x = x0;
					camera.position.y = 0;//5000 * Math.cos(mouseX);//2/10125 * x0^2 + 88/81 * x0 + 40000/81;
					
				})
				
				camera.position.z = 0;

				camera.lookAt(scene.position);
			}
		},

		// Caméra de droite
		{
			left : 0.5,
			bottom : 0,
			width : 0.5,
			height : 1,
			background : new THREE.Color().setRGB(0, 0, 0),
			eye : [ 0, 0, 0 ],
			up : [ 0, 1, 0 ],
			fov : fov0,
			updateCamera : function(camera, scene, mouseX, mouseY) {
			onRenderFcts.push(function(delta, now){
					x0 = 2750 + 2250 * Math.cos(2*now);
					camera.position.x = x0;
					camera.position.y = 2/10125 * x0^2 + 88/81 * x0 + 40000/81;
				})
				
				camera.position.z = 0;
				camera.lookAt(scene.position);
			}
		} ];