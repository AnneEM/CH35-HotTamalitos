document.addEventListener('DOMContentLoaded', function () {
  const carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
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
    // Insertamos el total en su div
    const totalElemento = document.getElementById('total');
    totalElemento.innerHTML = `<h5>Total: $${totalPrecio.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h4>`;
  }
  calcularTotal();




  // Función para eliminar un producto del carrito
  function eliminarProducto(idProducto) {

    let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
    carrito = carrito.filter(producto => producto.id_producto !== idProducto);
    sessionStorage.setItem('carrito', JSON.stringify(carrito));

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

      // Actualizar el sessionStorage
      sessionStorage.setItem('carrito', JSON.stringify(carrito));
    }
    calcularTotal();
  }

  // Función para decrementar la cantidad de un producto en el carrito
  function contadorMenos(idProducto) {
    const contadorProducto = document.getElementById(`contador-${idProducto}`);
    //const carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
    const producto = carrito.find(item => item.id_producto === idProducto);

    if (producto) {

      Object.assign(producto, { cantidad: Math.max((producto.cantidad || 0) - 1, 0) });
      contadorProducto.innerText = producto.cantidad;

      if (producto.cantidad === 0) {
        eliminarProducto(idProducto);
      } else {
        sessionStorage.setItem('carrito', JSON.stringify(carrito));
      }
    }
    calcularTotal();
  }

});