package com.sample.service;

import com.sample.model.json.JwtAuthenticationToken;
import com.sample.model.json.UserJson;

public interface AuthService {
    JwtAuthenticationToken getToken(UserJson user);
}
