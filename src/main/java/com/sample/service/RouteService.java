package com.sample.service;

import com.sample.generic.GenericService;
import com.sample.model.Route;
import com.sample.model.User;
import com.sample.model.json.RouteJson;

import java.util.Date;
import java.util.List;

public interface RouteService extends GenericService<Route> {

    List<RouteJson> findRoutesByDate(Date startDate, Date endDate);

    List<RouteJson> findByUser(User user);

    Long createNewRoute(RouteJson routeJson);

    List<RouteJson> getRoutes();
}
