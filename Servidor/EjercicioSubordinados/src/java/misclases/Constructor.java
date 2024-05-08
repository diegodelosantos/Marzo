/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package misclases;

/**
 *
 * @author DANIELTEJERIZOMORETÓ
 */
public class Constructor {
    
    int empNo;
    String apellido;
    int deptNo;
    int num_subor;

    public Constructor(int empNo, String apellido, int deptNo, int num_subor) {
        this.empNo = empNo;
        this.apellido = apellido;
        this.deptNo = deptNo;
        this.num_subor = num_subor;
    }

    public int getEmpNo() {
        return empNo;
    }

    public void setEmpNo(int empNo) {
        this.empNo = empNo;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public int getDeptNo() {
        return deptNo;
    }

    public void setDeptNo(int deptNo) {
        this.deptNo = deptNo;
    }

    public int getNum_subor() {
        return num_subor;
    }

    public void setNum_subor(int num_subor) {
        this.num_subor = num_subor;
    }
    
    
    
    
    
}
