package data;

import domain.Department;
import domain.Employee;

import java.util.ArrayList;
import java.util.List;

public class EmployeeDataLoader {

    private static List<Employee> employees = new ArrayList<>();

    private static List<Department> departments = new ArrayList<>();

    public static List<Employee> loadEmployees() {

        if (employees.isEmpty() && departments.isEmpty()) {
            addDepartments();
            addEmployees();
        }

        return employees;
    }

    private static void addDepartments() {
        departments.add(new Department(1, "Human Resources"));
        departments.add(new Department(2, "Marketing"));
        departments.add(new Department(3, "Finance"));
        departments.add(new Department(4, "Engineering"));
        departments.add(new Department(5, "Sales"));
        departments.add(new Department(6, "Customer Support"));
        departments.add(new Department(7, "Research and Development"));
        departments.add(new Department(8, "Quality Assurance"));
        departments.add(new Department(9, "Production"));
        departments.add(new Department(10, "IT"));
    }

    private static void addEmployees() {


        employees.add(new Employee(1, "John", "Doe", "john.doe@example.com", 75000.0, departments.get(1)));
        employees.add(new Employee(2, "Jane", "Smith", "jane.smith@example.com", 80000.0, departments.get(2)));
        employees.add(new Employee(3, "David", "Johnson", "david.johnson@example.com", 85000.0, departments.get(3)));
        employees.add(new Employee(4, "Emily", "Brown", "emily.brown@example.com", 72000.0, departments.get(4)));
        employees.add(new Employee(5, "Michael", "Lee", "michael.lee@example.com", 90000.0, departments.get(5)));
        employees.add(new Employee(6, "Sophia", "Wilson", "sophia.wilson@example.com", 68000.0, departments.get(6)));
        employees.add(new Employee(7, "William", "Anderson", "william.anderson@example.com", 82000.0, departments.get(7)));
        employees.add(new Employee(8, "Olivia", "Martinez", "olivia.martinez@example.com", 78000.0, departments.get(8)));
        employees.add(new Employee(9, "James", "Taylor", "james.taylor@example.com", 86000.0, departments.get(9)));
        employees.add(new Employee(10, "Emma", "Hernandez", "emma.hernandez@example.com", 73000.0, departments.get(10)));


        employees.add(new Employee(11, "Liam", "Garcia", "liam.garcia@example.com", 72000.0, departments.get(1)));
        employees.add(new Employee(12, "Charlotte", "Jones", "charlotte.jones@example.com", 95000.0, departments.get(2)));
        employees.add(new Employee(13, "Noah", "Miller", "noah.miller@example.com", 88000.0, departments.get(3)));
        employees.add(new Employee(14, "Ava", "Davis", "ava.davis@example.com", 76000.0, departments.get(4)));
        employees.add(new Employee(15, "Mia", "Brown", "mia.brown@example.com", 81000.0, departments.get(5)));
        employees.add(new Employee(16, "Liam", "Wilson", "liam.wilson@example.com", 70000.0, departments.get(6)));
        employees.add(new Employee(17, "Amelia", "Johnson", "amelia.johnson@example.com", 92000.0, departments.get(7)));
        employees.add(new Employee(18, "Lucas", "Hernandez", "lucas.hernandez@example.com", 74000.0, departments.get(8)));
        employees.add(new Employee(19, "Sophia", "Clark", "sophia.clark@example.com", 89000.0, departments.get(9)));
        employees.add(new Employee(20, "Elijah", "Smith", "elijah.smith@example.com", 79000.0, departments.get(10)));


    }
}
