import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Headers} from '@angular/http';
import {RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {AuthService} from './auth.service';

@Injectable()
export class AuthenticationService {
  token: string;
  host: string;

  constructor(private http: Http, private authService: AuthService) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    this.token = currentUser && currentUser.token;
    console.log(this.token);
    this.host = environment.host;
  }

  login(username: string, password: string): Observable<boolean> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.post(this.host + '/auth/login', JSON.stringify({ name: username, password: password }), options)
      .map(response => {

        const jwtToken = response.json() && response.json();
        console.log(jwtToken);
        if (jwtToken) {
          this.token = jwtToken.token;
          console.log(this.token);
          localStorage.clear();
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: jwtToken.token, time: new Date()}));
          localStorage.setItem('authorities', JSON.stringify(jwtToken.authorities));
          this.authService.setRoles(jwtToken.authorities.map(role => { return role['authority']; }));
          return true;
        } else {
          return false;
        }
      }, error => {
        console.log(error);
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
    this.authService.setRoles([]);
  }
}
