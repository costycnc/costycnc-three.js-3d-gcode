var abc;

THREE.InputButton = function () {
		    var but = document.createElement("Input");
			but.setAttribute("type", "file");
			but.setAttribute("accept", "nc");
			but.setAttribute("onchange", "THREE.OpenFile(event)");

    document.body.appendChild(but);
}

THREE.OpenFile = function (event) {

			let geometry = new THREE.Geometry()
        var input = event.target;
        var reader = new FileReader();

        reader.onload = function() {
          dataURL = reader.result;
		  costycncdesign(dataURL);
		  console.log(dataURL);

        };

		reader.readAsText(input.files[0]);
		
		
		function costycncdesign(gcode) {
let geometry = new THREE.Geometry();

        val3 = 0;

        val4 = 0;

        //svgcode.selectAll('*').remove();

        myArr = gcode.split("\n");

        for (let i = 0; i < myArr.length; i++) {

          val1 = myArr[i].split(" ");

          if (val1[0] == "G01") {


            if (val1[1]) {

              val5 = val1[1].substring(1)

            } else {

              val5 = val3

            }

            if (val1[2]) {

              val6 = val1[2].substring(1)

            } else {

              val6 = val4

            }

            //svgcode.append("line").attr("x1", val3).attr("y1", val4).attr("x2", val5).attr("y2", val6).attr("stroke", "white").attr("stroke-width", "1");
           //geometry.vertices.push(new THREE.Vector3(parseInt(val3),parseInt(val4), 0));
           geometry.vertices.push(new THREE.Vector3(parseFloat(val3),parseFloat(val4), 0));

            val3 = val5;

            val4 = val6;

          }

        }
		line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0xff }))
			//line.position.set(10, 10, 10);	
		

        //cube.add(line);
       scene.add( line );
	   console.log("scene.length="+scene.children.length);
	   console.log(scene.children[1].geometry.vertices.length);
	   
	   console.log(scene.children[1].geometry.vertices);

      }
     
}