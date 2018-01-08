package com.sample.security;

import com.sample.exception.InvalidAuthenticationException;
import com.sample.model.json.JwtAuthenticationToken;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.List;

public class JwtAuthenticationProvider implements AuthenticationProvider {
    @Value("${SECRET_KEY}")
    private String secretKey;

    public JwtAuthenticationProvider(String secretKey) {
        this.secretKey = secretKey;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return JwtAuthenticationToken.class.isAssignableFrom(authentication);
    }

    @Override
    public Authentication authenticate(Authentication authentication) {
        try {
            return getJwtAuthentication(((JwtAuthenticationToken) authentication).getToken());
        } catch (Exception e) {
            throw new InvalidAuthenticationException("Access denied", e);
        }
    }

    @SuppressWarnings("unchecked")
    private Authentication getJwtAuthentication(String token) {
        final Claims claims;
        try {
            claims = Jwts.parser().setSigningKey(secretKey)
                    .parseClaimsJws(token) .getBody();
        } catch (final SignatureException e) {
            throw new InvalidAuthenticationException("Invalid token.");
        }
        List<String> roles = claims.get("roles", List.class);
        List<GrantedAuthority> authorities = new ArrayList<>();
        for(String role: roles) {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
        }
        return new JwtAuthenticationToken(
                authorities,
                claims.get("sub", String.class),
                token);
    }
}