package com.sample.repository;

import com.sample.model.Route;
import com.sample.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface RouteRepository extends JpaRepository<Route, Long> {

    Optional<Route> findById(Long id);

    List<Route> findByUser(User user);

    List<Route> findByDateBetween(Date startDate, Date endDate);
}
