/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package misclases;

import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author DAW
 */
public class OperacionesBD {

    public Connection traerConexion() {
        Connection conexion = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conexion = DriverManager.getConnection("jdbc:mysql://localhost/daniel", "Daniel", "Daniel");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return conexion;
    }

    public ArrayList listarDinero() {

        ArrayList Array = new ArrayList();

        try {
            Connection conexion = traerConexion();
            if (conexion != null) {
                System.out.println("Conexion establecida");

                Statement st = conexion.createStatement();
                String sql = "SELECT p.PRODUCTO_NO, p.PRECIO_ACTUAL, p.DESCRIPCION, c.NOMBRE, IFNULL(SUM(pe.UNIDADES * p.PRECIO_ACTUAL), 0) AS Total "
                        + "FROM PRODUCTOS p "
                        + "JOIN PEDIDOS pe ON p.PRODUCTO_NO = pe.PRODUCTO_NO "
                        + "JOIN CLIENTES c ON pe.CLIENTE_NO = c.CLIENTE_NO "
                        + "GROUP BY p.PRODUCTO_NO "
                        + "HAVING Total BETWEEN 2000 AND 4000;";

                ResultSet res = st.executeQuery(sql);
                while (res.next()) {

                    Constructor c = new Constructor(
                            res.getInt("PRODUCTO_NO"),
                            res.getInt("PRECIO_ACTUAL"),
                            res.getString("DESCRIPCION"),
                            res.getString("NOMBRE"),
                            res.getInt("Total")
                    );

                    Array.add(c);
                }
                conexion.close();
            }

        } catch (SQLException e) {
            e.printStackTrace();

        }
        return Array;
    }
}
