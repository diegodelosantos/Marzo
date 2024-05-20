window.onload = function(){
    var Centro = localStorage.getItem('Centro')
    console.log(Centro)
    let Fecha = document.getElementById("Fechas")
    console.log(Fecha)

    Fecha.addEventListener('change', function() {
        console.log(Fecha.value);
    });

    conseguirDatos()
}

function conseguirDatos() {
        fetch("consulta.php")
          .then((response) => response.json())
          .then((data) => {
            let Centro = Centro.value
            let Fecha = Fecha.value
      
            tratarDatos(data, Centro, Fecha);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }

      function tratarDatos(data, Centro, Fecha) {
        let tabla = document.getElementById("TablaProvincia"); // Obtener la tabla
        tabla.hidden = false; // Mostrar la tabla
        let tbody = document.getElementById("tbody"); // Seleccionar el tbody
        tbody.innerHTML = ""; // Limpiar el contenido actual
      
        data.forEach((registro) => {
          // Iterar sobre los registros
          if (
            (Fecha === "" || registro.Fecha === Fecha) &&
            (autor === "" || registro.autor === autor) &&
            (anio === "" || registro.anio_publicacion === anio) &&
            (genero === "" || registro.genero === genero)
          ) {
            // Crear celdas
            let fila = document.createElement("tr");
            let celda1 = document.createElement("td");
            let celda2 = document.createElement("td");
            let celda3 = document.createElement("td");
            let celda4 = document.createElement("td");
            let celda5 = document.createElement("td");
            let boton = document.createElement("button");
            boton.id = "boton";
            boton.textContent = "Ver"; // Corregido: usar textContent en lugar de append
            boton.addEventListener("click", function () {
              crearImagen(registro); // Imagen del registro (libro)
            });
            celda5.appendChild(boton); // Corregido: usar appendChild en lugar de append
      
            celda1.textContent = registro.Fecha; // En la celda 1 poner el título del registro
            celda2.textContent = registro.autor; // En la celda 2 poner el autor del registro
            celda3.textContent = registro.anio_publicacion; // En la celda 3 poner el año de publicación del registro
            celda4.textContent = registro.genero; // En la celda 4 poner el género del registro
            fila.appendChild(celda1); // Añadir celdas a la fila
            fila.appendChild(celda2);
            fila.appendChild(celda3);
            fila.appendChild(celda4);
            fila.appendChild(celda5);
      
            tbody.appendChild(fila); // Añadir fila al tbody
          }
        })
    }