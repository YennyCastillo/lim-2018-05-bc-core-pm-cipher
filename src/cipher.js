const encrypt = (offset, string) => {
  let answerEncrypt="";
  for (let i=0 ; i < string.length ; i++)
  {
    let stringEncrypt= string.toUpperCase().charCodeAt(i);

    answerEncrypt += String.fromCharCode((stringEncrypt-65+offset) % 26 +65);
  }
  return answerEncrypt;
}

const decrypt = (offset, string) => {
  let answerDecrypt = "";
  for (let i=0 ; i < string.length ; i++)
  {
    let stringDecrypt= string.toUpperCase().charCodeAt(i);
    answerDecrypt += String.fromCharCode((stringDecrypt+65-offset) % 26 +65);
  }
  return answerDecrypt;
}


window.cipher = {
  encode : encrypt,
  decode : decrypt,
}

/*cipher.createCipherWithOffset = (offset)=>{
  encode:(string)=>{
    return cipher.encode(offset, string);
  }
  decode:(string)=>{
    return cipher.decode(offset, string);
  };
}*/
