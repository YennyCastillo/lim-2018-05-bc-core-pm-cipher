
//eventos del DOM
const buttonC= document.getElementById("botonE");
buttonC.addEventListener("click" , window.cipher.encode);

const buttonD= document.getElementById("botonD");
buttonD.addEventListener("click" ,window.cipher.decode);



let text= document.getElementById("texto");
text.addEventListener("textarea" , ()=>
{});

let clave= document.getElementById("llave");
clave.addEventListener("textarea" , ()=>
{});
