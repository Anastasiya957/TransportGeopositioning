package com.sample.controller;

import com.sample.model.json.JwtAuthenticationToken;
import com.sample.service.AuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.sample.model.json.UserJson;

import java.security.Principal;

@RestController
@RequestMapping("/auth")
public class AuthWebService {
    private static final Logger LOGGER = LoggerFactory.getLogger(AuthWebService.class);

    @Autowired
    private AuthService authService;

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public ResponseEntity<?> getUser(Principal principial) {

        if (principial != null) {
            if (principial instanceof AbstractAuthenticationToken){
                return new ResponseEntity<>(((AbstractAuthenticationToken) principial).getPrincipal(), HttpStatus.OK);
            }
        }

        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity login(@RequestBody final UserJson user) {

        JwtAuthenticationToken token = authService.getToken(user);

        return new ResponseEntity<>(token, HttpStatus.OK);
    }
}
