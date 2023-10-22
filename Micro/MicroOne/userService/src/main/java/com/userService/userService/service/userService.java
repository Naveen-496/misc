package com.userService.userService.service;

import com.userService.userService.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class userService {

    private List<User> users = new ArrayList<>();

    public User save(User user) {
        users.add(user);
        return user;
    }

    public User findAndUpdate(User user, Integer id) {
        users.
    }

}
