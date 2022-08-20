const textoIngresado = document.querySelector("#texto1");
const textoEncriptado = document.querySelector("#texto2");
const inputEncriptar = document.querySelector("#boton1");
const inputDesencriptar = document.querySelector("#boton2");
const inputCopiar = document.querySelector("#boton3");

function quitarimagen(){
    document.getElementById('aviso').style.display = 'none'
    document.getElementById('mostrarMss').style.display = 'block';
}
function ponerImagen(){
    document.getElementById('aviso').style.display = 'block'
    document.getElementById('mostrarMss').style.display = 'none';
}
function borrarMs(){
    textoIngresado.value="";
}
function redireccionar(){
    textoIngresado.focus();
}

function Encriptar(){
    var mensaje = textoIngresado.value;
    var arreglo = new String(mensaje);
    var mensajeEncriptado = mensaje 
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");
    textoEncriptado.value = mensajeEncriptado;
    for(var i=0;i<arreglo.length;i++){
        if(arreglo.length>0){
            quitarimagen();
            borrarMs();
        }
        else{
            ponerImagen();
            redireccionar();
        }       
    }
}
function Desencriptar(){
    var mensajeEncriptado = textoIngresado.value;
    var arreglo = new String(mensajeEncriptado);
    var mensaje =  mensajeEncriptado
    .replaceAll("ai","a")
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
    textoEncriptado.value = mensaje;
    for(var i=0;i<arreglo.length;i++){
        if(arreglo.length>0){
            quitarimagen();
            borrarMs();
        }
        else{
            ponerImagen();
            redireccionar();
        } 
    }
}
function Copiar(){
    var mensajeEncriptado = textoEncriptado.value
    navigator.clipboard.writeText(mensajeEncriptado);
    ponerImagen();
    redireccionar();
}
inputEncriptar.onclick = Encriptar;
inputDesencriptar.onclick = Desencriptar;
inputCopiar.onclick = Copiar;
