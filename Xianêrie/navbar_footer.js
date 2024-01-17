// Función para cargar y mostrar la navbar
  document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos el contenedor donde se insertará la Navbar
    const contenedorNavbar = document.getElementById('navBar1');

    // Ruta del archivo del navbar
    const rutaNavbar = '../NavBar/navbar.html';

    // Cargar contenido del navbar
    fetch(rutaNavbar)
        .then(response => response.text())
        .then(htmlText => {
            // Inserta el HTML del Navbar en el contenedor
            contenedorNavbar.innerHTML = htmlText;

            // Importamos java.js despues de cargar el navbar
            const scriptJava = document.createElement('script');
            scriptJava.src = '../Navbar/java.js';
            document.body.appendChild(scriptJava);
        })
        .catch(error => console.error('Error al cargar la Navbar:', error));
});

// * * * * * * * * * * * * * * * * * * * *

// Función para cargar y mostrar el footer
document.addEventListener('DOMContentLoaded', function() {
  // Obtenemos el contenedor donde se insertará el footer
  const contenedorFooter = document.getElementById('footer1');

  // Ruta del archivo del footer
  const rutaFooter = '../Footer/index.html';

  // Cargar contenido del footer
  fetch(rutaFooter)
      .then(response => response.text())
      .then(htmlText => {
          // Inserta el HTML del footer en el contenedor
          contenedorFooter.innerHTML = htmlText;
      })
      .catch(error => console.error('Error al cargar el Footer:', error));
});