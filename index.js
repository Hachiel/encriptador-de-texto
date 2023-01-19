window.onload = function(){
    document.getElementById("button_cipher").onclick=cipher;
    document.getElementById("button_decipher").onclick=decipher;
    document.getElementById("copy_button").onclick=copying;
    document.getElementById("boxIn1").focus();
}

function mensajeEncontrado() {
    var mensaje = document.getElementById("mensajeEncontrado");
    var caja = document.getElementById("boxOut1").value;

    if(caja == ""){
        mensaje.style.display="inline";
    } else {
        mensaje.style.display="none";
    }
}

function cipher(){
    var dataEntry = document.getElementById("boxIn1").value;
    var dataOuput = document.getElementById("boxOut1");
    var content = dataEntry.toLowerCase();
    var result = "";

    for(i=0; i<content.length; i++){
        if (content[i] == "a"){
            result += "ai";
        }
        else if (content[i] == "e"){
            result += "enter";
        }
        else if (content[i] == "i"){
            result += "imes";
        }
        else if (content[i] == "o"){
            result += "ober";
        }
        else if (content[i] == "u"){
            result += "ufat";
        } else {
            result += content[i];
        }
    }
    dataOuput.innerHTML = result;
    mensajeEncontrado()
}

function decipher(){
    var dataEntry = document.getElementById("boxIn1").value;
    var dataOuput = document.getElementById("boxOut1");
    var content = dataEntry.toLowerCase();
    var result = "";

    for(i=0; i<content.length; i++){
        if (content[i] == "a"){
            result += "a";
            i += 1;
        }
        else if (content[i] == "e"){
            result += "e";
            i += 4;
        }
        else if (content[i] == "i"){
            result += "i";
            i += 3;
        }
        else if (content[i] == "o"){
            result += "o";
            i += 3;
        }
        else if (content[i] == "u"){
            result += "u";
            i += 3;
        } else {
            result += content[i];
        }
    }
    dataOuput.innerHTML = result;
    mensajeEncontrado()
}

function copying(){
    var dataEntry = document.getElementById("boxOut1").value;
    navigator.clipboard.writeText(dataEntry);
}