// Función para cargar noticias mediante el botón
var nnoticias = 1;
var maxnoticias = 2;

$(function () {
	
    $("button").click(function(){
		
		if (nnoticias <= maxnoticias){
		
		$.getJSON( "https://rawgit.com/daniochoamesa/Noticias/master/data/data"+nnoticias+".json", function(nombres){
			nnoticias++;
			mostrarNombres( nombres );
		});
	} else{
			 $('#botonModal').text('No hay más noticias');
		};
				
	
	});

//Función para mostrar más noticias con las cargas de los ficheros json
function mostrarNombres(nombres){
	$.each( nombres, function( i, nombre ) {
			$("#news").append('<div class="row"><div class="col-sm-12" style="background-color:lavenderblush;padding-bottom:100px;"><h1><strong>'+nombre.titulo+'</strong></h1><h2>'+nombre.descripcion+'</h2><h3>'+nombre.fecha+'</h3><img id="imgvertical2" src="img/'+nombre.imagen+'" class="img-responsive center-block imgvertical"></div></div>');
 }); 
}

});
//Función para cambiar de imagen en el div de publicidad
var contador=1;
var temporizador = setInterval(myTimer, 2000);

var c=[];
c[0]="img/publi1.png";
c[1]="img/publi2.jpg";
c[2]="img/publi3.jpg";

function myTimer() {
	contador++;
	$("#ppp").attr('src',c[contador-1]);;
	if (contador==3) contador=0;
}
