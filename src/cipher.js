const encriptar = () => {
  let encode= document.getElementById('texto').value;
  let key1= parseInt(document.getElementById('llave').value);
  let longTex = encode.length;
  let i = 0;

  document.getElementById("answer").innerHTML = "";
  for (i=0 ; i < longTex ; i++)
  {
    let stringE= (encode.toUpperCase().charAt(i)).charCodeAt(0);
    let answerE = String.fromCharCode((stringE-65+key1) % 26 +65);
    console.log(answerE);
    document.getElementById("answer").innerHTML +=answerE;
  }
}

const desencriptar = () => {
  let decode= document.getElementById('texto').value;
  let key2= parseInt(document.getElementById('llave').value);
  let longText = decode.length;
  let i = 0;
document.getElementById("answer").innerHTML = "";
  for (i=0 ; i < longText ; i++)
  {
    let stringD= (decode.toUpperCase().charAt(i)).charCodeAt(0);
    let answerD= String.fromCharCode((stringD+65-key2) % 26 +65);
    console.log(answerD);
    document.getElementById("answer").innerHTML += answerD;
   }

}
window.cipher = {
  encode : encriptar,
  decode : desencriptar

};
