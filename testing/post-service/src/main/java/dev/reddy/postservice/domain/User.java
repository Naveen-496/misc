package dev.reddy.postservice.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

import static jakarta.persistence.CascadeType.*;
import static jakarta.persistence.GenerationType.*;

@Entity
@Data
@Builder
@Table(name = "users2")
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue( strategy = IDENTITY)
    private Long id;
    private String firstname;
    private String lastname;
    private Date dateOfBirth;
    private String email;
    private String username;
    private int age;
    @OneToMany( cascade = ALL)
    private List<Post> posts;
    @OneToMany( cascade = ALL)
    private List<Comment> comments;
}
