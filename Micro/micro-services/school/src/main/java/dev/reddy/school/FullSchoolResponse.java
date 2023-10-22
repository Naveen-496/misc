package dev.reddy.school;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FullSchoolResponse {

    private Integer id;
    private String name;
    private String email;
    List<Student> students;
}
