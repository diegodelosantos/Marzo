/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package misclases;

/**
 *
 * @author DAW
 */
public class Constructor {
    
    int num_producto;
    int precio;
    String descripcion;
    String nombre;
    int total;

    public Constructor(int num_producto, int precio, String descripcion, String nombre, int total) {
        this.num_producto = num_producto;
        this.precio = precio;
        this.descripcion = descripcion;
        this.nombre = nombre;
        this.total = total;
    }

    public int getNum_producto() {
        return num_producto;
    }

    public void setNum_producto(int num_producto) {
        this.num_producto = num_producto;
    }

    public int getPrecio() {
        return precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }
    
    
}
