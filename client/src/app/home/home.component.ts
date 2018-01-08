import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormControl } from '@angular/forms';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { DirectionsMapDirective } from '../directive/index';
import { RouteService } from '../services/index';
import {Route} from '../model/route';

declare const google: any;
declare const jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public destinationInput: FormControl;
  public destinationOutput: FormControl;
  public zoom: number;
  public iconurl: string;
  public estimatedTime: any;
  public estimatedDistance: any;

  // current position
  lat = null;
  lng = null;

  @ViewChild('pickupInput')
  public pickupInputElementRef: ElementRef;

  @ViewChild('pickupOutput')
  public pickupOutputElementRef: ElementRef;

  @ViewChild('scrollMe')
  private scrollContainer: ElementRef;

  @ViewChild(DirectionsMapDirective) vc: DirectionsMapDirective;

  public origin: any; // its a example aleatory position
  public destination: any; // its a example aleatory position
  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private routeService: RouteService) {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by the browser');
    } else {
      navigator.geolocation.watchPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  ngOnInit() {
    // set google maps defaults
    this.zoom = 4;
    this.latitude = 53.55;
    this.longitude = 27.33;
    this.iconurl = '../image/map-icon.png';

    // this.mapCustomStyles = this.getMapCusotmStyles();
    // create search FormControl
    this.destinationInput = new FormControl();
    this.destinationOutput = new FormControl();

    // set current position
    this.setCurrentPosition();
    // setInterval(this.setCurrentPosition, 1000);

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocompleteInput = new google.maps.places.Autocomplete(this.pickupInputElementRef.nativeElement, {
        types: ['address']
      });

      const autocompleteOutput = new google.maps.places.Autocomplete(this.pickupOutputElementRef.nativeElement, {
        types: ['address']
      });

      this.setupPlaceChangedListener(autocompleteInput, 'ORG');
      this.setupPlaceChangedListener(autocompleteOutput, 'DES');
    });
  }

  private setupPlaceChangedListener(autocomplete: any, mode: any) {
    function changeHandler() {
      // get the place result
      const place = autocomplete.getPlace();
      // verify result
      if (place.geometry === undefined) {
        return;
      }
      if (mode === 'ORG') {
        this.vc.origin = {longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat()};
        this.vc.originPlaceId = place.place_id;
      } else {
        // its a example aleatory position
        this.vc.destination = {longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat()};
        this.vc.destinationPlaceId = place.place_id;
      }

      if (this.vc.directionsDisplay === undefined) {
        this.mapsAPILoader.load().then(() => {
          this.vc.directionsDisplay = new google.maps.DirectionsRenderer;
        });
      }

      // Update the directions
      this.vc.updateDirections();
      this.zoom = 12;

      this.saveRoute();
    }

    autocomplete.addListener('place_changed', changeHandler.bind(this));
  }


  saveRoute() {
    const startPoint = this.pickupInputElementRef.nativeElement.value;
    const endPoint = this.pickupOutputElementRef.nativeElement.value;

    if (startPoint != null && startPoint !== '' && endPoint != null && endPoint !== '') {
      const route: Route = new Route();
      route.startPoint = startPoint;
      route.endPoint = endPoint;
      route.date = new Date();
      this.routeService.saveRoute(route)
        .subscribe(result => {
          console.log('New route was saved, id = ', result);
        }, error => {
          alert(error);
        });
    }
  }

  getDistanceAndDuration() {
    this.estimatedTime = this.vc.estimatedTime;
    this.estimatedDistance = this.vc.estimatedDistance;
  }

  private setPickUpLocation(place: any) {
    // verify result
    if (place.geometry === undefined || place.geometry === null) {
      return;
    }
    // set latitude, longitude and zoom
    this.latitude = place.geometry.location.lat();
    this.longitude = place.geometry.location.lng();
    this.zoom = 12;
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      console.log('i');
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      }, error => {
        console.log(error);
      }, {maximumAge: 60000, timeout: 30000, enableHighAccuracy: true});
    }
  }

  /*async setCurrentPosition() {
    if ('geolocation' in navigator) {
      console.log('i');
      await this.platform.ready();
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      }, error => {
        console.log(error);
      }, {maximumAge: 60000, timeout: 30000, enableHighAccuracy: true});
    }
  }*/

  private getMapCusotmStyles() {
    // Write your Google Map Custom Style Code Here.
  }
}
