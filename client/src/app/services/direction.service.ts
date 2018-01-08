import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';
import {Http, RequestOptions} from '@angular/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

declare const gapi: any;

@Injectable()
export class DirectionService {
  constructor(private http: Http) {
    gapi.load('client', function() {});
  }

  getPathBetweenTwoPoints(firstPoint: string, secondPoint: string) {
    /*const params: URLSearchParams = new URLSearchParams();
    params.set('origin', firstPoint);
    params.set('destination', secondPoint);
    params.set('key', environment.key);

    const options = new RequestOptions({headers: new Headers(), search: params});

    return this.http.get('https://maps.googleapis.com/maps/api/directions/json', options)
      .map(response => {
        return response.json();
      });*/

    gapi.client.init({
      'apiKey': environment.key,
      // Your API key will be automatically added to the Discovery Document URLs.
      'discoveryDocs': ['https://maps.googleapis.com/$discovery/rest'],
      // clientId and scope are optional if auth is not required.
    }).then(function() {
      // 3. Initialize and make the API request.
      return gapi.client.people.people.get({
        'resourceName': 'directions/json',
        'requestMask.includeField': 'person.names'
      });
    }).then(function(response) {
      console.log(response.result);
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  }
}
