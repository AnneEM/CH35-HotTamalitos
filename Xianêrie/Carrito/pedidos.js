/////////////// * * * PEDIDOS * * * ///////////////
document.addEventListener('DOMContentLoaded', () => {

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


    ///// Validacion de formulario 

    const img = document.getElementById("imagenInput");
    const metodo = document.getElementById("metodoSelect");
    const formulario = document.getElementById("formulario");
    const formularioEnviado = document.getElementById("formularioEnviado");

    const campos = [
        { input: img, regex: /^.*\.(jpg|jpeg|png|gif|bmp|svg|webp)$/, mensaje: 'Formatos válidos: jpg, jpeg, png, gif, bmp, svg, webp' },
        { input: metodo, validarMetodo: true, mensaje: 'Por favor, elija un método de pago' }
    ];


    // Funciones para mostrar mensajes de validación
    const mostrarMensaje = (mensaje, tipo) => {
        formularioEnviado.style.display = 'block';

        // Eliminar cualquier aviso existente
        const avisos = formularioEnviado.querySelectorAll('.alert');
        avisos.forEach(aviso => aviso.remove());

        // Crear nuevo aviso
        const nuevoAviso = document.createElement('p');
        nuevoAviso.innerHTML = mensaje;
        nuevoAviso.classList.add('alert', `alert-${tipo}`);
        formularioEnviado.appendChild(nuevoAviso);
    };

    const validarFormulario = () => {
        let valido = true;

        for (const campo of campos) {
            const valor = campo.input.value.trim();

            if (campo.validarMetodo) {
                if (valor === 'Selecciona un método de pago') {
                    mostrarMensaje(campo.mensaje, 'danger');
                    valido = false;
                }
            } else {
                if (!campo.regex.test(valor)) {
                    mostrarMensaje(campo.mensaje, 'danger');
                    valido = false;
                }
            }
        }

        if (valido) {
            mostrarMensaje(`Tu pedido ha sido registrado y estamos verificando la transacción.<br> <a class="text-decoration-none" href="http://wa.me/525620417120"
    target="_blank" rel="noopener noreferrer">Contáctanos para gestionar la entrega. <img
      src="../assets/whatsapp.png"></a>`, 'success');
        }

        return valido;
    };

    // Crear el elemento de alerta de carrito vacío una sola vez

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const carritoVacio = JSON.parse(sessionStorage.getItem('carrito'))?.length === 0;

        // Mostrar alerta de carrito vacío si es necesario
        if (carritoVacio) {
            const alertaCarritoVacio = document.createElement("div");
            const pedidoEfectivo = document.getElementById('pedidoEfectivo');
            const formularioEnviado = document.getElementById('formularioEnviado');
            const avisos = formularioEnviado.querySelectorAll('.alert');

            alertaCarritoVacio.innerHTML = `<p class="alert alert-danger">¡Carrito vacío! Agrega productos antes de realizar el pedido.</p>`;
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
            nuevoAviso.innerHTML = `Tu pedido ha sido registrado.<br> <a class="text-decoration-none" href="http://wa.me/525620417120"
    target="_blank" rel="noopener noreferrer">Contáctanos para gestionar la entrega. <img src="../assets/whatsapp.png"></a>`;
            nuevoAviso.classList.add('alert', 'alert-success');
            const pedidoEfectivo = document.getElementById('pedidoEfectivo');
            const avisos1 = pedidoEfectivo.querySelectorAll('.alert');
            avisos1.forEach(aviso => aviso.remove());
            pedidoEfectivo.appendChild(nuevoAviso);
        }
    });


    // Generacion de objeto
    let pedidos = JSON.parse(sessionStorage.getItem('pedidos')) || [];
    let idPedido = parseInt(sessionStorage.getItem('idPedido')) || 0;

    const imprimirJSON = () => {
        const carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
        const usuario = JSON.parse(sessionStorage.getItem('usuario'));

        idPedido++;

        const nuevoPedido = {
            id_pedido: idPedido,
            id_usuario: usuario.id,
            comprobantePago: img.value,
            totalPrecio: carrito.reduce((total, producto) => total + parseFloat(producto.precio * producto.cantidad), 0),
            productosCarrito: carrito.map(producto => ({
                id_producto: producto.id_producto,
                nombre: producto.nombre,
                cantidad: producto.cantidad
            }))
        };

        pedidos.push(nuevoPedido);
        
        sessionStorage.removeItem('carrito')
        sessionStorage.setItem('idPedido', idPedido.toString());
        sessionStorage.setItem('pedidos', JSON.stringify(pedidos));

        console.log("Resumen de pedido: ", pedidos);
    }
})