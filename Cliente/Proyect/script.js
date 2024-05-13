window.onload = function () {
    // var leftPane = document.createElement('div');
    // leftPane.id = 'leftPane';
    // var rightPane = document.createElement('div');
    // rightPane.id = 'rightPane';

    // // Estilos para los divs
    // leftPane.style.width = '100%'; // El 50% del ancho de la pantalla
    // leftPane.style.height = '100vh'; // El 100% de la altura de la ventana
    // leftPane.style.float = 'left'; // Alinear a la izquierda
    // leftPane.style.boxSizing = 'border-box'; // Considerar el borde y el relleno en el ancho total
    // leftPane.style.border = '0px solid #000'; // Borde para distinguir los paneles

    // rightPane.style.width = '0%'; // El 50% del ancho de la pantalla
    // rightPane.style.height = '100vh'; // El 100% de la altura de la ventana
    // rightPane.style.float = 'left'; // Alinear a la izquierda
    // rightPane.style.boxSizing = 'border-box'; // Considerar el borde y el relleno en el ancho total
    // rightPane.style.border = '0px solid #000'; // Borde para distinguir los paneles

    // // Agregar los divs al cuerpo del documento
    // document.body.appendChild(leftPane);
    // document.body.appendChild(rightPane);

    // // Llamar a las funciones
    imagen();
    conseguirDatos();
}

function imagen() {
    const imagen = document.getElementById('imagen');
    imagen.src = 'mapa-provincias-castilla-y-leon.png';
    
    // document.getElementById('leftPane').appendChild(imagen);
}

function imagenchiquita() {
    const imagen = document.getElementById('imagen');
    imagen.src = 'mapa-provincias-castilla-y-leon.png';
    imagen.style.width = "30%";
    imagen.style.height = "30%";

    var rightPane = document.createElement('div');
    rightPane.style.width = '60%'; // El 60% del ancho de la pantalla
    rightPane.style.float = 'right'; // Alinear a la derecha
    rightPane.style.boxSizing = 'border-box'; // Considerar el borde y el relleno en el ancho total
    rightPane.style.borderRight = '1px solid #000'; // Borde para distinguir los paneles
    document.body.appendChild(rightPane);
    
    let Fecha = document.getElementById("Fecha")
    Fecha.removeAttribute("hidden")
    // document.getElementById('leftPane').appendChild(imagen);
}

function conseguirDatos() {
    fetch("Datos.json") //fetch solo funciona con https
        .then(response => response.json())
        .then(datos => {
            generarSelect(datos);
        })
}

function obtenerProvincias(centros) {
    let provincias = [];

    centros.forEach(objeto => {
        if (!provincias.includes(objeto.Provincia)) {
            provincias.push(objeto.Provincia);
        }
    })
    return provincias
}

function generarSelect(datos) {
    const selectElement = document.getElementById('SelectProvincia');
    const provincias = obtenerProvincias(datos.Centros);

    selectElement.innerHTML = '';
    selectElement[0]=new Option("Selecciona una opción", "");

    provincias.forEach((provincia,i) => {
       selectElement[i+1]=new Option(provincia, provincia);
    });
    selectElement.addEventListener("change",(e)=>{tratarDatos(e,datos)})
}

function elegirprovincia() {
    let boton = document.createElement("button")
    document.getElementById("input").after(boton)
    boton.addEventListener("click", conseguirDatos)
    boton.append("Enviar")

}

function tratarDatos(e,datos) {
    let tabla = document.getElementById("TablaProvincia")
    //let provincia = document.getElementById("SelectProvincia").value
    tabla.removeAttribute("hidden")
    let provincia=e.target.value
    tabla.innerHTML = ""
    let theader = document.createElement("thead"); //creamos el thead
    let head = document.createElement("tr"); //creamos la fila
    let celdah1 = document.createElement("th"); //creamos las celdas
    let celdah2 = document.createElement("th");
    let celdah3 = document.createElement("th");

    celdah1.append("Provincia");
    celdah2.append("Nombre"); //metemos lo que queremos que saque
   
    celdah3.append("Citas disponibles");

    head.append(celdah1); //metemos las celdas en la fila
    head.append(celdah2);
    head.append(celdah3);

    theader.append(head); //metemos la fila en el theader
    tabla.append(theader); //metemos el theader en la tabla
    
    datos.Centros.forEach(centro => {
        if (centro.Provincia == provincia) {
            let celda1 = document.createElement("td")
            celda1.append(centro.Provincia)
            let fila = document.createElement("tr")
            let celda2 = document.createElement("td")
            celda2.append(centro.Nombre)
            let boton = document.createElement("button");
            boton.id = "boton";
            boton.append("Mostrar horarios");
            boton.addEventListener("click", function () {
                let NombreCentro=centro.Nombre
              MostrarHorario(NombreCentro)
              imagenchiquita()
            });
            fila.append(celda1)
            fila.append(celda2)
            fila.append(boton)
            tabla.append(fila)
        }

    })
    
}

function MostrarHorario(NombreCentro) {
    console.log(NombreCentro)
    window.open("http://localhost/js/Reserva.html")
}

