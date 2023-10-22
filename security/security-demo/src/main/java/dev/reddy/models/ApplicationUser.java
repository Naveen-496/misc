package dev.reddy.models;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table( name = "users")
@Data
public class ApplicationUser implements UserDetails {

    @Id
    @GeneratedValue( strategy = GenerationType.AUTO)
    private Integer userId;

    @Column( unique = true)
    private String username;

    private String password;

    @ManyToMany
    @JoinTable(
            name = "user_role_junction",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn( name = "role_id")}

    )
    private Set<Role> authorities;

    public ApplicationUser( Integer userId, String username, String password, Set<Role> roles) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.authorities = roles;
    }

   public ApplicationUser() {
        super();
   }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
