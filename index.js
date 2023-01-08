window.onload = function(){
    document.getElementById("button_cipher").onclick=cipher;
    document.getElementById("button_decipher").onclick=decipher;
    document.getElementById("copy_text").onclick=copyText;
}

function keyWord(vocals){
    switch(vocals){
        case "a":
            return "ai";
        case "e":
            return "enter";
        case "i":
            return "imes";
        case "o":
            return "ober";
        case "u":
            return "ufat";
    }
}

function cipher(){
    var dataEntry = document.getElementById("boxIn1").value;
    var dataOuput = document.getElementById("boxOut1");
    var content = dataEntry.toLowerCase();
    var result = "";

    for(i=0; i<content.length; i++){
        if (content[i] == "a"){
            result += keyWord(content[i])
        }
        else if (content[i] == "e"){
            result += keyWord(content[i])
        }
        else if (content[i] == "i"){
            result += keyWord(content[i])
        }
        else if (content[i] == "o"){
            result += keyWord(content[i])
        }
        else if (content[i] == "u"){
            result += keyWord(content[i])
        } else {
            result += content[i];
        }
    }
    dataOuput.innerHTML = result;
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
}

function copyText(){
    var dataEntry = document.getElementById("boxOut1");
    //No pude encontrar la forma de hacerlo con la API clipboard.
    dataEntry.select()
    document.execCommand('copy');
}