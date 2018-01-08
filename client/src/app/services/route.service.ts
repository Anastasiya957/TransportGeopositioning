import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import {Headers} from '@angular/http';
import {RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {AuthService} from './auth.service';
import {Route} from '../model/index';
import {HttpUtil} from '../util/index';

@Injectable()
export class RouteService {
  token: string;
  host: string;

  constructor(private httpUtil: HttpUtil, private authService: AuthService) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    this.token = currentUser && currentUser.token;
    console.log(this.token);
    this.host = environment.host;
  }

  saveRoute(route: Route): Observable<number> {
    const options = new RequestOptions({headers: new Headers()});

    return this.httpUtil.post(this.host + '/route', route, options)
      .map(response => {
        return +response.json();
      }, error => {
        console.log(error);
      });
  }

  getRoutes(): Observable<Route[]> {
    const options = new RequestOptions({headers: new Headers()});

    return this.httpUtil.get(this.host + '/route', options)
      .map(response => {
        return response.json();
      });
  }
}
