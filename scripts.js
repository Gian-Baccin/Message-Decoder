let textInput = document.querySelector("#input-text");
let outinput = document.querySelector("#output");

function encode(){
    let texto = textInput.value;
    let text = texto.toLowerCase();

    let resultEncode = text.replace(/e/g, "enter").replace(/i/g, "imes")
    .replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="input">' + resultEncode + 
    '</textarea>' + '<div class="container-btn"><button class="btn-copy" id="copy" onclick="copy()">Copy</button></div>'
    
}

function decode(){
    let texto = textInput.value;
    let text = texto.toLowerCase();

    let resultDecode = text.replace(/enter/g, "e").replace(/imes/g, "i")
    .replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    document.getElementById('output').innerHTML = '<textarea readonly id="input">' + resultDecode + 
    '</textarea>' + '<div class="container-btn"><button class="btn-copy" id="copy" onclick="copy()">Copy</button></div>'
}

function copy(){
    let textCopy = document.getElementById('input');

    textCopy.select();
    document.execCommand('copy');
    // alert("The message has been successfully copied!")
}
