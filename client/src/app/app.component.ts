import {Component, OnInit} from '@angular/core';
import { AuthService, AuthenticationService } from './services/index';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, AuthenticationService]
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private loginService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
    // tick every 15 minutes
    const timer = Observable.timer(0, 15 * 60 * 1000);
    timer.subscribe(() => {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser != null) {
        const token = currentUser && currentUser.token;
        const time = currentUser.time;

        // remove token if it is stale
        if (time == null || (((new Date()).getTime() - (new Date(time)).getTime()) > 30 * 60 * 1000)) {
          localStorage.removeItem('currentUser');
          localStorage.removeItem('authorities');
          this.router.navigate(['/login']);
        }
      }
    });
  }

  signOut() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
