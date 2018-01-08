import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response, Headers, URLSearchParams} from '@angular/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

import 'rxjs/add/operator/do';

@Injectable()
export class HttpUtil {
  constructor(private http: Http, private router: Router) {
  }

  private addAuthorizationHeader(options: RequestOptions) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser && currentUser.token;

    if (options === undefined) {
      options = new RequestOptions();
    }
    if (options.headers === undefined) {
      options.headers = new Headers();
    }
    options.headers.append('Accept', 'application/json');
    options.headers.append('Authorization', `${token}`);
  }

  public get(url: string, options: RequestOptions) {
    this.addAuthorizationHeader(options);

    return this.http.get(url, options)
      .do((res: Response) => {
        console.log();
        this.updateToken();
      }, (error: any) => {
        console.log(error.status);
        console.log(error);
        if (error.status === 401) {
          localStorage.removeItem('currentUser');
          localStorage.removeItem('authorities');
          this.router.navigate(['/login']);
        }
      });
  }

  public post(url: string, requestObject: any, options: RequestOptions) {
    this.addAuthorizationHeader(options);

    return this.http.post(url, requestObject, options)
      .do((res: Response) => {
        console.log(res);
        this.updateToken();
      }, (error: any) => {
        if (error.status === 401) {
          localStorage.removeItem('currentUser');
          localStorage.removeItem('authorities');
          this.router.navigate(['/login']);
        }
      });
  }

  public put(url: string, requestObject: any, options: RequestOptions) {
    this.addAuthorizationHeader(options);

    return this.http.put(url, requestObject, options)
      .do((res: Response) => {
        console.log(res);
        this.updateToken();
      }, (error: any) => {
        if (error.status === 401) {
          localStorage.removeItem('currentUser');
          localStorage.removeItem('authorities');
          this.router.navigate(['/login']);
        }
      });
  }

  public del(url: string, options: RequestOptions) {
    this.addAuthorizationHeader(options);

    return this.http.delete(url, options)
      .do((res: Response) => {
        console.log(res);
        this.updateToken();
      }, (error: any) => {
        if (error.status === 401) {
          localStorage.removeItem('currentUser');
          localStorage.removeItem('authorities');
          this.router.navigate(['/login']);
        }
      });
  }

  private updateToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser != null) {
      const token = currentUser && currentUser.token;
      const time = currentUser.time;
      const host = environment.host;

      // refresh token only after 20 minutes
      if (time == null) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('authorities');
      } else if (((new Date()).getTime() - (new Date(time)).getTime()) > 20 * 60 * 1000) {
        const params: URLSearchParams = new URLSearchParams();
        params.set('token', String(token));
        const options = new RequestOptions({headers: new Headers(), search: params});

        return this.http.put(host + '/user/refreshToken', null, options)
          .map((res: Response) => {
            return res.json();
          })
          .subscribe(jwtToken => {
            if (jwtToken) {
              localStorage.setItem('currentUser', JSON.stringify({
                username: jwtToken.name,
                token: jwtToken.token,
                time: new Date()
              }));
              localStorage.setItem('authorities', JSON.stringify(jwtToken.authorities));
            }
          }, () => {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('authorities');
          });
      }
    } else {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('authorities');
    }
  }
}
