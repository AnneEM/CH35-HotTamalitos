const formulario = document.getElementById("formularioNuevoProducto");
const nombre = document.getElementById("productoInput");
const img = document.getElementById("imagenInput");
const precio = document.getElementById("precioInput");
const descripcion = document.getElementById("descripcionInput");
const ingredientes = document.getElementById("ingredientesInput");
const contenido = document.getElementById("cantidadInput");
const tipoDePiel = document.getElementById("pielSelect");
const stock = document.getElementById("stockInput");

// Array con los regex y mensaje de error para cada input
const campos = [
    { input: nombre, regex: /^[a-zA-ZÀ-ÿ\s]{1,40}$/i, mensaje: 'Ingresa un nombre válido' },
    { input: img, regex: /^.*\.(jpg|jpeg|png|gif|bmp|svg|webp)$/, mensaje: 'Formatos válidos: jpg, jpeg, png, gif, bmp, svg, webp' },
    { input: precio, regex: /^\d{1,7}$/, mensaje: 'El precio solo debe contener números' },
    { input: descripcion, regex: /^.{1,250}$/, mensaje: 'Ingresa un texto válido para la descripción' },
    { input: ingredientes, regex: /^.{1,600}$/, mensaje: 'Ingresa un texto válido para los ingredientes' },
    { input: contenido, regex: /^(\d+\s*(g|ml)(\s*\.)?)$/i, mensaje: 'Ingresa el contenido del producto y su unidad (g o ml)' },
    { input: tipoDePiel, validarTipoPiel: true, mensaje: 'Por favor, elija un tipo de piel'},
    { input: stock, regex: /^\d{1,7}$/, mensaje: 'El stock solo debe contener números' }
];

// Agregando el evento submit a nuestro form 
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validarFormulario()) {
        mostrarFormularioEnviado();
        imprimirJSON();
    }
});

// Agregar eventos de escucha a los campos de entrada para validar cuando se pierde el foco (evento blur) de cada input
campos.forEach(campo => {
    if(campo.input !== tipoDePiel)
        campo.input.addEventListener('blur', () => validarCampo(campo));
});

const validarCampo = ({ input, regex, mensaje }) => {
    
    const valor = input.value.trim();

    if (!regex.test(valor)) {
        noValidado(input, mensaje);
    } else {
        siValidado(input);
    }
};

// Función para validar el formulario 
const validarFormulario = () => {
    let valido = true;

// Ciclo para validar un campo cuando se pierde el foco
    for (const campo of campos) {
        if (campo.validarTipoPiel) {
            if (campo.input.value.trim() === "Elija un tipo de piel") {
                noValidado(campo.input, campo.mensaje);
                valido = false;
            } else {
                siValidado(campo.input);
            }
        } else {
            const valor = campo.input.value.trim();
            if (!campo.regex.test(valor)) {
                noValidado(campo.input, campo.mensaje);
                valido = false;
            } else {
                siValidado(campo.input);
            }
        }
    }
    return valido;
}

// Función de noValidado que toma como parametros el input de nuestro campo y un mensaje
const noValidado = (input, mensaje) => {
    const formControl = input.parentElement;
    
    // Verificar si ya hay un aviso
    const aviso = formControl.querySelector('p.alert', 'p.alert-danger');
    if (!aviso) {
        const nuevoAviso = document.createElement("p");
        nuevoAviso.innerText = mensaje;
        nuevoAviso.classList.add('alert', 'alert-danger');
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

// Funcion para mostrar mensaje de formulario enviado
const mostrarFormularioEnviado = () => {
    const formularioEnviado = document.getElementById("formularioEnviado");
    formularioEnviado.style.display = "block";
};

// Funcion para crear e imprimir nuevo objeto a partir de la informacion en el formulario
const imprimirJSON = () => {

    const nombreValor = nombre.value.trim();
    const imagenValor = img.value.trim();
    const precioValor = precio.value.trim();
    const descripcionValor = descripcion.value.trim();
    const ingredientesValor = ingredientes.value.trim();
    const contenidoValor = contenido.value.trim();
    const tipoDePielValor = tipoDePiel.value.trim();
    const stockValor = stock.value.trim();
    
        const nuevoProducto = {
            // Falta como agregar el atributo id_producto al nuevo objeto
            "nombre": nombreValor,
            "img": imagenValor,
            "precio": `$ ${precioValor}.00`,
            "descripcion": descripcionValor,
            "ingredientes": ingredientesValor,
            "contenido": contenidoValor,
            "tipoDePiel": tipoDePielValor,
            "stock" : stockValor
        };
    
        //para mostar el nuevo producto creado en la consola 
        console.log("El objeto nuevo creado es ", nuevoProducto)
        
        listaProductos.push(nuevoProducto);
    
        //para comprobar que se ha agregado el nuevo producto al array imprimimos en consola
        console.log(listaProductos); //12 objetos
    }