const buttonC= document.getElementById("botonE");
buttonC.addEventListener("click" , () =>{
let encode= document.getElementById("texto").value;
let key1= parseInt(document.getElementById('llave').value);
let result= document.getElementById("answer");
result.innerHTML = window.cipher.encode(key1,encode);});


const buttonD= document.getElementById("botonD");
buttonD.addEventListener("click" , () =>{
let decode= document.getElementById('texto').value;
let key2= parseInt(document.getElementById('llave').value);
let result= document.getElementById("answer");
result.innerHTML = window.cipher.decode(key2,decode);});

const buttonS = document.getElementById("botonS");
buttonS.addEventListener("click" , ()=>{
document.getElementById("root").style.display = "block";
document.getElementById("inicio").style.display = "none";
});
