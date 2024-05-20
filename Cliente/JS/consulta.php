<?php
    $Centro = $_POST['Centro'];
    $Fecha = $_POST['Fecha'];

    // Conexión a la base de datos
    $con =  mysqli_connect('localhost', 'BBDDJS','Admin', 'Toor');

    // Verificar la conexión
    if ($con->connect_error) {
        die("Conexión fallida: " . $con->connect_error);
    }

    // Consulta SQL
    $sql = "SELECT * FROM '$Centro' WHERE Dia = '$Fecha' and Cliente = ''";

    // Ejecutar la consulta
    $result = $con->query($sql);

    // Verificar si la consulta devolvió resultados
    if ($result->num_rows > 0) {
        // Imprimir los datos de cada fila
        while($row = $result->fetch_assoc()) {
            echo "IDCita: " . $row["IDCita"]. " - Centro: " . $row["Centro"]. " - Cliente: " . $row["Cliente"]. " - Dia: " . $row["Dia"]. " - Hora: " . $row["Hora"]. "<br>";
        }
    } else {
        echo "0 resultados";
    }

    // Cerrar la conexión
    $con->close();
?>