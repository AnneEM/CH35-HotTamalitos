document.addEventListener('DOMContentLoaded', () => {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    const pedidos = JSON.parse(sessionStorage.getItem('pedidos'));
    const userInfo = document.getElementById('informacion')
    const userHistorial = document.getElementById('historial')

    const url = `http://localhost:8080/admin/users`

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (usuario) {
                userInfo.innerHTML = `
                <h3>Información</h3>
                <p>Nombre: ${usuario.nombre} ${usuario.apellido}</p>
                <p>Email: ${usuario.email}</p>
                <p>Teléfono: ${usuario.telefono}</p>
                `
            }
            if (pedidos) {
                pedidos.forEach(pedido => {
                    const nuevoPedido = document.createElement('div');
                    nuevoPedido.classList.add('pedidos');
                    nuevoPedido.innerHTML = `
                        <hr>
                        <h5>Pedido: #${pedido.id_pedido}</h5>
                        <div class="detallesPedido" style="display: none;">
                            <hr>
                            <p>${pedido.productosCarrito.map(producto => ` (${producto.cantidad}) ${producto.nombre}`).join('<br>')}</p>
                            <h6>Total: $${pedido.totalPrecio}.00<h6>
                        </div>
                        <button class="cafe-1 mostrarDetalles">Mostrar detalles</button>
                    `;
                    userHistorial.appendChild(nuevoPedido);
                });
                        // Boton para mostrar/ocultar detalles
                userHistorial.addEventListener('click', (event) => {
                    if (event.target.classList.contains('mostrarDetalles')) {
                        const detallesPedido = event.target.previousElementSibling; // Buscar el elemento hermano anterior
                        if (detallesPedido.style.display === 'none') {
                            detallesPedido.style.display = 'block';
                            event.target.innerText = 'Ocultar detalles';
                        } else {
                            detallesPedido.style.display = 'none';
                            event.target.innerText = 'Mostrar detalles';
                        }
                    }
                });
            }
        });



})