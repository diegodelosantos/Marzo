<?php
    $Centro = $_POST['Centro'];
    $Fecha = $_POST['Fecha'];

// Configuración de la base de datos
$servername = "localhost";
$username = "Admin";
$password = "Toor";
$dbname = "bbddjs";

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die(json_encode(array("error" => "Conexión fallida: " . $conn->connect_error)));
}

// Obtener los parámetros de la solicitud
$centro = isset($_GET['Centro']) ? $_GET['Centro'] : '';
$fecha = isset($_GET['Fecha']) ? $_GET['Fecha'] : '';

// Crear la consulta SQL
$sql = "SELECT IDCita, Centro, Cliente, Dia, Hora FROM '$Centro' WHERE Cliente='' and Dia='$Fecha'";

if ($centro !== '') {
    $sql .= " AND Centro = '" . $conn->real_escape_string($centro) . "'";
}

if ($fecha !== '') {
    $sql .= " AND Dia = '" . $conn->real_escape_string($fecha) . "'";
}

$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    $data = array("message" => "No se encontraron registros");
}

echo json_encode($data);

$conn->close();
?>
