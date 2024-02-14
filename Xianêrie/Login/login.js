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

// Función para mostrar la alerta
function mostrarAlerta2(mensaje, tipo) {
    mostrarAlerta('alertContainer2', mensaje, tipo);
}

// Función de validación general
function validarInput(inputId, regex, mensajeError) {
    var inputValue = document.getElementById(inputId).value.trim();

    if (!regex.test(inputValue)) {
        mostrarAlerta2(mensajeError, 'danger');
        return false;
    }

    mostrarAlerta2('El input cumple con el formato.', 'success');
    return true;
}

// Función para validar que las contraseñas coincidan
function validarContraseñaRepetida() {
    var password = document.getElementById('passwordInput--crearCuenta').value;
    var passwordRepeat = document.getElementById('passwordRepeat--crearCuenta').value;

    // Verificar complejidad de la contraseña (requiere al menos una mayúscula, una minúscula, un número y un caracter especial)
    var complejidadContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/;
    if (!complejidadContraseña.test(password) && password.length < 8) {
        mostrarAlerta2('La contraseña debe tener 8 caracteres y contener al menos una mayúscula, una minúscula, un número y un caracter especial.', 'danger');
        return false;
    }
    if (password !== passwordRepeat) {
        mostrarAlerta2('Las contraseñas no coinciden. Por favor, verifica.', 'danger');
        return false;
    }
    mostrarAlerta2('Contrseña válida.', 'success');
    return true;
}

// Eventos keyup para los diferentes campos
document.getElementById('nameInput--crearCuenta').addEventListener('keyup', function () {
    validarInput('nameInput--crearCuenta', /^[a-zA-Z\s]+$/, 'El nombre no cumple con el formato requerido.');
});

document.getElementById('apellidoInput--crearCuenta').addEventListener('keyup', function () {
    validarInput('apellidoInput--crearCuenta', /^[a-zA-Z\s]+$/, 'El apellido no cumple con el formato requerido.');
});

// document.getElementById('apellidoMaternoInput--crearCuenta').addEventListener('keyup', function () {
//     validarInput('apellidoMaternoInput--crearCuenta', /^[a-zA-Z\s]+$/, 'El apellido materno no cumple con el formato requerido.');
// });

document.getElementById('phoneInput--crearCuenta').addEventListener('keyup', function () {
    validarInput('phoneInput--crearCuenta', /^(?:\+\d{1,3})?\d{8,}$/, 'El teléfono no cumple con el formato requerido.');
});

document.getElementById('emailInput--crearCuenta').addEventListener('keyup', function () {
    validarInput('emailInput--crearCuenta', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'El email no cumple con el formato requerido.');
});

document.getElementById('passwordInput--crearCuenta').addEventListener('keyup', function () {
    validarInput('passwordInput--crearCuenta', /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/, 'La contraseña no cumple con el formato requerido.');
    validarContraseñaRepetida();
});

document.getElementById('passwordRepeat--crearCuenta').addEventListener('keyup', function () {
    validarContraseñaRepetida();
});

document.getElementById('noSoyRobot').addEventListener('change', function () {
    validarCampoNoVacio('noSoyRobot', 'Checkbox No Soy un Robot');
});

document.getElementById('aceptTermYCond').addEventListener('change', function () {
    validarCampoNoVacio('aceptTermYCond', 'Checkbox Acepto Términos y Condiciones');
});

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
    var apellidoValido = validarCampoNoVacio('apellidoInput--crearCuenta', 'Apellido');
    /* var telefonoValido = validarCampoNoVacio('#phoneInput--crearCuenta', 'Telefono'); */
    var emailValido = validarCampoNoVacio('emailInput--crearCuenta', 'Email');

    // Validar que el campo de contraseña no esté vacío y la contraseña sea válida
    var contraseñaValida = validarCampoNoVacio('passwordInput--crearCuenta', 'Contraseña') && validarContraseñaRepetida();

    // Validar que el campo de repetir contraseña no esté vacío
    var repetirContraseñaValido = validarCampoNoVacio('passwordRepeat--crearCuenta', 'Repetir Contraseña');

    var noSoyRobotValido = validarCampoNoVacio('noSoyRobot', 'Checkbox No Soy un Robot');
    var aceptoTerminosValido = validarCampoNoVacio('aceptTermYCond', 'Checkbox Acepto Términos y Condiciones');

    // Verificar que todas las validaciones específicas sean exitosas, incluyendo la de repetir contraseña
    if (nombreValido && apellidoValido && emailValido && contraseñaValida && repetirContraseñaValido && noSoyRobotValido && aceptoTerminosValido) {
        // Si todas las validaciones específicas son exitosas redirige a la pagina_de_usuario
        mostrarAlerta2('¡Formulario válido! Crear cuenta.', 'success');
        setTimeout(() => {
            window.location.href = "/Xianêrie/pagina_de_usuario/pagina_usuario.html";
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

    // almacenamos la información localmente y creamos un objeto JSON 
    if (validarFormularioCrearCuenta()) {
        // Obtener la lista actual de usuarios del localStorage
        const listaUsuarios = JSON.parse(localStorage.getItem('users')) || [];

        // Crear un nuevo usuario a partir del id de los inputs ingresados 
        const users = {
            nombre: $('#nameInput--crearCuenta').val(),
            apellido: $('#apellidoInput--crearCuenta').val(),
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
