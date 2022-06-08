function encriptar() {
    var text = document.getElementById("inputText").value.toLowerCase();
    
    // i afecta tanto minuscula como mayuscula -- e else {

    var textCifrado = text.replace(/e/igm,"enter");
    var textCifrado = textCifrado.replace(/o/igm,"ober");
    var textCifrado = textCifrado.replace(/i/igm,"imes");
    var textCifrado = textCifrado.replace(/a/igm,"ai");
    var textCifrado = textCifrado.replace(/u/igm,"ufat");

    document.getElementById("right-img").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("text-2").innerHTML = textCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

}

function desencriptar() {
    var text = document.getElementById("inputText").value.toLowerCase();
    

    var textCifrado = text.replace(/enter/igm,"e");
    var textCifrado = textCifrado.replace(/ober/igm,"o");
    var textCifrado = textCifrado.replace(/imes/igm,"i");
    var textCifrado = textCifrado.replace(/ai/igm,"a");
    var textCifrado = textCifrado.replace(/ufat/igm,"u");

    document.getElementById("right-img").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("text-2").innerHTML = textCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

}

function copy() {
    var contenido = document.querySelector("#text-2");
    contenido.select();
    document.execCommand("copy");
    
}