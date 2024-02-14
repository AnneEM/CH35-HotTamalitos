const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


document.addEventListener('DOMContentLoaded', function () {
    // Verificar si el usuario está autenticado al cargar la página
    verificarAutenticacion();

    // Agregar evento de clic al botón de cerrar sesión
    document.getElementById('cerrarSesionBtn').addEventListener('click', function () {
        // Lógica para cerrar sesión
        cerrarSesion();
    });

    // Función para verificar la autenticación y mostrar/ocultar el botón de cerrar sesión
    function verificarAutenticacion() {
        // Verificar si el usuario está autenticado (puedes ajustar la condición según tu lógica)
        if (localStorage.getItem('users')) {
            // Si el usuario está autenticado, mostrar el botón de cerrar sesión
            document.getElementById('cerrarSesionLi').style.display = 'block';
        } else {
            // Si el usuario no está autenticado, ocultar el botón de cerrar sesión
            document.getElementById('cerrarSesionLi').style.display = 'none';
        }
    }

    // Función para cerrar sesión
    function cerrarSesion() {
        // Lógica para cerrar sesión en el lado del cliente
        localStorage.removeItem('users'); // Eliminar la marca de autenticación

        // Redirige a la página de inicio de sesión
        window.location.href = '/Xianêrie/Login/index.html';
    }
});
