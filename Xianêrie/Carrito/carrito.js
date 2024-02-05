document.addEventListener('DOMContentLoaded', function () {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedorProductos = document.getElementById('productosCarrito');
    
    // Bucle forEach para mostrar los productos en el carrito
    carrito.forEach(producto => {
      const nuevoElemento = document.createElement('div');
      nuevoElemento.classList.add('producto-en-carrito');
      nuevoElemento.innerHTML = `
      <!-- Estructura HTML de cada producto -->
      <div class="item-producto">
        <div class="img"> <img src="${producto.img}" alt="${producto.id_producto}" class="img"></div>
        <div>
            <div class="texto"><h4>${producto.nombre}</h4></div>
            <div class="precio">$${producto.precio}.00</div> <br>
            <div class="bttn">
                <button class="button-eliminar btn--solidbk" onclick="eliminarProducto(${producto.id_producto})">Eliminar del carrito</button>
            </div>
            
        </div>
      </div>
      <div class="linea"></div>
    `;
      contenedorProductos.appendChild(nuevoElemento);
    });

     // Calcular y mostrar el total solo si hay productos en el carrito
     if (carrito.length > 0) {
      // Calcular la suma de los precios de los productos en el carrito
      const totalPrecio = carrito.reduce((total, producto) => total + parseFloat(producto.precio), 0);

      // Crear un elemento div para mostrar el total
      const totalElemento = document.getElementById('total');
      totalElemento.innerText = `Total: $${totalPrecio.toFixed(2)}`; // toFixed(2) para mostrar dos decimales
  }
});

  // Función para eliminar un producto del carrito
function eliminarProducto(idProducto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Filtrar el carrito para excluir el producto con el id_producto dado
    carrito = carrito.filter(producto => producto.id_producto !== idProducto);
    
    // Actualizar el carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Volver a cargar la página o actualizar la lista de productos en el carrito según sea necesario
    location.reload();
  }