const formulario = document.getElementById("formularioNuevoProducto");
const nombre = document.getElementById("productoInput");
const img = document.getElementById("imagenInput");
const precio = document.getElementById("precioInput");
const descripcion = document.getElementById("descripcionInput");
const ingredientes = document.getElementById("ingredientesInput");
const contenido = document.getElementById("cantidadInput");
const tipoDePiel = document.getElementById("pielSelect");

// Agregando el evento submit a nuestro form 
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validarFormulario()) {
        mostrarFormularioEnviado();
        imprimirJSON();
    }
});

// Agregar eventos de escucha a los campos de entrada para validar cuando se pierde el foco
nombre.addEventListener('blur', () => validarCampo(nombre, /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 'Ingresa un nombre válido'));
img.addEventListener('blur', () => validarCampo(img, /^.*\.(jpg|jpeg|png|gif|bmp|svg|webp)$/, 'Formatos válidos: jpg, jpeg, png, gif, bmp, svg, webp'));
precio.addEventListener('blur', () => validarCampo(precio, /^\d{1,7}$/, 'El precio solo contiene números'));
descripcion.addEventListener('blur', () => validarCampo(descripcion, /^.{1,250}$/, 'Ingresa un texto válido para la descripción'));
ingredientes.addEventListener('blur', () => validarCampo(ingredientes, /^.{1,600}$/, 'Ingresa un texto válido para los ingredientes'));
contenido.addEventListener('blur', () => validarCampo(contenido, /^[0-9gml\s\\.]{1,10}$/, 'Ingresa el contenido del producto y su unidad (g o ml)'));


// Función para validar el formulario 
const validarFormulario = () => {

const nombreValor = nombre.value.trim();
const imagenValor = img.value.trim();
const precioValor = precio.value.trim();
const descripcionValor = descripcion.value.trim();
const ingredientesValor = ingredientes.value.trim();
const contenidoValor = contenido.value.trim();
const tipoDePielValor = tipoDePiel.value.trim();

    const regex = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        img: /^.*\.(jpg|jpeg|png|gif|bmp|svg|webp)$/,
        precio: /^\d{1,7}$/,
        descripcion: /^.{1,250}$/, 
        ingredientes: /^.{1,600}$/, 
        contenido: /^[0-9gml\s\\.]{1,10}$/
    }

    const tipoPiel = () =>{ 
    let valido = true;
    if (tipoDePielValor === "Elija un tipo de piel") {
        noValidado(tipoDePiel, 'Por favor, elija un tipo de piel');
        valido = false;
    } else {
        siValidado(tipoDePiel);
    } 
    return valido;
}

    // Devolver true solo si todos los campos son válidos
    return regex.nombre.test(nombreValor) &&
        regex.img.test(imagenValor) &&
        regex.precio.test(precioValor) &&
        regex.descripcion.test(descripcionValor) &&
        regex.ingredientes.test(ingredientesValor) &&
        regex.contenido.test(contenidoValor) &&
        tipoPiel();
}


// Función para validar un campo cuando se pierde el foco
const validarCampo = (input, regex, mensaje) => {
    const valor = input.value.trim();

    if (!regex.test(valor)) {
        noValidado(input, mensaje);
    } else {
        siValidado(input);
    }
}

const imprimirJSON = () => {

const nombreValor = nombre.value.trim();
const imagenValor = img.value.trim();
const precioValor = precio.value.trim();
const descripcionValor = descripcion.value.trim();
const ingredientesValor = ingredientes.value.trim();
const contenidoValor = contenido.value.trim();
const tipoDePielValor = tipoDePiel.value.trim();

    const nuevoProducto = {
        "nombre": nombreValor,
        "img": imagenValor,
        "precio": `$ ${precioValor}.00`,
        "descripcion": descripcionValor,
        "ingredientes": ingredientesValor,
        "contenido": contenidoValor,
        "tipoDePiel": tipoDePielValor,
    };

    //para mostar el nuevo producto creado en la consola 
    console.log("El objeto nuevo creado es ", nuevoProducto)
    
    listaProductos.push(nuevoProducto);

    //para comprobar que se ha agregado el nuevo producto al array imprimimos en consola
    console.log(listaProductos); //12 objetos
}

// Función de noValidado que toma como parametros el imput de nuestro campo y un mensaje de 'campo vacío'
const noValidado = (input, mensaje) => {
    const formControl = input.parentElement;
    
    // Verificar si ya hay un aviso
    const aviso = formControl.querySelector("p.form-control-no");
    if (!aviso) {
        const nuevoAviso = document.createElement("p");
        nuevoAviso.innerText = mensaje;
        nuevoAviso.className = 'form-control-no';
        formControl.appendChild(nuevoAviso);
    }
}

// Función de siValidado que toma como parametro el imput de nuestro campo
const siValidado = (input) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector("p");

    if (aviso) {
        aviso.remove();
    }
}

const mostrarFormularioEnviado = () => {
    const formularioEnviado = document.getElementById("formularioEnviado");
    formularioEnviado.style.display = "block";
};