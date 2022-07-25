var abc;

THREE.Costybutton = function () {
		    var but = document.createElement("Input");
			but.setAttribute("type", "file");
			but.setAttribute("accept", "nc");
			but.setAttribute("onchange", "THREE.CostyopenFile(event)");

    document.body.appendChild(but);
}

THREE.CostyopenFile = function (event) {

        var input = event.target;
        var reader = new FileReader();

        reader.onload = function() {
          dataURL = reader.result;
		  console.log(dataURL);
        };

		reader.readAsText(input.files[0]);
     
}