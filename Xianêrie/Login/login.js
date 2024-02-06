// Lógica de validación del formulario
// Por ejemplo, verificar que los campos no estén vacíos

$('.toggle').click(function () {
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
})


////////////////funciones para login////////////////////////
function mostrarAlerta(containerId, mensaje, tipo) {
    const alertContainer = document.querySelector(`#${containerId}`);
    alertContainer.innerHTML = '';

    const alerta = document.createElement('div');
    alerta.className = `alert alert-${tipo}`;
    alerta.textContent = mensaje;

    alertContainer.appendChild(alerta);
}

function validarFormatoEmail(email) {
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formatoEmail.test(email);
}

function validarExistenciaEmail(email) {
    // Verificar si el email existe en el localStorage
    const users = JSON.parse(localStorage.getItem('users'));

    if (users && users.email === email) {
        return true;
    }

    return false;
}

function validarComplejidadContraseña(password) {
    // Verificar complejidad con expresión regular
    const complejidadContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return complejidadContraseña.test(password);
}

// **************** El formulario de iniciar sesion ya solo se puede validar con la informacion almacenada de email y contraseña dados al crear cuenta ****************
function validarFormulario() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    // Verificar si el usuario existe en la localStorage (key: users) y los datos son correctos
    const listaUsuarios = JSON.parse(localStorage.getItem('users')) || [];

    if (email === "" || password === "") {
        mostrarAlerta('alertContainer', 'Campos vacíos.', 'danger');
    } else {
        // Iterar sobre el array listaUsuarios para encontrar al ususario solicitado. 
        const usuario = listaUsuarios.find(user => user.email === email && user.password === password);

        if (usuario) {
            // Inicio de sesión exitoso
            mostrarAlerta('alertContainer', '¡Inicio de sesión exitoso!', 'success');
            // Redirigir a la página de destino
            setTimeout(() => {
                window.location.href = "/Xianêrie/landing_page/landing.html";
            }, 1500);
        } else {
            mostrarAlerta('alertContainer', 'Email o contraseña incorrectos.', 'danger');
        }
    }
}


////////////////funciones para crear cuenta////////////////////////

function mostrarAlerta2(mensaje, tipo) {
    mostrarAlerta('alertContainer2', mensaje, tipo);
}

// Funciones de validación actualizadas con eventos keyup
document.getElementById('nameInput--crearCuenta').addEventListener('keyup', validarNombreUsuario);
document.getElementById('apellidoPaternoInput--crearCuenta').addEventListener('keyup', validarApellidoPaternoUsuario);
document.getElementById('apellidoMaternoInput--crearCuenta').addEventListener('keyup', validarApellidoMaternoUsuario);
document.getElementById('phoneInput--crearCuenta').addEventListener('keyup', validarTelefono);
document.getElementById('emailInput--crearCuenta').addEventListener('keyup', validarEmailCrearCuenta);
document.getElementById('passwordInput--crearCuenta').addEventListener('keyup', validarContraseñaCrearCuenta);
document.getElementById('passwordRepeat--crearCuenta').addEventListener('keyup', validarContraseñaCrearCuenta);

// Funciones de validación actualizadas con eventos keyup
function validarNombreUsuario() {
    var nombreUsuario = document.getElementById('nameInput--crearCuenta').value;
    var regexNombre = /^[a-zA-Z\s]+$/;

    if (!regexNombre.test(nombreUsuario.trim())) {
        mostrarAlerta2('El nombre de usuario no cumple con el formato requerido.', 'danger');
        return false;
    }
    return true;
}

function validarApellidoPaternoUsuario() {
    var apellidoPaterno = document.getElementById('apellidoPaternoInput--crearCuenta').value;
    var regexApellido = /^[a-zA-Z\s]+$/;

    if (!regexApellido.test(apellidoPaterno.trim())) {
        mostrarAlerta2('El apellido paterno no cumple con el formato requerido.', 'danger');
        return false;
    }

    return true;
}

function validarApellidoMaternoUsuario() {
    var apellidoMaterno = document.getElementById('apellidoMaternoInput--crearCuenta').value;
    var regexApellido = /^[a-zA-Z\s]+$/;

    if (!regexApellido.test(apellidoMaterno.trim())) {
        mostrarAlerta2('El apellido materno no cumple con el formato requerido.', 'danger');
        return false;
    }

    return true;
}

function validarTelefono() {
    var telefono = document.getElementById('phoneInput--crearCuenta').value.trim();
    var formatoCorrecto = /^(?:\+\d{1,3})?\d{8,}$/; // Permitir código de país opcional

    if (!formatoCorrecto.test(telefono)) {
        mostrarAlerta2('El teléfono no cumple con el formato requerido.', 'danger');
        return false;
    }

    return true;
}

