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
    // Limpiar alertas previas
    document.getElementById('alertContainer').innerHTML = '';

    // Crear nueva alerta
    const alerta = document.createElement('div');
    alerta.className = `alert alert-${tipo}`;
    alerta.textContent = mensaje;

    // Agregar alerta al contenedor
    document.getElementById('alertContainer').appendChild(alerta);
}

function validarFormatoEmail(email) {
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formatoEmail.test(email);
}

function validarLongitud(email, longitudMinima) {
    return email.length >= longitudMinima;
}

function validarExistenciaDominio(email) {
    // Lógica para verificar la existencia del dominio en registros DNS (puedes agregarla si es necesario)
    return true;
}

function validarComplejidadContraseña(password) {
    // Verificar complejidad con expresión regular
    const complejidadContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/;
    return complejidadContraseña.test(password);
}

function validarFormulario() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    if (!validarFormatoEmail(email) || !validarLongitud(email, 10) || !validarExistenciaDominio(email)) {
        mostrarAlerta('Formato de correo electrónico no válido.', 'danger');
        return;
    }

    if (!validarLongitud(password, 8) || !validarComplejidadContraseña(password)) {
        mostrarAlerta('Contraseña no cumple con los requisitos mínimos de longitud o complejidad.', 'danger');
        return;
    }

    // Si pasa todas las validaciones, muestra una alerta de éxito
    mostrarAlerta('¡Formulario válido! Iniciar sesión.', 'success');
}

////////////////funciones para crear cuenta////////////////////////

function mostrarAlerta2(mensaje, tipo) {
    // Eliminar alertas previas
    document.getElementById('alertContainer2').innerHTML = '';

    // Crear nueva alerta
    var alerta = document.createElement('div');
    alerta.className = 'alert alert-' + tipo;
    alerta.innerHTML = mensaje;

    // Agregar alerta al contenedor
    document.getElementById('alertContainer2').appendChild(alerta);
}

function validarNombreUsuario() {
    var nombreUsuario = document.getElementById('nameInput--crearCuenta').value;
    return nombreUsuario.trim() !== '';
}
function validarTelefono() {
    var telefono = document.getElementById('phoneInput--crearCuenta').value.trim();

    // Verificar si el teléfono está vacío
    if (telefono === '') {
        mostrarAlerta2('El campo Teléfono no puede estar vacío.', 'danger');
        return false;
    }

    // Mejorar la expresión regular para permitir solo números y opcionalmente un símbolo "+" al principio
    var formatoCorrecto = /^(?:\+\d+)?\d*$/;

    // Validar que el teléfono contenga solo números y opcionalmente un símbolo "+" al principio
    if (!formatoCorrecto.test(telefono)) {
        mostrarAlerta2('El teléfono debe contener solo números y opcionalmente un símbolo "+" al principio.', 'danger');
        return false;
    }

    return true;
}




function validarEmailCrearCuenta() {
    var email = document.getElementById('emailInput--crearCuenta').value;
    return validarFormatoEmail(email) && validarLongitudEmail(email) && validarExistenciaDominio(email);
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
    var telefonoValido = validarTelefono();
    var emailValido = validarCampoNoVacio('emailInput--crearCuenta', 'Email');
    
    // Validar que el campo de contraseña no esté vacío y la contraseña sea válida
    var contraseñaValida = validarCampoNoVacio('passwordInput--crearCuenta', 'Contraseña') && validarContraseñaCrearCuenta();
    
    // Validar que el campo de repetir contraseña no esté vacío
    var repetirContraseñaValido = validarCampoNoVacio('passwordRepeat--crearCuenta', 'Repetir Contraseña');
    
    var noSoyRobotValido = validarCampoNoVacio('noSoyRobot', 'Checkbox No Soy un Robot');
    var aceptoTerminosValido = validarCampoNoVacio('aceptTermYCond', 'Checkbox Acepto Términos y Condiciones');

    // Verificar que todas las validaciones específicas sean exitosas, incluyendo la de repetir contraseña
    if (nombreValido && telefonoValido && emailValido && contraseñaValida && repetirContraseñaValido && noSoyRobotValido && aceptoTerminosValido) {
        // Si todas las validaciones específicas son exitosas
        mostrarAlerta2('¡Formulario válido! Crear cuenta.', 'success');
        return true;
    }

    // Si alguna validación específica falla, ya se habrá mostrado la alerta correspondiente
    return false;
}




// >>>>>>> Funciones para objetos <<<<<<
const form = document.querySelector('#loginForm--crearCuenta');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir el envío del formulario por defecto

  const jsonData = {};

  for (const input of form.querySelectorAll('input')) {
    // Comprobar si el input tiene un nombre:
    if (input.name) {
      // Obtener el valor del input:
      const value = input.value;

      // Agregar el valor al objeto JSON solo si no está vacío:
      if (value) {
        jsonData[input.name] = value;
      }
    }
  }

  // Agregar los valores de los checkboxes:
  jsonData['noSoyRobot'] = form.querySelector('#noSoyRobot').checked;
  jsonData['aceptTermYCond'] = form.querySelector('#aceptTermYCond').checked;

  console.log(JSON.stringify(jsonData)); // Imprimir los datos en formato JSON

  // Aquí puedes hacer lo que quieras con los datos en formato JSON, como enviarlos a un servidor
});

