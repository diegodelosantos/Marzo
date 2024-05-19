<?php
    $Centro = $_POST['Centro'];
    $Fecha = $_POST['Fecha'];

    // Conexión a la base de datos
    $con = new mysqli('locajdbc:mysql://localhost/BBDDJS', 'Admin', 'Toor');

    // Verificar la conexión
    if ($con->connect_error) {
        die("Conexión fallida: " . $con->connect_error);
    }

    // Consulta SQL
    $sql = "SELECT * FROM '$Centro' WHERE Dia = '$Fecha' and Centro = '$Centro'";

    // Ejecutar la consulta
    $result = $con->query($sql);

    // Verificar si la consulta devolvió resultados
    if ($result->num_rows > 0) {
        // Imprimir los datos de cada fila
        while($row = $result->fetch_assoc()) {
            echo "id: " . $row["id"]. " - Nombre: " . $row["nombre"]. "<br>";
        }
    } else {
        echo "0 resultados";
    }

    // Cerrar la conexión
    $con->close();
?>
