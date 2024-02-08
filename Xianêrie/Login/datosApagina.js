function guardarDatos() {
    // Obtener los valores ingresados por el usuario
    var nombre = document.getElementById("nameInput--crearCuenta").value;
    var email = document.getElementById("emailInput--crearCuenta").value;
    var telefono = document.getElementById("phoneInput--crearCuenta").value;

    // Almacenar los valores en sessionStorage para que estén disponibles en la siguiente página
    sessionStorage.setItem("nombreUsuario", nombre);
    sessionStorage.setItem("correo", email);
    sessionStorage.setItem("telefono", telefono);

    // Redireccionar a la página de usuario después de guardar los datos
    window.location.href = "pagina_usuario.html";
}