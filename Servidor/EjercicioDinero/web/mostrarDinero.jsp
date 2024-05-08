<%-- 
    Document   : mostrarDinero
    Created on : 9 abr 2024, 17:01:30
    Author     : DAW
--%>

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
        <h2>Listado de departamentos</h2>
        <table border="2">
            <tr>
                <th>Numero producto</th>
                <th>Precio Actual</th>
                <th>Descripcion</th>
                <th>Nombre</th>
                <th>Total</th>
            </tr>
            <% 
            ArrayList<Constructor> Array = (ArrayList<Constructor>) request.getAttribute("dinero");
            if (Array != null) {
                for (Constructor dinero : Array) {
            %>
            <tr>
                <td><%= dinero.getNum_producto()%></td>
                <td><%= dinero.getPrecio() %></td>
                <td><%= dinero.getDescripcion()%></td>
                <td><%= dinero.getNombre()%></td>
                <td><%= dinero.getTotal()%></td>
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
