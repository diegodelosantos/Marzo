<%@page import="java.sql.Connection"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.util.ArrayList"%>
<%@page import="misclases.Constructor"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Actualización de salarios</title>
</head>
<body>
    <h1>Actualización de salarios</h1>
    <%  
        Connection conexion = null;
        ArrayList<Constructor> empleados = (ArrayList<Constructor>) session.getAttribute("empleados");

        try {
            Class.forName("com.mysql.jdbc.Driver");
            conexion = DriverManager.getConnection("jdbc:mysql://localhost/daniel", "Daniel", "Daniel");

            // Iterar sobre la lista de empleados y actualizar el salario en un 25%
            for (Constructor empleado : empleados) {
                double salarioActual = empleado.getSalario();
                double nuevoSalario = salarioActual * 0.75; // Disminuir el salario en un 25%

                // Preparar la consulta para actualizar el salario en la base de datos
                PreparedStatement statement = conexion.prepareStatement("UPDATE empleados SET salario = ? WHERE emp_no = ?");
                statement.setDouble(1, nuevoSalario);
                statement.setInt(2, empleado.getNum_empleado());
                
                // Ejecutar la consulta
                statement.executeUpdate();
                statement.close();
            }

            out.println("Actualización completa");

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (conexion != null) {
                try {
                    conexion.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    %>
    <br>
    <a href="index.jsp">Volver al inicio</a>
</body>
</html>
