package dev.reddy.authbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

@Entity
@Table(name = "roles")
@Getter
@Setter
public class Role implements GrantedAuthority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private Integer roleId;
    private String authority;

    public Role() {
        super();
    }

    public Role(String authority) {
        super();
        this.authority = authority;
    }

    public Role(Integer roleId, String authority) {
        super();
        this.roleId = roleId;
        this.authority = authority;
    }

    @Override
    public String getAuthority() {
        return this.authority;
    }


    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }
}
