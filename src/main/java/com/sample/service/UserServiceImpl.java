package com.sample.service;

import com.sample.generic.GenericServiceImpl;
import com.sample.model.User;
import com.sample.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service("userService")
@Transactional
public class UserServiceImpl extends GenericServiceImpl<User> implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    protected JpaRepository<User, Long> getRepository() {
        return userRepository;
    }

    @Override
    public Optional<User> findByName(String name) {
        return Optional.ofNullable(userRepository.findByName(name));
    }
}
