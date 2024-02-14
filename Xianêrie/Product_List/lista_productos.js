const listaProductos = [
  {
    "id_producto": 1,
    "nombre": "Limpiador facial",
    "img": "../Product_List/src/assets/pr1_jabon_facial.png",
    "precio": 230,
    "descripcion": "Es ideal para todo tipo de piel. Limpia profundamente tu rostro sin resevarlo, manteniendo su función de barrera protectora.",
    "ingredientes": "Decil glucosido, caprilato de poliglicerilo, cocoglucosido, oleato de glicerilo, extracto de aloe vera (Aloe barbadensis miller), urea, glicerina, agua de Hamamelis, agua destilada, benzoato de sodio.",
    "contenido": "80 ml.",
    "tipoDePiel": "Todo tipo de piel",
    "stock": 35
  },
  {
    "id_producto": 2,
    "nombre": "Exfoliante",
    "img": "../Product_List/src/assets/pr2_exfoliante_facial.png",
    "precio": 180,
    "descripcion": "Exfolia suavemente tu piel sin dañarla, contiene micropartículas esféricas biodegradables..",
    "ingredientes": "Agua destilada, aceite vegetal (Helianthus annuus), alcohol cetearílico, urea, propilenglicol, pantenol (Provitamina B5), dimeticona, cáscara de nuez en polvo, diestearato de glicol, carbón activado, polisorbato 20, fenoxietanol, sorbato de potasio.",
    "contenido": "30g.",
    "tipoDePiel": "Todo tipo de piel",
    "stock": 35
  },
  {
    "id_producto": 3,
    "nombre": "Mascarilla hidratante",
    "img": "../Product_List/src/assets/pr3_mascarilla_hidratante.png",
    "precio": 250,
    "descripcion": "Contiene ingredientes naturales como miel orgánica al 15%, que junto con el ácido hialurónico fortalecerá e hidratará tu piel.",
    "ingredientes": "Agua destilada de rosas, (Aloe barbadensis miller), miel, glicerina, dexpantenol, agua destilada, pentilenglicol, urea, serina, trehalosa, poliacrilato de glicerilo, caprilil glicol, ácido hialurónico, alginato de sodio, pululano, fosfato disódico, fosfato de potasio, benzoato de sodio.",
    "contenido": "30g.",
    "tipoDePiel": "Todo tipo de piel",
    "stock": 35
  },
  {
    "id_producto": 4,
    "nombre": "Sérum Revitaliza",
    "img": "../Product_List/src/assets/pr4_serum_revitaliza.png",
    "precio": 500,
    "descripcion": "Formulado para pieles que han sufrido estragos por el tiempo. El sérum Revitaliza contiene ingredientes eficaces en la reparación intensa de la piel.",
    "ingredientes": "Agua destilada, acetil tetrapeptido 9 y 11, extracto de argan (Argania spinosa), dexpantenol (provitamina B5), polisorbato 20, glicerina, alginato, pentilenglicol, urea, serina, trehalosą, poliacrilato de glicerina, caprilil glicol, ácido hialurónico, fenoxietanol.",
    "contenido": "30 ml.",
    "tipoDePiel": "Piel seca",
    "stock": 35
  },
  {
    "id_producto": 5,
    "nombre": "Sérum Revitaliza Reparación nocturna",
    "img": "../Product_List/src/assets/pr5_serum_revitaliza_noctuno.png",
    "precio": 600,
    "descripcion": "Formulado para la reparación nocturna intensive en la piel que ha sufrido estragos por el tiempo.",
    "ingredientes": "Agua destilada, acetil tetrapeptido 9 y 11, extracto de semilla de Makti (Vigna aconitifoilia), dexpantenol (provitamina B5), polisorbato 20, glicerina, alginato, pentilenglicol, urea, serina, trehalosa, poliacrilato de glicerina, caprilil glicol, ácido hialurónico, fenoxietanol.",
    "contenido": "30 ml.",
    "tipoDePiel": "Piel seca",
    "stock": 35
  },
  {
    "id_producto": 6,
    "nombre": "Crema facial Revitaliza",
    "img": "../Product_List/src/assets/pr6_crema_facial_revitaliza.png",
    "precio": 580,
    "descripcion": "Revitaliza tu piel y disminuye los signos de la edad utilizando la crema facial.",
    "ingredientes": "Agua destiladą, glicerina, extracto de harina de avena sativa, dexpantenol (provitamina B5), aceite mineral, palmitato de isopropilo, acetil tetrapétido 9 y 11, aceite de rosa mosqueta (Rosa eglanteria), ácido esteárico, monoestearato de glicerilo, polisorbato 20, alcohol cetílico, trietanolamina, escualeno, diazolidinilureą metilparabeno, propilparabeno, fragancia, carbómero, pentilenglicol, urea, serina, trehalosa, poliacrilato de glicerilo, caprilil glicol, ácido hialurónico, alginato de sodio, pululano, fosfato disódico, fosfato de potasio, benzoato de sodio BHT, EDTA.",
    "contenido": "50 g.",
    "tipoDePiel": "Piel seca",
    "stock": 35
  },
  {
    "id_producto": 7,
    "nombre": "Contorno de ojos",
    "img": "../Product_List/src/assets/pr7_contorno_ojos.png",
    "precio": 250,
    "descripcion": "Mantén tu mirada joven, fresca y radiante utilizando el contorno de ojos de Xanêrie.",
    "ingredientes": "Agua destilada, glicerina, extracto de harina de avena sativa, dexpantenol (provitamina B5), aceite de rosa mosqueta (Rosa eglanteria), aceite mineral, palmitato de isopropilo, extracto de fucus (Fucus vesiculosus), ácido esteárico, monoestearato de glicerilo, polisorbato 20, alcohol cetílico, trietanolamina, escualeno, diazolidinilureą, metilparabeno, propilparabeno, fragancia, carbómero, pentilenglicol, urea, serina, trehalosą, poliacrilato de glicerilo, caprilil glicol, ácido hialurónico, alginato de sodio, pululano, fosfato disódico, fosfato de potasio, benzoato de sodio BHT, EDTA.",
    "contenido": "10 g.",
    "tipoDePiel": "Piel seca",
    "stock": 35
  },
  {
    "id_producto": 8,
    "nombre": "Tónico facial",
    "img": "../Product_List/src/assets/pr8_Tonico_facial.png",
    "precio": 200,
    "descripcion": "Tonifica la piel sin resecarla. Refresca tu piel e incorpora antioxidantes en tu rutina con el tónico facial de Xanêrie.",
    "ingredientes": "Destilado de Hamamelis virginiana, destilado de agua de rosas, extracto de argán (Argania spinosa), glicerina, dexpantenol (provitamina B5), benzoato de sodio.",
    "contenido": "80 ml.",
    "tipoDePiel": "Piel Mixta / Grasa",
    "stock": 35
  },
  {
    "id_producto": 9,
    "nombre": "Sérum Purifica",
    "img": "../Product_List/src/assets/pr9_Purifica_serum.png",
    "precio": 450,
    "descripcion": "Ideal para piel mixta- grasa. Contiene ingredientes naturales cuyos beneficios han sido evaluados <em>in vitro.</em>",
    "ingredientes": "Agua destilada, extracto de boldo (Peumus boldus), extracto de argán (Argania spinosa), glicerina, alginata, pentilenglicol, urea, serina, trehalosa, poliacrilato de glicerina, caprilil glicol, ácido hialurónico, pantenol (provitamina 85), polisorbato 20, fenoxietanol.",
    "contenido": "30 ml.",
    "tipoDePiel": "Piel Mixta / Grasa",
    "stock": 35
  },
  {
    "id_producto": 10,
    "nombre": "Sérum Purifica Reparación nocturna",
    "img": "../Product_List/src/assets/pr10_serum_purifica_nocturno.png",
    "precio": 450,
    "descripcion": "Repara tu piel intensamente durante la noche, contiene ingredientes naturales que ayudan a restaurar la piel mixta grasa.",
    "ingredientes": "Agua destilada, pantenol (provitamina 85), extracto de boldo (Peumus baldus), extracto de semilla de makti (Vigna acontifolia), glicerina, alginato, pentilenglicol, urea, serina, trehalosa, pollacrilato de glicerina, caprilil glicol, hialuronato de sodio, propilenglicol, PEG-4, agar, acetato de tocoferol, alginata, polisarbato 20, BHT, quitosano, ácido glicólica, etilhexilglicerina, fenoxietanol.",
    "contenido": "30 ml.",
    "tipoDePiel": "Piel Mixta / Grasa",
    "stock": 35
  },
  {
    "id_producto": 11,
    "nombre": "Crema facial Purifica",
    "img": "../Product_List/src/assets/pr11_crema_facial_purifica.png",
    "precio": 450,
    "descripcion": "Desarrollada para piel mixta-grasa, humecta e hidrata tu piel sin dejar sensación grasa.",
    "ingredientes": "Agua destilada, glicerina, extracto de harina de avena sativa, extracto de boldo (Peumus Boldus), extracto de semilla de makti (Vigna aconitifolia), dexpantenol (provitamina B5), aceite mineral, palmitato de isopropilo, ácido esteárico, monoestearato de glicerilo, polisorbato 20, alcohol cetilico, trietanolamina, escualeno, diazolidinilurea, metilparabeno, propilparabeno, fragancia, carbómero, pentilenglicol, urea, serina, trehalosa, poliacrilato de glicerilo, caprilil glicol, ácido hialurónico, alginato de sodio, pululano, fosfato disódico, fosfato de potasio, benzoato de sodio BHT, EDTA.",
    "contenido": "50 g",
    "tipoDePiel": "Piel Mixta / Grasa",
    "stock": 35
  }
]

