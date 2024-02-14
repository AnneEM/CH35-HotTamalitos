const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

/// Cambiar boton Cuenta por Mi perfil 
const usuario = JSON.parse(sessionStorage.getItem('usuario'));
const cuenta = document.getElementById('cuenta')
const cerrarSesion = document.getElementById('cerrarSesion')

if (usuario) {
    cuenta.innerHTML = `
    <a href="/Xianêrie/pagina_de_usuario/pagina_usuario.html">Mi Perfil</a>
    `
    cerrarSesion.innerHTML = `
    <button id="cerrarSesionBtn">Cerrar sesión</button>
    `
    const cerrarSesionBtn = document.getElementById('cerrarSesionBtn')
    cerrarSesionBtn.addEventListener('click', () => {
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('pedidos');
        sessionStorage.removeItem('idPedido');
        window.location.href = '/Xianêrie/landing_page/landing.html'
    })
} else {
    cuenta.innerHTML = `
    <a href="/Xianêrie/Login/index.html">Cuenta</a>
    `
}
