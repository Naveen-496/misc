package dev.reddy.securitydemistified;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;

public class RobotFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        System.out.println("In the Robot filter");

        // 0. should execute the filter ?
        if(!Collections.list( request.getHeaderNames()).contains("x-robot-password")) {
             filterChain.doFilter( request, response);
             return;
        }


        // 1. Authentication Decision
        String password = request.getHeader("x-robot-password");
        if (!"beep-boop".equals(password)) {
            // NO  🤢

            response.setStatus(HttpStatus.FORBIDDEN.value());
            response.setCharacterEncoding("utf-8");
            response.setHeader("Content-type", "text/plain;charset=utf-8");
            response.getWriter().println("You are not Ms Robot 👰🛑");
            return;
        }

        // OK 👍

        var newContext = SecurityContextHolder.createEmptyContext();
        newContext.setAuthentication(
                new RobotAuthentication()
        );
        SecurityContextHolder.setContext(newContext);
        filterChain.doFilter(request, response);
        return;


        // 2. Do the rest


    }
}
