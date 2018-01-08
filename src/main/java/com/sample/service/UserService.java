package com.sample.service;

import com.sample.generic.GenericService;
import com.sample.model.User;

import java.util.Optional;

public interface UserService extends GenericService<User> {

    Optional<User> findByName(String name);
}
