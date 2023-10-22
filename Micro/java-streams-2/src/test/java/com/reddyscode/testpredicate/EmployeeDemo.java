package com.reddyscode.testpredicate;

import java.util.List;
import java.util.stream.Stream;

public class EmployeeDemo {

    public static void main(String[] args) {
        List<Employee> employees = List.of(
                new Manager("Naveen Reddy", 2),
                new Engineer("John Milga", 5),
                new Manager("Pillav", 7),
                new Engineer("Bhargav", 9)
        );

        Stream<String> employeeStream =
                employees.stream()
                        .filter(emp -> {
                            System.out.println("IN filter " + emp.getName());
                            return emp.getName().equals("Bhargav");
                        })
                        .limit(2)
                        .map(employee -> {
                            System.out.println("In Map " + employee.getName());
                            return employee.getName();
                        });
        employeeStream.forEach(System.out::println);

    }
}
