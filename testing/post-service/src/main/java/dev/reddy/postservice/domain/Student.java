package dev.reddy.postservice.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table( name = "students")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private LocalDate dateOfBirth;

//    @ManyToMany( mappedBy = "students")
//    @JoinTable( name = "student_courses",
//    joinColumns = @JoinColumn( name = "student_id"),
//            inverseJoinColumns = @JoinColumn( name = "course_id")
//    )
//    private List<Course> courses;
}
