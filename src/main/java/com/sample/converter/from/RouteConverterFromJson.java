package com.sample.converter.from;

import com.sample.model.Route;
import com.sample.model.json.RouteJson;
import com.sample.repository.RouteRepository;
import com.sample.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;
import java.util.function.Function;

@Component
public class RouteConverterFromJson implements Function<RouteJson, Route> {
    @Autowired
    private RouteRepository routeRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public Route apply(RouteJson routeJson) {
        if(routeJson == null) {
            return null;
        }

        Route result;
        if(routeJson.getId() == null) {
            result = new Route();
        } else {
            Optional<Route> routeFromDatabase = routeRepository.findById(routeJson.getId());
            result = routeFromDatabase.orElseGet(Route::new);
        }
        if(routeJson.getUserName() != null) {
            result.setUser(userRepository.findByName(routeJson.getUserName()));
        }
        result.setStartPoint(routeJson.getStartPoint());
        result.setEndPoint(routeJson.getEndPoint());
        result.setDate(routeJson.getDate());
        return result;
    }
}
