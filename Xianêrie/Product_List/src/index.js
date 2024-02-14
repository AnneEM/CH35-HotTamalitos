// Función para cargar y mostrar navbar
function navBar() {
    // Ruta al archivo HTML que deseas cargar
    const rutaNavbar = '../NavBar/navbar.html';
  
    // Realizar la solicitud para obtener el contenido del archivo
    fetch(rutaNavbar)
      .then(response => {
        // Verificar si la solicitud fue exitosa (código de estado 200)
        if (!response.ok) {
          throw new Error('No se pudo cargar la navBar.');
        }
        // Devolver el contenido del archivo HTML como texto
        return response.text();
      })
      .then(htmlText => {
        // Actualizar el contenido de un elemento en tu página (por ejemplo, un div con el ID 'contenedor')
        document.getElementById('navBar1').innerHTML = htmlText;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Llamar a la función cuando sea necesario (por ejemplo, cuando se carga la página)
  document.addEventListener('DOMContentLoaded', navBar);



  // Función para cargar y mostrar Footer
function Footer() {
    // Ruta al archivo HTML que deseas cargar
    const rutafooter = '../Footer/index.html';
  
    // Realizar la solicitud para obtener el contenido del archivo
    fetch(rutafooter)
      .then(response => {
        // Verificar si la solicitud fue exitosa (código de estado 200)
        if (!response.ok) {
          throw new Error('No se pudo cargar el Footer.');
        }
        // Devolver el contenido del archivo HTML como texto
        return response.text();
      })
      .then(htmlText => {
        // Actualizar el contenido de un elemento en tu página (por ejemplo, un div con el ID 'contenedor')
        document.getElementById('footer1').innerHTML = htmlText;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Llamar a la función cuando sea necesario (por ejemplo, cuando se carga la página)
  document.addEventListener('DOMContentLoaded', Footer);