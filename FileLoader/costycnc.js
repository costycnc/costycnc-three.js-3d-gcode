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
		  console.log(dataURL);
        };

		reader.readAsText(input.files[0]);
     
}