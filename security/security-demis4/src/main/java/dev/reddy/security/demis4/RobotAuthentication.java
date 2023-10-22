package dev.reddy.security.demis4;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

public class RobotAuthentication implements Authentication {


    private final String password;

    private final List<GrantedAuthority> authorities;

    private final boolean isAuthenticated;

    public RobotAuthentication(String password, List<GrantedAuthority> authorities) {
        this.password = password;
        this.authorities = authorities;
        this.isAuthenticated = password == null;
    }

    public static RobotAuthentication unAuthenticated( String password ) {
        return new RobotAuthentication( password ,Collections.emptyList());
    }

    public static RobotAuthentication authenticated() {
        return new RobotAuthentication(null, AuthorityUtils.createAuthorityList("ROLE_robot"));
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public Object getCredentials() {
        return getDetails();
    }

    @Override
    public Object getDetails() {
        return getName();
    }

    @Override
    public Object getPrincipal() {
        return getName();
    }

    @Override
    public boolean isAuthenticated() {
        return this.isAuthenticated;
    }

    @Override
    public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {
            throw new IllegalArgumentException("Don't do this please");
    }

    @Override
    public String getName() {
        return "Ms Robot";
    }

    public String getPassword() {
        return this.password;
    }
}
