var abc;

THREE.InputButton = function () {
		    var but = document.createElement("Input");
			but.setAttribute("type", "file");
			but.setAttribute("accept", "nc");
			but.setAttribute("onchange", "THREE.OpenFile(event)");

    document.body.appendChild(but);
}

THREE.OpenFile = function (event) {

        var input = event.target;
        var reader = new FileReader();

        reader.onload = function() {
          dataURL = reader.result;
		  draw(dataURL);
        };

		reader.readAsText(input.files[0]);
		
		function draw(data) {
		
		let geometry = new THREE.Geometry()
geometry.vertices.push(new THREE.Vector3(-5, 0, 0))
geometry.vertices.push(new THREE.Vector3(5, 0, 0))
line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x888888 }))
			line.position.set(0, 1, 0);
			

		





cube.add( line );
scene.add( cube ); //object1 and object2 will automatically update their matrices

     
}}