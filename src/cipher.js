const encriptar = (string, offset) => {
  let answerE = "";
  for (let i=0 ; i < string.length ; i++)
  {
    let stringE = string.toUpperCase().charCodeAt(i);
    answerE += String.fromCharCode((stringE-65+offset) % 26 +65);
  }
  return answerE;
}

const desencriptar = (string, offset) => {
  let answerD = "";
  for (let i=0 ; i < string.length ; i++)
  {
    let stringD= string.toUpperCase().charCodeAt(i);
    answerD += String.fromCharCode((stringD+65-offset) % 26 +65);
  }
  return answerD;
}
window.cipher = {
  encode : encriptar,
  decode : desencriptar
};
