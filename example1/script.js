var example = (function(){

	"use strict";

	// 1st object created is a scene, acts as a container for our camera lights and objects
	var scene = new THREE.Scene(),
	//2nd Create the renderer the webgl renderer is the most performance and feature rich of the other ones
	renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer({antialias:true}) : new THREE.CanvasRenderer(),
	//3rd Create a new light
	light = new THREE.AmbientLight(0xffffff),
	camera,
	box;

	//creating a function to initialize the scnee
	function initScene(){
		//Telling the renderer what size we will be rendering content
		renderer.setSize( window.innerWidth, window.innerHeight );
		//Telling it where to render the content
		var element = document.getElementById("webgl-container");
		element.appendChild(renderer.domElement);
		//Adding the light to the scene otherwise scene will be dark
		scene.add(light);

		//Initializing the camera
		camera = new THREE.PerspectiveCamera(
		35,
		element.offsetWidth / element.offsetHeight,
		1,
		1000
		);

		camera.position.z = 100;
		scene.add(camera);

		//Adding a cube to the scene
		box = new THREE.Mesh(
			//defines dimension of cube
			new THREE.BoxGeometry(20,20,20),
			//defines material color of cube
			new THREE.MeshNormalMaterial({color: 0xFF0000})
		);
		box.name="box";

		scene.add(box);
    

		//call the render function once scene it set up
		render();

  }

	//Tell three.js to actually render the scene
	function render(){
		//rotate cube
		box.rotation.y +=0.01;
		//renders the scene and camera
		renderer.render(scene, camera);
		//this will ensure the animation is as smooth as possible
		requestAnimationFrame(render);
	};

	//Run our scene intialization
	window.onload = initScene;

	//Expose sceneobject used for debuggin purposes
	return{
		scene: scene

	}

})();