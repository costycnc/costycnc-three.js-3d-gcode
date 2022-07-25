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
line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0xff }))
			line.position.set(0, 1, 0);
			
			
					let geometry1 = new THREE.Geometry()
geometry1.vertices.push(new THREE.Vector3(-2, 0, 3))
geometry1.vertices.push(new THREE.Vector3(5, 7, 0))
geometry1.vertices.push(new THREE.Vector3(0, 3, 0))
geometry1.vertices.push(new THREE.Vector3(2, 0, 5))
line1 = new THREE.Line(geometry1, new THREE.LineBasicMaterial({ color: 0xff0000 }))
			line1.position.set(1, 1, 0);
			

		





let a=line.add( line );
let b=a.add( line1 );
cube.add(b);
scene.add( cube ); //object1 and object2 will automatically update their matrices

     
}}