// Crea contenedores para cada tipo de piel
const contenedoresPorTipo = {};
document.querySelectorAll('.grid-tipo-piel a').forEach(enlace => {
  const tipoDePiel = enlace.textContent.trim();
  const idTipoDePiel = enlace.getAttribute('href').substring(1); // Obtener el id_producto del enlace
  contenedoresPorTipo[tipoDePiel] = document.getElementById(idTipoDePiel);
});

// CICLO forEach para adoptar la estructura HTML
listaProductos.forEach(producto => {
  const tipoDePiel = producto.tipoDePiel;
  const contenedor = contenedoresPorTipo[tipoDePiel];

  if (contenedor) {
    const nuevoElemento = document.createElement('div');
    nuevoElemento.classList.add('producto');

    const excepTipografia = [
      ["Revitaliza", `<span id='marca'>Revitaliza</span>`],
      ["Purifica", `<span id='marca'>Purifica</span>`],
      ["Reparación nocturna", `<br>Reparación nocturna`]
    ];

    //Condicional para formato izq-der
    const itemProducto = producto.id_producto % 2 !== 0 ? 'item-producto' : 'item-producto-2';
    /* Estructura HTML de los productos */
    nuevoElemento.innerHTML = `
    <div class="${itemProducto}">
      <div class="img"> <img src="${producto.img}" alt="producto1" class="img"></div>
      <div class="texto">
        <h3>${tipografia(producto.nombre, excepTipografia)}</h3>
        <!-- <h3>${producto.nombre}</h3> -->
        <p>${producto.descripcion}<br>
        <h6>Ingredientes:</h6>${producto.ingredientes}<br>${producto.contenido}</p>
      </div>
      <div class="precio">$${producto.precio}.00</div>
      <div class="bttn">
        <button type="button" class="button-carrito btn--solidbk" data-id="${producto.id_producto}">
          Agregar al carrito
        </button>
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

    contenedor.appendChild(nuevoElemento);
  }
});

// Funcion para agregar al Carrito mediante sessionStorage
const botonesCarrito = document.querySelectorAll('.button-carrito');
botonesCarrito.forEach(boton => {
  boton.addEventListener('click', () => {
    const idProducto = parseInt(boton.getAttribute('data-id'));
    agregarAlCarrito(idProducto);
  });
});


function agregarAlCarrito(idProducto) {
  const producto = listaProductos.find(producto => producto.id_producto === idProducto);

  if (producto) {
    // Recupera el carrito actual desde sessionStorage o crea uno nuevo
    const carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];

    // Verificar si el producto ya está en el carrito
    const productoEnCarrito = carrito.find(producto => producto.id_producto === idProducto);

    if (productoEnCarrito) {
      // Si el producto ya está en el carrito, incrementa la cantidad
      productoEnCarrito.cantidad = (productoEnCarrito.cantidad || 0) + 1;
    } else {
      // ...producto : crea una copia del objeto producto y agrega la propiedad cantidad = 1 
      carrito.push({ ...producto, cantidad: 1 });
    }
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto agregado al carrito');
  }
}