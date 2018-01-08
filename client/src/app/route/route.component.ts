import {Component, OnInit} from '@angular/core';
import {Route} from '../model/index';
import {RouteService} from '../services/index';

import * as moment from 'moment';

@Component({
  moduleId: module.id,
  templateUrl: 'route.component.html',
  styleUrls: ['route.component.css']
})

export class RouteComponent implements OnInit {
  routes: Route[];
  selectedRoute: Route;

  constructor(private routeService: RouteService) {}


  ngOnInit(): void {
    this.routeService.getRoutes()
      .subscribe(result => {
        this.routes = result;
      });
  }

  formatDate(date: Date): string {
    return moment(date).format('MM/DD/YYYY');
  }
}
