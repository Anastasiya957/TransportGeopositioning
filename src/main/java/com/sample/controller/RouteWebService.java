package com.sample.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sample.generic.GenericService;
import com.sample.generic.GenericWebService;
import com.sample.model.Route;
import com.sample.model.json.RouteJson;
import com.sample.service.RouteService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/route")
public class RouteWebService {
    private static final Logger LOGGER = LoggerFactory.getLogger(RouteWebService.class);

    private ObjectMapper objectMapper;
    private RouteService routeService;

    @Autowired
    public RouteWebService(GenericService<Route> service, RouteService routeService, ObjectMapper objectMapper) {
        this.routeService = routeService;
        this.objectMapper = objectMapper;
    }

    @RequestMapping(method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity createRoute(@RequestBody RouteJson routeJson) throws JsonProcessingException {
        LOGGER.debug(objectMapper.writeValueAsString(routeJson));

        Long id = routeService.createNewRoute(routeJson);

        return new ResponseEntity<>(id, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity getRoutes() {
        List<RouteJson> result = routeService.getRoutes();

        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
