package com.sample.converter.to;

import com.sample.model.Route;
import com.sample.model.json.RouteJson;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class RouteConverterToJson implements Function<Route, RouteJson> {

    @Override
    public RouteJson apply(Route route) {
        RouteJson result = new RouteJson();
        result.setUserName(route.getUser().getName());
        result.setStartPoint(route.getStartPoint());
        result.setEndPoint(route.getEndPoint());
        result.setDate(route.getDate());
        return result;
    }
}
