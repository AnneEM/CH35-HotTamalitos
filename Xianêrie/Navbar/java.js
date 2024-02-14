const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click", ()=> {
    nav.classList.remove("visible");
})


//// Cambiar boton Cuenta por Mi perfil 
const usuario = JSON.parse(sessionStorage.getItem('usuario'));
const cuenta = document.getElementById('cuenta')
if(usuario){
    cuenta.innerHTML= `
    <a href="/Xianêrie/pagina_de_usuario/pagina_usuario.html">Mi Perfil</a>
    `
} else {
    cuenta.innerHTML= `
    <a href="/Xianêrie/Login/index.html">Cuenta</a>
    `
}