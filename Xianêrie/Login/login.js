// Lógica de validación del formulario
// Por ejemplo, verificar que los campos no estén vacíos

$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
})

////////////////funciones para login////////////////////////
function mostrarAlerta(mensaje, tipo) {
    // Eliminar alertas previas
    document.getElementById('alertContainer').innerHTML = '';

    // Crear nueva alerta
    var alerta = document.createElement('div');
    alerta.className = 'alert alert-' + tipo;
    alerta.innerHTML = mensaje;

    // Agregar alerta al contenedor
    document.getElementById('alertContainer').appendChild(alerta);
}

function validarFormatoEmail(email) {
    var formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formatoEmail.test(email);
}

function validarLongitudEmail(email) {
    return email.length >= 10;
}

function validarExistenciaDominio(email) {
    // Puedes agregar aquí la lógica para verificar la existencia del dominio en registros DNS
    return true;
}

function validarLongitudContraseña(password) {
    return password.length >= 8; // Ajusta la longitud mínima según tus requisitos
}

function validarComplejidadContraseña(password) {
    // Verificar si la contraseña cumple con la complejidad requerida (mayúsculas, minúsculas, números, caracteres especiales)
    var complejidadContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/;
    return complejidadContraseña.test(password);
}

function validarFormulario() {
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    if (!validarFormatoEmail(email)) {
        mostrarAlerta('Formato de correo electrónico no válido.', 'danger');
        return;
    }

    if (!validarLongitudEmail(email)) {
        mostrarAlerta('El correo electrónico debe tener al menos 10 caracteres.', 'danger');
        return;
    }

    if (!validarExistenciaDominio(email)) {
        mostrarAlerta('El dominio del correo electrónico no existe.', 'danger');
        return;
    }

    if (!validarLongitudContraseña(password)) {
        mostrarAlerta('La contraseña debe tener al menos 8 caracteres.', 'danger');
        return;
    }

    if (!validarComplejidadContraseña(password)) {
        mostrarAlerta('La contraseña debe contener al menos una mayúscula, una minúscula, un número y un caracter especial.', 'danger');
        return;
    }

    // Si pasa todas las validaciones, puedes mostrar una alerta de éxito
    mostrarAlerta('¡Formulario válido! Iniciar sesión.', 'success');
}

////////////////////////////funciones para crear cuenta/////////////////////////////////

    // function mostrarAlerta(mensaje, tipo) {
    //     // Eliminar alertas previas
    //     document.getElementById('alertContainer').innerHTML = '';

    //     // Crear nueva alerta
    //     var alerta = document.createElement('div');
    //     alerta.className = 'alert alert-' + tipo;
    //     alerta.innerHTML = mensaje;

    //     // Agregar alerta al contenedor
    //     document.getElementById('alertContainer').appendChild(alerta);
    // }

    // function validarRegistro() {
    //     var name = document.getElementById('nameInput--crearCuenta').value;
    //     var phone = document.getElementById('phoneInput--crearCuenta').value;
    //     var email = document.getElementById('emailInput--crearCuenta').value;
    //     var password = document.getElementById('passwordInput--crearCuenta').value;
    //     var confirmPassword = document.getElementById('confirmPasswordInput--crearCuenta').value;

    //     if (name.trim() === '' || tel.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
    //         mostrarAlerta('Por favor, completa todos los campos.', 'danger');
    //         return;
    //     }

    //     // Validaciones adicionales según tus requisitos
    //     // Puedes agregar aquí las funciones de validación para cada campo

    //     // Si pasa todas las validaciones, puedes mostrar una alerta de éxito
    //     mostrarAlerta('¡Registro exitoso! Cuenta creada.', 'success');
    // }

