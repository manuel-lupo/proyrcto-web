let btn_rfrsh = document.getElementById("btn-refresh");
btn_rfrsh.addEventListener("click", captcha);
let btn_registro = document.getElementById("btn-registro");
btn_registro.addEventListener("click", validcap);
document.addEventListener("DOMContentLoaded", captcha)
/*No usamos boton sumbit ya que no hay boton para solo validar el captcha y se perderia el ya generado ya que estos botones refrescan
a la pagina si que con un boton normal validamos el captcha y si es correcto enviamos el formulario con una funcion*/ 
function captcha() {
    let digitos = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let a = digitos[Math.floor(Math.random() * 62)];
    let b = digitos[Math.floor(Math.random() * 62)];
    let c = digitos[Math.floor(Math.random() * 62)];
    let d = digitos[Math.floor(Math.random() * 62)];
    let e = digitos[Math.floor(Math.random() * 62)];
    let f = digitos[Math.floor(Math.random() * 62)];
    let g = digitos[Math.floor(Math.random() * 62)];

    let cap = a + b + c + d + e + f + g;
    console.log(cap);
    document.querySelector(".preview .digitos").innerHTML = cap;
}

function validcap() {
    let captcha = document.querySelector(".preview .digitos").innerHTML;
    let texto = document.getElementById("resp").value;
    let mensajes = ["Captcha correcto!"/* [0] */, "Captcha incorrecto maldito robot!"/* [1] */, "Te pensas que sos vivo"/* [2] */];
    if ((texto == mensajes[0]) || (texto == mensajes[1]) || (texto == mensajes[2])) { //Comprueba si ponen los mensajes antes mostrados
        document.querySelector(".preview .digitos").innerHTML = mensajes[2];//Mensaje de error por el mismo visor del captcha
        document.getElementById("resp").value = "";//Vacia el campo de texto
    } else if (captcha == texto) {
        document.querySelector(".preview .digitos").innerHTML = mensajes[0];
        document.getElementById("registro").submit();//Funcion sumbit

    } else if (captcha != texto) {
        document.querySelector(".preview .digitos").innerHTML = mensajes[1];
        document.getElementById("resp").value = "";//Vacia el campo de texto
    }
}