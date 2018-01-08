package com.sample.model.json;

import lombok.Data;

@Data
public class UserJson {
    private Long id;
    private String name;
    private String password;
    private String token;
}
