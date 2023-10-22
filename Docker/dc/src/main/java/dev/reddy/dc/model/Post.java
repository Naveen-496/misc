package dev.reddy.dc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor
public class Post {

    @Id
    @GeneratedValue( strategy = GenerationType.AUTO)
    private Integer id;
    private String title;
    private String body;

    public Post(String s, String myFirstPost) {
        this.title = s;
        this.body = myFirstPost;
    }
}
