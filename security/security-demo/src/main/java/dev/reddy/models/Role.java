package dev.reddy.models;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;

@Entity
@Table
@Data
public class Role implements GrantedAuthority {

    @Id
    @GeneratedValue( strategy = GenerationType.AUTO)
    private Integer roleId;
    private String authority;

    public Role() {

    }

    public Role( String authority) {
        this.authority = authority;
    }
    public Role( Integer id, String  authority) {
        this.roleId = id;
        this.authority = authority;
    }

    @Override
    public String getAuthority() {
        return this.authority;
    }
}
