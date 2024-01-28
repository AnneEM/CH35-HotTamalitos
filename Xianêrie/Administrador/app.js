window.addEventListener('load', () =>{
    const formulario = document.getElementById("formularioNuevoProducto");
    const nombre = document.getElementById("productoInput");
    const img = document.getElementById("imagenInput"); //checar lo de la ruta de la imagen 
    const precio = document.getElementById("precioInput");
    const descripcion = document.getElementById("descripcionInput");
    const ingredientes = document.getElementById("ingredientesInput");
    const contenido = document.getElementById("cantidadInput");
    const tipoDePiel = document.getElementById("pielSelect");
    
    
    //Agregando el evento submit a nuestro form 
    formulario.addEventListener('submit', (e) =>{
        e.preventDefault();
        validacionProducto();
        
    });
    
    
    //Función para validar el formulario 
    const validacionProducto = () => {
        const nombreValor = document.getElementById("productoInput").value.trim();
        const imgValor = document.getElementById("imagenInput").valor; //checar lo de la ruta de la imagen 
        const precioValor = document.getElementById("precioInput").value.trim();
        const descripcionValor = document.getElementById("descripcionInput").value.trim();
        const ingredientesValor = document.getElementById("ingredientesInput").value.trim();
        const contenidoValor = document.getElementById("cantidadInput").value.trim();
        const tipoDePielValor = document.getElementById("pielSelect").value.trim();
    
        //validando el input de nombre
        if(!nombreValor){
            console.log('campo vacío');
            noValidado(nombre, 'Campo vacío');
            }else{
                console.log(nombreValor);
                siValidado(nombre);
            }
    
            //validando el input de imagen
    
            //validando el input de precio
    
        //Para crear un objeto tipo JSON 
        const nuevoProducto = {
            "nombre": nombreValor,
            "img": imgValor, // Puedes agregar lógica para manejar archivos de imagen si es necesario
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
    
    
        }//funcion validacionProducto 
    
    
    //Estas funciones que se ocupan para validar el formulario van al ultimo y no deben ir dentro de la función validar formulario
    //Función de noValidado que toma como parametros el imput de nuestro campo yun mensaje de 'campo vacío'
    const noValidado = (input, mensaje) => {
            const formControl = input.parentElement
            const aviso = formControl.querySelector("p");
            aviso.innerText = mensaje;
            formControl.className = 'form-control no'
        }
    
    //Función de siValidado que toma como parametro el imput de nuestro campo
    const siValidado = (input) => {
        const formControl = input.parentElement
        formControl.className = 'form-control si' //asignamos una clase para darle estilos en css y marcar el input
    }
    });
    