<%@page import="misclases.Constructor"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>JSP Page</title>
</head>
<body>
    <center>
    <h2>Listado de empleados</h2>
    <table border="2">
        <tr>
            <th>Número de Empleado</th>
            <th>Apellido</th>
            <th>Número de Departamento</th>
            <th>Número de Subordinados</th>
        </tr>
        <% 
        ArrayList<Constructor> Array = (ArrayList<Constructor>) request.getAttribute("empleados");
        if (Array != null) {
            for (Constructor empleado : Array) {
        %>
        <tr>
            <td><%= empleado.getEmpNo() %></td>
            <td><%= empleado.getApellido() %></td>
            <td><%= empleado.getDeptNo() %></td>
            <td><%= empleado.getNum_subor() %></td>
        </tr>
        <% 
            }
        } 
        %>
    </table>
    <br/><br/>
    <a href="index.html">Inicio</a>
</center>
</body>
</html>
