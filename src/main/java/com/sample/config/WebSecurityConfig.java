package com.sample.config;

import com.sample.security.JwtAuthenticationProvider;
import com.sample.security.JwtFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint;
import org.springframework.security.web.authentication.preauth.AbstractPreAuthenticatedProcessingFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.sql.DataSource;

@Configuration
@PropertySource({"classpath:NavigatorConfig.properties"})
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    private static final String LOGIN_PAGE = "/#/login";

    @Value("${SECRET_KEY}")
    private String secretKey;

    @Autowired
    private DataSource dataSource;

    /*@Autowired
    public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().dataSource(dataSource)
                .usersByUsernameQuery("select name, password, enable from app_user where name=?")
                .authoritiesByUsernameQuery("select name, role from app_user where name=?");
    }*/

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .csrf().disable()
                .addFilterBefore(new JwtFilter(authenticationManager()), AbstractPreAuthenticatedProcessingFilter.class)
                .addFilterBefore(new BasicAuthenticationFilter(authenticationManager()), BasicAuthenticationFilter.class)
                .authorizeRequests()
                .antMatchers(HttpMethod.DELETE,"/route").hasAnyRole("ADMIN")
                .antMatchers("/", "/auth/**", "/lib/**", "/fonts/**", "/css/**", "/app/**", "/images/**", "/index.html").permitAll()
                .anyRequest().authenticated();
    }

    @Override
    protected void configure(final AuthenticationManagerBuilder auth)
            throws Exception {
        auth
                .authenticationProvider(new JwtAuthenticationProvider(secretKey));
    }

    @Bean
    public AuthenticationFailureHandler failureHandler() {
        return new CustomAuthenticationFailureHandler();
    }

    @Bean
    public LoginUrlAuthenticationEntryPoint authenticationEntryPoint() {
        return new AjaxAwareAuthenticationEntryPoint(LOGIN_PAGE);
    }
}