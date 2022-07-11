var gl;
var shaderProgram;
var triangleVertexPositionBuffer;
function webGLStart() {
  var canvas = document.getElementById("mycanvas");
  gl = canvas.getContext("experimental-webgl");
  gl.viewportWidth = canvas.width;
  gl.viewportHeight = canvas.height;
  initShaders();
  initBuffers();
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // imposto lo sfondo a nero
  gl.clearDepth(1.0);
  setInterval(drawScene, 15);
}

function initShaders() {
  shaderProgram = gl.createProgram();
  $.each([[gl.FRAGMENT_SHADER,"#shader-fs"],
         [gl.VERTEX_SHADER,"#shader-vs"]],
		 function (ind,val) {
           var shader = gl.createShader(val[0]);
		   gl.shaderSource(shader, $(val[1]).text());
		   gl.compileShader(shader);
		   gl.attachShader(shaderProgram, shader);
		 });
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);
  shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
  gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
  shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
  shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
}

function initBuffers() {
  triangleVertexPositionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
  var vertices = [
    0.0, 1.0, 0.0,
   -1.0, -1.0, 0.0,
	1.0, -1.0, 0.0];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  triangleVertexPositionBuffer.itemSize = 3;
  triangleVertexPositionBuffer.numItems = 3;
}

function drawScene() {
  gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
  gl.vertexAttribPointer(
    shaderProgram.vertexPositionAttribute,
	triangleVertexPositionBuffer.itemSize,
	gl.FLOAT, false, 0, 0);
  gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false,
                      new Float32Array([ 1,0,0,0,
					                     0,1,0,0,
										 0,0,0,-1,
										 0,0,0,0]));
  gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false,
                      new Float32Array([ 1,0,0,0,
					                     0,1,0,0,
										 0,0,1,0,
										 0,0,-2,0]));
  gl.drawArrays(gl.TRIANGLES, 0, triangleVertexPositionBuffer.numItems);
}