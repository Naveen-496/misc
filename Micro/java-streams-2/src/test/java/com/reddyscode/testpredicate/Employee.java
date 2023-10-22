package com.reddyscode.testpredicate;

public class Employee {
    private String name;

    public Employee(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "name='" + name + '\'' +
                '}';
    }
}

class Manager extends Employee {

    private int yearsOfExperience;

    public Manager(String name, int yearsOfExperience) {
        super(name);
        this.yearsOfExperience = yearsOfExperience;
    }

    public int getYearsOfExperience() {
        return yearsOfExperience;
    }

    public void setYearsOfExperience(int yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }

    @Override
    public String toString() {
        return "Manager{" +
                "yearsOfExperience=" + yearsOfExperience +
                '}';
    }
}

class Engineer extends Employee {

    private int yearsOfExperience;
    public Engineer(String name, int yearsOfExperience) {
        super(name);
        this.yearsOfExperience = yearsOfExperience;
    }

    public int getYearsOfExperience() {
        return yearsOfExperience;
    }

    public void setYearsOfExperience(int yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }

    @Override
    public String toString() {
        return "Engineer{" +
                "yearsOfExperience=" + yearsOfExperience +
                '}';
    }
}