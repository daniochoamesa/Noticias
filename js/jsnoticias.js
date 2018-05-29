//variables
//funciones

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
