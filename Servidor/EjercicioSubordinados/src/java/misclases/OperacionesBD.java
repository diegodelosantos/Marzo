package misclases;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import misclases.Constructor;

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

    public ArrayList<Constructor> calcularEmpleadoConMasSubordinados() {
        ArrayList<Constructor> empleados = new ArrayList<>();

        try {
            Connection conexion = traerConexion();
            if (conexion != null) {
                System.out.println("Conexion establecida");

                Statement st = conexion.createStatement();
                String sql = "SELECT e.emp_no, e.apellido, e.dept_no, COUNT(*) AS num_subordinados "
                           + "FROM empleados e "
                           + "WHERE e.emp_no IN (SELECT dir FROM empleados WHERE dir IS NOT NULL) "
                           + "GROUP BY e.emp_no "
                           + "ORDER BY num_subordinados DESC "
                           + "LIMIT 1";

                ResultSet res = st.executeQuery(sql);
                if (res.next()) {
                    Constructor empleado = new Constructor(
                            res.getInt("emp_no"),
                            res.getString("apellido"),
                            res.getInt("dept_no"),
                            res.getInt("num_subordinados")
                    );
                    empleados.add(empleado);
                }
                conexion.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return empleados;
    }
}
