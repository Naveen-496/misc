package dev.reddy.postservice.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table( name = "courses")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Course {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;

    @Column( name = "course_name")
    private String  name;

    @Column( nullable = false)
    private Double price;

//    @ManyToMany( mappedBy = "courses")
//    private List<Student> students;
}
