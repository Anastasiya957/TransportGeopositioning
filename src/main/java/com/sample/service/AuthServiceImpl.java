package com.sample.service;

import com.sample.exception.InvalidAuthenticationException;
import com.sample.model.User;
import com.sample.model.json.JwtAuthenticationToken;
import com.sample.model.json.UserJson;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService {
    private static final String ROLES = "roles";

    @Value("${SECRET_KEY}")
    private String secretKey;

    @Autowired
    private UserService userService;

    @Override
    public JwtAuthenticationToken getToken(UserJson passedUser) {
        Optional<User> user = userService.findByName(passedUser.getName());
        if(user.isPresent() && user.get().getPassword().equals(passedUser.getPassword())) {
            Set<String> roles = getRolesByUser(user.get());
            Calendar expirationDate = Calendar.getInstance();
            expirationDate.add(Calendar.MINUTE, 30);
            String token = Jwts.builder().setSubject(user.get().getName())
                    .claim(ROLES, roles).setIssuedAt(new Date())
                    .setExpiration(expirationDate.getTime())
                    .signWith(SignatureAlgorithm.HS256, secretKey).compact();

            return new JwtAuthenticationToken(
                    roles.stream()
                            .map(SimpleGrantedAuthority::new)
                            .collect(Collectors.toList()),
                    user.get().getName(), token);
        } else {
            throw new InvalidAuthenticationException("Invalid credentials");
        }
    }

    private Set<String> getRolesByUser(User user) {
        Set<String> result = new HashSet<>();
        result.add(user.getRole());
        return result;
    }
}
