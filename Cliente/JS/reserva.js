window.onload = function() {
  var Centro = localStorage.getItem('Centro');
  console.log("Centro:", Centro);
  
  let Fecha = document.getElementById("Fechas");
  console.log("Fecha element:", Fecha);
  
  if (!Fecha) {
      console.error("El elemento 'Fechas' no se encontró en el DOM.");
      return;
  }

  Fecha.addEventListener('change', function() {
      console.log("Fecha seleccionada:", Fecha.value);
      tratarDatos(Centro, Fecha.value);
  });
};

function tratarDatos(Centro, Fecha) {
  let url = `consulta.php?Centro=${encodeURIComponent(Centro)}&Fecha=${encodeURIComponent(Fecha)}`;
  console.log("URL de la consulta:", url);

  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('Error en la respuesta de la red');
          }
          return response.json();
      })
      .then(data => {
          let tabla = document.getElementById("TablaHoras");
          if (!tabla) {
              console.error("La tabla no existe en el DOM.");
              return;
          }
          tabla.hidden = false;

          let tbody = document.getElementById("tbody");
          if (!tbody) {
              console.error("El tbody no existe en el DOM.");
              return;
          }
          tbody.innerHTML = "";

          data.forEach((registro) => {
              let fila = document.createElement("tr");
              let celda1 = document.createElement("td");
              let celda2 = document.createElement("td");
              let celda3 = document.createElement("td");
              let celda4 = document.createElement("td");
              let celda5 = document.createElement("td");
              let boton = document.createElement("button");
              boton.id = "boton";
              boton.textContent = "Ver";
              boton.addEventListener("click", function () {
                  crearImagen(registro);
              });
              celda5.appendChild(boton);

              celda1.textContent = registro.Dia;
              celda2.textContent = registro.Hora;
              celda3.textContent = registro.Centro;
              celda4.textContent = registro.Cliente;
              fila.appendChild(celda1);
              fila.appendChild(celda2);
              fila.appendChild(celda3);
              fila.appendChild(celda4);
              fila.appendChild(celda5);

              tbody.appendChild(fila);
          });
      })
      .catch(error => console.error('Error:', error));
}