function validarEmailCrearCuenta() {
    var email = document.getElementById('emailInput--crearCuenta').value;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        mostrarAlerta2('El teléfono no cumple con el formato requerido.', 'danger');
        return false;
    }

    return true;

}
function validarContraseñaCrearCuenta() {
    var password = document.getElementById('passwordInput--crearCuenta').value;
    var passwordRepeat = document.getElementById('passwordRepeat--crearCuenta').value;

    // Verificar que las contraseñas coincidan solo si ambos campos no están vacíos
    if (password !== '' && passwordRepeat !== '') {
        // Verificar longitud mínima de la contraseña
        if (password.length < 8) {
            mostrarAlerta2('La contraseña debe tener al menos 8 caracteres.', 'danger');
            return false;
        }

        // Verificar complejidad de la contraseña
        var complejidadContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/;
        if (!complejidadContraseña.test(password)) {
            mostrarAlerta2('La contraseña debe contener al menos una mayúscula, una minúscula, un número y un caracter especial.', 'danger');
            return false;
        }

        // Verificar que las contraseñas coincidan
        if (password !== passwordRepeat) {
            mostrarAlerta2('Las contraseñas no coinciden. Por favor, verifica.', 'danger');
            return false;
        }
    }

    return true;
}
function validarNoSoyRobot() {
    return document.getElementById('noSoyRobot').checked;
}
function validarCampoNoVacio(idCampo, nombreCampo) {
    var elementoCampo = document.getElementById(idCampo);

    // Verificar si el campo es un checkbox
    if (elementoCampo.type === 'checkbox') {
        // Verificar si hay al menos un campo no vacío antes de validar el checkbox
        if (!todosLosCamposVacios() && !elementoCampo.checked) {
            mostrarAlerta2('Debes marcar el campo ' + nombreCampo + '.', 'danger');
            return false;
        }
    } else {
        // Verificar que el campo no esté vacío solo si hay al menos un campo no vacío
        var valorCampo = elementoCampo.value.trim();
        if (!todosLosCamposVacios() && valorCampo === '') {
            mostrarAlerta2('El campo ' + nombreCampo + ' no puede estar vacío.', 'danger');
            return false;
        }
    }
    return true;
}
function todosLosCamposVacios() {
    // Verificar si todos los campos están vacíos
    var campos = document.querySelectorAll('.form-login');
    for (var i = 0; i < campos.length; i++) {
        if (campos[i].value.trim() !== '') {
            return false;
        }
    }
    return true;
}

function validarFormularioCrearCuenta() {
    var nombreValido = validarCampoNoVacio('nameInput--crearCuenta', 'Nombre');
    var apellidoPaternoValido = validarCampoNoVacio('apellidoPaternoInput--crearCuenta', 'Apellido Paterno');
    var apellidoMaternoValido = validarCampoNoVacio('apellidoMaternoInput--crearCuenta', 'Apellido Materno');
    var telefonoValido = validarTelefono();
    var emailValido = validarCampoNoVacio('emailInput--crearCuenta', 'Email');

    // Validar que el campo de contraseña no esté vacío y la contraseña sea válida
    var contraseñaValida = validarCampoNoVacio('passwordInput--crearCuenta', 'Contraseña') && validarContraseñaCrearCuenta();

    // Validar que el campo de repetir contraseña no esté vacío
    var repetirContraseñaValido = validarCampoNoVacio('passwordRepeat--crearCuenta', 'Repetir Contraseña');

    var noSoyRobotValido = validarCampoNoVacio('noSoyRobot', 'Checkbox No Soy un Robot');
    var aceptoTerminosValido = validarCampoNoVacio('aceptTermYCond', 'Checkbox Acepto Términos y Condiciones');

    // Verificar que todas las validaciones específicas sean exitosas, incluyendo la de repetir contraseña
    if (nombreValido && apellidoPaternoValido && apellidoMaternoValido && telefonoValido && emailValido && contraseñaValida && repetirContraseñaValido && noSoyRobotValido && aceptoTerminosValido) {
        // Si todas las validaciones específicas son exitosas redirige a la pagina_de_usuario
        mostrarAlerta2('¡Formulario válido! Crear cuenta.', 'success');
        setTimeout(() => {
            window.location.href = "/Xianêrie/pagina_de_usuario/index.html";
        }, 1500);
        return true;
    }

    // Si alguna validación específica falla, ya se habrá mostrado la alerta correspondiente
    return false;
}




// >>>>>>> Funciones para objetos <<<<<<

// Uso de jQuery para manejar el evento submit del formulario de crear cuenta y almacenar localmente la inforamcion (necesaria para iniciar sesion)
$('#loginForm--crearCuenta').submit(function (event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const jsonData = {};

    $(this).find('input').each(function () {
        const value = $(this).val();
        if (value) {
            jsonData[$(this).attr('name')] = value;
        }
    });

    jsonData['noSoyRobot'] = $('#noSoyRobot').prop('checked');
    jsonData['aceptTermYCond'] = $('#aceptTermYCond').prop('checked');

    console.log(JSON.stringify(jsonData)); // Imprimir los datos en formato JSON

    // Aquí puedes hacer lo que quieras con los datos en formato JSON, como enviarlos a un servidor
    if (validarFormularioCrearCuenta()) {
        // Obtener la lista actual de usuarios del localStorage
        const listaUsuarios = JSON.parse(localStorage.getItem('users')) || [];

        // Crear un nuevo usuario a partir del id de los inputs ingresados 
        const users = {
            nombre: $('#nameInput--crearCuenta').val(),

            /* Sea agregan los id de apellidos en líneas 233 y 234 */

            apellidoPaterno: $('#apellidoPaternoInput--crearCuenta').val(),
            apellidoMaterno: $('#apellidoMaternoInput--crearCuenta').val(),
            telefono: $('#phoneInput--crearCuenta').val(),
            email: $('#emailInput--crearCuenta').val(),
            // Podemos cifrar localmente la contraseña con hash
            password: $('#passwordRepeat--crearCuenta').val(),
        };

        // Se agrega el nuevo usuario a la lista existente
        listaUsuarios.push(users);

        // Almacenar la lista actualizada de usuarios en el localStorage
        localStorage.setItem('users', JSON.stringify(listaUsuarios));
    }
});