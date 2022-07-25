var abc;

THREE.InputButton = function () {
		    var but = document.createElement("Input");
			but.setAttribute("type", "file");
			but.setAttribute("accept", "nc");
			but.setAttribute("onchange", "THREE.OpenFile(event)");

    document.body.appendChild(but);
}

THREE.OpenFile = function (event) {
let geometry1 = new THREE.Geometry();

        var input = event.target;
        var reader = new FileReader();

        reader.onload = function() {
          dataURL = reader.result;
		  costycncdesign(dataURL);
		  console.log(dataURL);
        };

		reader.readAsText(input.files[0]);
		
		
		function costycncdesign(gcode) {
			

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
           geometry1.vertices.push(new THREE.Vector3(parseInt(val3),parseInt(val4), 0));
		   console.log(val3+" "+val4);
            val3 = val5;

            val4 = val6;

          }

        }

      }
		
		
	
let line1 = new THREE.Line(geometry1, new THREE.LineBasicMaterial({ color: 0x00ff }));
scene.add(line1);
console.log(line1);
     
}