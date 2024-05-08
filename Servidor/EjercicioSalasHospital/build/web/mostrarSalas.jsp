<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*, java.util.ArrayList" %>
<%@ page import="java.io.*, javax.servlet.*, javax.servlet.http.*" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Resultados de las Salas</title>
</head>
<body>
    <h2>Resultados de las Salas Seleccionadas</h2>
    <table border="1">
        <tr>
            <th>Código de Sala</th>
            <th>Nombre de la Sala</th>
            <th>Suma de Camas</th>
        </tr>
        <% 
        String[] salasSeleccionadas = request.getParameterValues("salasSeleccionadas");
        if (salasSeleccionadas != null) {
            try {
                Class.forName("com.mysql.jdbc.Driver");
                Connection con = DriverManager.getConnection("jdbc:mysql://localhost/daniel", "Daniel", "Daniel");
                Statement stmt = con.createStatement();
                ArrayList<String[]> resultados = new ArrayList<>();
                for (String sala : salasSeleccionadas) {
                    ResultSet rs = stmt.executeQuery("SELECT SALA_COD, NOMBRE, SUM(NUM_CAMA) AS SUMA_CAMAS FROM sala WHERE NOMBRE = '" + sala + "' GROUP BY SALA_COD");
                    while (rs.next()) {
                        String[] resultado = new String[3];
                        resultado[0] = rs.getString("SALA_COD");
                        resultado[1] = rs.getString("NOMBRE");
                        resultado[2] = rs.getString("SUMA_CAMAS");
                        resultados.add(resultado);
                    }
                }
                con.close();
                for (String[] resultado : resultados) {
                    %>
                    <tr>
                        <td><%= resultado[0] %></td>
                        <td><%= resultado[1] %></td>
                        <td><%= resultado[2] %></td>
                    </tr>
                    <%
                }
            } catch (Exception e) {
                out.println(e);
            }
        }
        %>
    </table>
</body>
</html>
