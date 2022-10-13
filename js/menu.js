document.getElementById("btn-menu").addEventListener("click", toggleMenu);
window.addEventListener('DOMContentLoaded', function(e){
    document.querySelector(".contenido").classList.toggle("nonav");//Cuando carga la pagina remuevo el area para el nav del grid
});

function toggleMenu(){
    document.querySelector("nav").classList.toggle("show"); //pongo display del nav en flex
    document.querySelector(".contenido").classList.toggle("nonav"); //Saco el area para el nav del grid
}