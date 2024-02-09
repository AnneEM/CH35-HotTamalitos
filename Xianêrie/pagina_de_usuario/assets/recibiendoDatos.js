// Obtener los datos almacenados en sessionStorage y mostrarlos en los inputs correspondientes
document.getElementById("nombreUsuario").value = sessionStorage.getItem("nombreUsuario");
document.getElementById("correo").value = sessionStorage.getItem("correo");
document.getElementById("telefono").value = sessionStorage.getItem("telefono");