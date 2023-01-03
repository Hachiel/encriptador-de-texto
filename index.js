let a = "al";
let e = "enter";
let i = "imes";
let o = "ober";
let u = "ufat";

function copiarTexto(texto) {
    let areaTexto = document.createElement('textarea');
    areaTexto.value = texto;
    areaTexto.setAttribute('readonly', '');
    areaTexto.style.position = 'absolute';
    areaTexto.style.left = '-999px';

    document.body.appendChild(areaTexto);

    let selector = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;

    areaTexto.select();

    document.execCommand('copy');

    document.body.removeChild(areaTexto);

    if(selector) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selector);
    }
    
    window.onload = function() {
        document.getElementById('copiar').addEventListener('click', () => {
            let contenido = document.getElementById('cajaE1').value;

            copiarTexto(contenido);
        });
    }
}