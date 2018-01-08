package com.sample.model.json;

import lombok.Data;

import java.util.Date;

@Data
public class RouteJson {
    private Long id;
    private String userName;
    private String startPoint;
    private String endPoint;
    private Date date;
}
