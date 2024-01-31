//Variable para mostrar u ocultar el menu (ver en html, en la seccion encabezado)
let menuVisible = false;

//Funcion que ocualta o muestra el menu en responsive
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("navegacion").classList ="";
        menuVisible = false;
    } else {
        document.getElementById("navegacion").classList ="responsive";
        menuVisible = true;
    }
}

//Funcion para ocultar el menu una vez que se selecciona una opcion
function seleccionar() {
document.getElementById("navegacion").classList = "";
menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades de la seccion Skills
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("cplus");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("liderazgo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("orientacion");
    }
}

//Aqui se detecta el scroll, el cual va aplicar la animaciones de la barra de skills
window.onscroll = function() {
    efectoHabilidades();
} 