function mujer() {
     var x=document.getElementById("cabecera");
     x.style.backgroundColor="pink";
     var x=document.getElementById("latera");
     x.style.backgroundColor="#FF00FF";
     var x=document.getElementById("mas");
     x.style.backgroundColor="pink";
     var x=document.getElementById("navegador");
     x.style.backgroundColor="#8258FA";
     var x=document.getElementById("pie");
     x.style.backgroundColor="#F78181";
     var x=document.getElementById("imagen1");
     x.src="niña.jpg";
     var f1 ="hola" + "Eres Mujer";
     alert(f1);
}
function hombre() {
     var x=document.getElementById("cabecera");
     x.style.backgroundColor="black";
     var x=document.getElementById("latera");
     x.style.backgroundColor="green";
     var x=document.getElementById("mas");
     x.style.backgroundColor="#610B0B";
     var x=document.getElementById("navegador");
     x.style.backgroundColor="#0B2161";
     var x=document.getElementById("pie");
     x.style.backgroundColor="#086A87";
     var x=document.getElementById("imagen1");
     x.src="niño.jpg";
     var f1 ="hola" + "Eres Hombre";
     alert(f1);
}
function mostrar(){
     var f=document.getElementById("fesc");
     f.style.color="grey";
     f.style.border="solid";
     f.style.backgroundColor="#470A0A";
}
function sumar(){
     var f=document.getElementById("num1");
     var e=document.getElementById("num2");
     var d= parseInt(f.value) + parseInt(e.value);
     var e=document.getElementById("suma");
     c.value=d;
}
