function imgsPandas(){
	//array de imagenes
	var fotoPandas = ["assets/img/panda-1.jpg", "assets/img/panda-2.jpg", "assets/img/panda-3.jpg", "assets/img/panda-4.jpg"];
	
	
	function fotos(){


		fotoPandas.forEach(function(cv){
			//donde se mantendra mis imagenes
			var contenedor = document.getElementById("contenedor-imgs");
			//creo un img para cada imagen
			var imagen = document.createElement("img");
			//le agrego clase
			imagen.classList.add("imgs-pequenias");
			//creo 'a' que estara dentro de las imagenes
			//var aX = document.createElement("a");
			//lo que llevara escrito 'x'
			//ar texto = document.createTextNode("x");
			//agrego id a las 'a'
			//aX.classList.add("eliminar-x");
			imagen.setAttribute("src", cv);
			//aX.appendChild(texto);
			//imagen.appendChild(aX);
			contenedor.appendChild(imagen);

		});
	}
	
	var cajas = Array.from(document.getElementsByClassName("imgs-pequenias"));
	cajas.forEach(function(e){
		e.addEventListener("click", function(){
			this.classList.add("no");
		});
	});






	/*function removerClick(){
	
	var imgsChicas = ;
	var imgsContenedor = document.getElementsByClassName("imgs-pequenias")[0];

	imgsContenedor.addEventListener("click", function(){
		imgsContenedor.removeChild(imgsChicas);
	});
	
		


		imgsEtiqueta.forEach(function(e){
			e.addEventListener("click", function(){
				imagen.parentNode.removeChild(imagen);
			});

		});*/


	//}	
	
	fotos();
	//removerClick();
}
imgsPandas();