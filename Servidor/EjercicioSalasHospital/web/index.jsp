<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Seleccionar Salas</title>
</head>
<body>
    <h2>Seleccione las salas:</h2>
    <form action="mostrarSalas.jsp" method="post">
        <input type="checkbox" name="salasSeleccionadas" value="Cuidados intensivos"> Cuidados intensivos<br>
        <input type="checkbox" name="salasSeleccionadas" value="Maternidad"> Maternidad<br>
        <input type="checkbox" name="salasSeleccionadas" value="Recuperación"> Recuperación<br>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>
