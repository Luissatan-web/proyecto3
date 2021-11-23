let btnMostrar = document.getElementById('show')
    menu = document.getElementById('menu')
    contenido = document.getElementById('contenido')

    btnMostrar.addEventListener('click', mostrar)
function mostrar() { 
    menu.classList.toggle('visible')
}