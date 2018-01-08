package com.sample.service;

import com.sample.converter.from.RouteConverterFromJson;
import com.sample.converter.to.RouteConverterToJson;
import com.sample.generic.GenericServiceImpl;
import com.sample.model.Route;
import com.sample.model.User;
import com.sample.model.json.RouteJson;
import com.sample.repository.RouteRepository;
import com.sample.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class RouteServiceImpl extends GenericServiceImpl<Route> implements RouteService {

    @Autowired
    private RouteRepository routeRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RouteConverterToJson routeConverterToJson;
    @Autowired
    private RouteConverterFromJson routeConverterFromJson;

    @Override
    protected JpaRepository<Route, Long> getRepository() {
        return this.routeRepository;
    }

    @Override
    public List<RouteJson> findRoutesByDate(Date startDate, Date endDate) {
        return routeRepository.findByDateBetween(startDate, endDate).stream().map(routeConverterToJson).collect(Collectors.toList());
    }

    @Override
    public List<RouteJson> findByUser(User user) {
        return routeRepository.findByUser(user).stream().map(routeConverterToJson).collect(Collectors.toList());
    }

    @Override
    public Long createNewRoute(RouteJson routeJson) {
        routeJson.setUserName(SecurityContextHolder.getContext().getAuthentication().getName());
        Route route = routeConverterFromJson.apply(routeJson);
        route = routeRepository.save(route);
        return route.getId();
    }

    @Override
    public List<RouteJson> getRoutes() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_ADMIN"))) {
            return routeRepository.findAll().stream().map(routeConverterToJson).collect(Collectors.toList());
        } else {
            return routeRepository
                    .findByUser(userRepository.findByName(auth.getName()))
                    .stream()
                    .map(routeConverterToJson)
                    .collect(Collectors.toList());
        }
    }
}
