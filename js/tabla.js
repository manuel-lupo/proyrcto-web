let canciones = [
    {
        titulo: "Despertarme",
        artista: "Manukay ft. Nahuelon",
        lanzamiento: ""
    },
    {
        titulo: "Don Vital",
        artista: "Kiddoblack",
        lanzamiento: ""
    },
    {
        titulo: "Walking the Moon",
        artista:"Manukay Kiddoblack Nahuelon",
        lanzamiento: "25/05/2022"
    }
]

document.getElementById("btn-agregar").addEventListener('click', function(e){
    agregarCancion();
    vaciarTexto();
});
document.getElementById("btn-agregar3").addEventListener('click', function(e){
    for (let index = 0; index < 3; index++) {
        agregarCancion(); 
    }
    vaciarTexto();
});
document.getElementById("btn-vaciar").addEventListener('click', vaciarCanciones);

function vaciarTexto() { //Vacio el texto recorriendo el DOM para eliminar los values
    let input = document.querySelector("input");
    for (let index = 0; index < 3; index++) {
        input.value = "";
        input = input.nextElementSibling.nextElementSibling;
    }
}
function agregarCancion(){
    let form = document.querySelector("form");
    let nuevaCancion = {
        titulo : "",
        artista : "",
        lanzamiento : ""
    };
    let data = new FormData(form);
    nuevaCancion.titulo = data.get('titulo');
    nuevaCancion.artista = data.get('artista');
    nuevaCancion.lanzamiento = data.get('lanzamiento');
    canciones.push(nuevaCancion);
    mostrarTabla();
}

function vaciarCanciones(){
    let totalOriginal = canciones.length;
    for (let i = 0; i < totalOriginal; i++) {
        canciones.pop();
    }
    canciones = [
        {
            titulo: "Despertarme",
            artista: "Manukay ft. Nahuelon",
            lanzamiento: ""
        },
        {
            titulo: "Don Vital",
            artista: "Kiddoblack",
            lanzamiento: ""
        },
        {
            titulo: "Walking the Moon",
            artista:"Manukay Kiddoblack Nahuelon",
            lanzamiento: "25/05/2022"
        }
    ]
    mostrarTabla();
}

function mostrarTabla(){
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    for (const cancion of canciones) {
        tbody.innerHTML += '<tr>' + '<th>'+ cancion.titulo  + "</th>" + '<th>' + cancion.artista + '</th>' + '<th>' + cancion.lanzamiento + '</th>';
    }
}

window.addEventListener('DOMContentLoaded', mostrarTabla);