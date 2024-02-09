document.addEventListener('DOMContentLoaded', function () {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const contenedorProductos = document.getElementById('productosCarrito');

  // Bucle forEach para mostrar los productos en el carrito
  carrito.forEach(producto => {

    const excepTipografia = [
      ["Revitaliza", `<span id='marca'>Revitaliza</span>`],
      ["Purifica", `<span id='marca'>Purifica</span>`],
      ["Reparación nocturna", `<br>Reparación nocturna`]
    ];

    const nuevoElemento = document.createElement('div');
    nuevoElemento.classList.add('producto-en-carrito');
    nuevoElemento.innerHTML = `
      <!-- Estructura HTML de cada producto -->
      <div class="item-producto" id="producto-${producto.id_producto}">
        <div class="img"> <img src="${producto.img}" alt="${producto.id_producto}" class="img"></div>
        <div>
            <div class="texto"><h5>${tipografia(producto.nombre, excepTipografia)}</h5></div>
            <!-- <h5>${producto.nombre}</h5> -->
            <div class="precio">$${producto.precio}.00</div>
            <div class="contador">
              <button class="button-contador decrementar">-</button>
              <span class="numeral" id="contador-${producto.id_producto}">${producto.cantidad}</span>
              <button class="button-contador incrementar">+</button>
            </div> 
            <div class="bttn">
                <button class="button-eliminar btn--solidbk" data-id="${producto.id_producto}">Eliminar</button>
            </div>
            
        </div>
      </div>
      <div class="linea"></div>
    `;

    function tipografia(nombre, excepciones) {
      for (const excepcion of excepciones) {
        if (nombre.includes(excepcion[0])) {
          nombre = nombre.replace(excepcion[0], excepcion[1])
        }
      }
      return nombre;
    }

    contenedorProductos.appendChild(nuevoElemento);

    // Seleccionar los botones después de agregar los elementos al DOM
    const decrementarButton = nuevoElemento.querySelector('.button-contador.decrementar');
    const incrementarButton = nuevoElemento.querySelector('.button-contador.incrementar');

    decrementarButton.addEventListener('click', () => contadorMenos(producto.id_producto));
    incrementarButton.addEventListener('click', () => contadorMas(producto.id_producto));
  });

  // Definir una función para calcular y actualizar el precio total
  function calcularTotal() {
    // Calcular la suma de los precios de los productos en el carrito
    const totalPrecio = carrito.reduce((total, producto) => total + parseFloat(producto.precio * producto.cantidad), 0);
    // Crear un elemento div para mostrar el total
    const totalElemento = document.getElementById('total');
    totalElemento.innerHTML = `<h5>Total: $${totalPrecio.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h4>`;

  }
  calcularTotal();




  // Función para eliminar un producto del carrito
  function eliminarProducto(idProducto) {

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(producto => producto.id_producto !== idProducto);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    const elementoAEliminar = document.getElementById(`producto-${idProducto}`);
    if (elementoAEliminar) {
      elementoAEliminar.remove();
    }
  }

  contenedorProductos.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('button-eliminar')) {
      const idProducto = parseInt(target.getAttribute('data-id'));
      eliminarProducto(idProducto);
      location.reload()
    }
  });

  // Función para incrementar la cantidad de un producto en el carrito
  function contadorMas(idProducto) {
    const contadorProducto = document.getElementById(`contador-${idProducto}`);
    const producto = carrito.find(item => item.id_producto === idProducto);

    if (producto) {
      // Object.assing agrega la propiedad 'cantidad'
      Object.assign(producto, { cantidad: (producto.cantidad || 0) + 1 });
      contadorProducto.innerText = producto.cantidad;

      // Actualizar el localStorage
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
    calcularTotal();
  }

  // Función para decrementar la cantidad de un producto en el carrito
  function contadorMenos(idProducto) {
    const contadorProducto = document.getElementById(`contador-${idProducto}`);
    //const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = carrito.find(item => item.id_producto === idProducto);

    if (producto) {

      Object.assign(producto, { cantidad: Math.max((producto.cantidad || 0) - 1, 0) });
      contadorProducto.innerText = producto.cantidad;

      if (producto.cantidad === 0) {
        eliminarProducto(idProducto);
      } else {
        localStorage.setItem('carrito', JSON.stringify(carrito));
      }
    }
    calcularTotal();
  }


  /////////////// * * * Método de pago * * * ///////////////

  const metodoPagoSelect = document.querySelector('select[name="metodo"]');
  const efectivoContenedor = document.getElementById('efectivo');
  const transferenciaContenedor = document.getElementById('transferencia');

  // Agregar un event listener al cambio en el select
  metodoPagoSelect.addEventListener('change', function () {
    efectivoContenedor.style.display = 'none';
    transferenciaContenedor.style.display = 'none';

    // Mostrar el div correspondiente a la opción seleccionada
    if (metodoPagoSelect.value === 'efectivo') {
      efectivoContenedor.style.display = 'block';
    } else if (metodoPagoSelect.value === 'transferencia') {
      transferenciaContenedor.style.display = 'block';
    }
    const avisos = [
      ...formularioEnviado.querySelectorAll('.alert'),
      ...document.getElementById('pedidoEfectivo').querySelectorAll('.alert')
    ];

    avisos.forEach(aviso => aviso.remove());
  });




  const img = document.getElementById("imagenInput");
  const metodo = document.getElementById("metodoSelect");
  const formulario = document.getElementById("formulario");
  const formularioEnviado = document.getElementById("formularioEnviado");

  const campos = [
    { input: img, regex: /^.*\.(jpg|jpeg|png|gif|bmp|svg|webp)$/, mensaje: 'Formatos válidos: jpg, jpeg, png, gif, bmp, svg, webp' },
    { input: metodo, validarMetodo: true, mensaje: 'Por favor, elija un método de pago' }
  ];


  // Funciones para validar el formulario 
  const validarFormulario = () => {
    let valido = true;

    for (const campo of campos) {
      const valor = campo.input.value.trim();

      if (campo.validarMetodo) {
        if (valor === 'Selecciona un método de pago') {
          noValidado(campo.mensaje);
          valido = false;
        }
      } else {
        if (!campo.regex.test(valor)) {
          noValidado(campo.mensaje);
          valido = false;
        }
      }
    }
    if (valido) {
      siValidado();
    }
    return valido;
  };
  const noValidado = (mensaje) => {
    formularioEnviado.style.display = "block";
    // Eliminar cualquier aviso existente
    const avisos = formularioEnviado.querySelectorAll('.alert');
    avisos.forEach(aviso => aviso.remove());

    const nuevoAviso = document.createElement("p");
    nuevoAviso.innerText = mensaje;
    nuevoAviso.classList.add('alert', 'alert-danger');
    formularioEnviado.appendChild(nuevoAviso);
  };
  const siValidado = () => {
    formularioEnviado.style.display = "block";
    // Eliminar cualquier aviso existente
    const avisos = formularioEnviado.querySelectorAll('.alert');
    avisos.forEach(aviso => aviso.remove());

    const nuevoAviso = document.createElement("p");
    nuevoAviso.innerHTML = `Tu pedido ha sido registrado y estamos verificando la transacción.<br> <a class="text-decoration-none" href="http://wa.me/525620417120"
    target="_blank" rel="noopener noreferrer">Contáctanos para gestionar la entrega. <img
      src="../assets/whatsapp.png"></a>`;
    nuevoAviso.classList.add('alert', 'alert-success');
    formularioEnviado.appendChild(nuevoAviso);
  };

// Crear el elemento de alerta de carrito vacío una sola vez

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const carritoVacio = JSON.parse(localStorage.getItem('carrito'))?.length === 0;

  // Mostrar alerta de carrito vacío si es necesario
  if (carritoVacio) {
    const alertaCarritoVacio = document.createElement("div");
    alertaCarritoVacio.innerHTML = `<p class="alert alert-danger">¡Carrito vacío! Agrega productos antes de realizar el pedido.</p>`;
    const pedidoEfectivo = document.getElementById('pedidoEfectivo');
    const formularioEnviado = document.getElementById('formularioEnviado');
    const avisos = formularioEnviado.querySelectorAll('.alert');
    avisos.forEach(aviso => aviso.remove());
    const avisos1 = pedidoEfectivo.querySelectorAll('.alert');
    avisos1.forEach(aviso => aviso.remove());
    
    // Agregar la alerta solo si no está presente
    if (pedidoEfectivo && !pedidoEfectivo.contains(alertaCarritoVacio)) {
      pedidoEfectivo.appendChild(alertaCarritoVacio.cloneNode(true));
    }
    if (formularioEnviado && !formularioEnviado.contains(alertaCarritoVacio)) {
      formularioEnviado.appendChild(alertaCarritoVacio.cloneNode(true));
    }
    return;
  }

  const submitButton = e.submitter;  // Obtener el botón que inició el evento

  if (submitButton.id === 'btnTransferencia' && validarFormulario()) {
    imprimirJSON();
  } else if (submitButton.id === 'btnEfectivo') {
    imprimirJSON();
    const nuevoAviso = document.createElement("p");
    nuevoAviso.innerHTML = `Tu pedido No. ${nuevoPedido.id_pedido} ha sido registrado.<br> <a class="text-decoration-none" href="http://wa.me/525620417120"
    target="_blank" rel="noopener noreferrer">Contáctanos para gestionar la entrega. <img src="../assets/whatsapp.png"></a>`;
    nuevoAviso.classList.add('alert', 'alert-success');
    const pedidoEfectivo = document.getElementById('pedidoEfectivo');
    const avisos1 = pedidoEfectivo.querySelectorAll('.alert');
    avisos1.forEach(aviso => aviso.remove());
    pedidoEfectivo.appendChild(nuevoAviso);
  }
});




  let nuevoPedido;
  // Generacion de objeto
  const imprimirJSON = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const id_pedido = Math.floor(Math.random() * 1000) + 1;
    const id_usuario = Math.floor(Math.random() * 1000) + 1;
    const totalPrecio = carrito.reduce((total, producto) => total + parseFloat(producto.precio * producto.cantidad), 0);
    const imagenInput = img.value;
    const productosCarrito = carrito.map(producto => {
      return {
        id_producto: producto.id_producto,
        cantidad: producto.cantidad
      };
    });

    nuevoPedido = {
      id_pedido: id_pedido,
      id_usuario: id_usuario,
      comprobantePago: imagenInput,
      totalPrecio: totalPrecio,
      productosCarrito: productosCarrito,
    };
    console.log("Resumen de pedido: ", nuevoPedido);
  }

});