webpackJsonp([1,4],{

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 119;


/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(39);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(196),
        styles: [__webpack_require__(192)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guard_index__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directive_index__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_index__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_index__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_login_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_index__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_google_maps_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_google_maps_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_index__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_index__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__directive_index__["a" /* DirectionsMapDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
            // need to determine proper way of saving such credentials
            __WEBPACK_IMPORTED_MODULE_13_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCLwE4qLzjOx0zWrvR5iZdj4v1eNNzyYmI',
                libraries: ['places']
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__services_index__["a" /* DirectionService */],
            __WEBPACK_IMPORTED_MODULE_13_angular2_google_maps_core__["GoogleMapsAPIWrapper"],
            __WEBPACK_IMPORTED_MODULE_11__services_login_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_6__guard_index__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_index__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_index__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guard_index__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_index__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_index__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guard_index__["a" /* AuthGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_index__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guard_index__["a" /* AuthGuard */]], pathMatch: 'full' },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionsMapDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DirectionsMapDirective = (function () {
    function DirectionsMapDirective(gmapsApi) {
        this.gmapsApi = gmapsApi;
    }
    DirectionsMapDirective.prototype.updateDirections = function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            if (!_this.originPlaceId || !_this.destinationPlaceId) {
                return;
            }
            var directionsService = new google.maps.DirectionsService;
            var me = _this;
            var latLngA = new google.maps.LatLng({ lat: _this.origin.latitude, lng: _this.origin.longitude });
            var latLngB = new google.maps.LatLng({ lat: _this.destination.latitude, lng: _this.destination.longitude });
            _this.directionsDisplay.setMap(map);
            _this.directionsDisplay.setOptions({
                polylineOptions: {
                    strokeWeight: 8,
                    strokeOpacity: 0.7,
                    strokeColor: '#00468c'
                }
            });
            _this.directionsDisplay.setDirections({ routes: [] });
            directionsService.route({
                origin: { placeId: _this.originPlaceId },
                destination: { placeId: _this.destinationPlaceId },
                avoidHighways: true,
                travelMode: google.maps.DirectionsTravelMode.DRIVING
                // travelMode: 'DRIVING'
            }, function (response, status) {
                if (status === 'OK') {
                    me.directionsDisplay.setDirections(response);
                    map.setZoom(30);
                    // console.log(me.getcomputeDistance (latLngA, latLngB));
                    var point = response.routes[0].legs[0];
                    me.estimatedTime = point.duration.text;
                    me.estimatedDistance = point.distance.text;
                    console.log(me.estimatedTime);
                    console.log('Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')');
                }
                else {
                    console.log('Directions request failed due to ' + status);
                }
            });
        });
    };
    DirectionsMapDirective.prototype.getComputeDistance = function (latLngA, latLngB) {
        return (google.maps.geometry.spherical.computeDistanceBetween(latLngA, latLngB) / 1000).toFixed(2);
    };
    return DirectionsMapDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "origin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "destination", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "originPlaceId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "destinationPlaceId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "waypoints", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "directionsDisplay", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "estimatedTime", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "estimatedDistance", void 0);
DirectionsMapDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'sebm-google-map-directions'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__["GoogleMapsAPIWrapper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__["GoogleMapsAPIWrapper"]) === "function" && _a || Object])
], DirectionsMapDirective);

var _a;
//# sourceMappingURL=direction.directive.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directive_index__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(mapsAPILoader, ngZone) {
        var _this = this;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        // current position
        this.lat = null;
        this.lng = null;
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by the browser');
        }
        else {
            navigator.geolocation.watchPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.iconurl = '../image/map-icon.png';
        // this.mapCustomStyles = this.getMapCusotmStyles();
        // create search FormControl
        this.destinationInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.destinationOutput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        // set current position
        this.setCurrentPosition();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocompleteInput = new google.maps.places.Autocomplete(_this.pickupInputElementRef.nativeElement, {
                types: ['address']
            });
            var autocompleteOutput = new google.maps.places.Autocomplete(_this.pickupOutputElementRef.nativeElement, {
                types: ['address']
            });
            _this.setupPlaceChangedListener(autocompleteInput, 'ORG');
            _this.setupPlaceChangedListener(autocompleteOutput, 'DES');
        });
    };
    HomeComponent.prototype.setupPlaceChangedListener = function (autocomplete, mode) {
        var _this = this;
        autocomplete.addListener('place_changed', function () {
            _this.ngZone.run(function () {
                // get the place result
                var place = autocomplete.getPlace();
                // verify result
                if (place.geometry === undefined) {
                    return;
                }
                if (mode === 'ORG') {
                    _this.vc.origin = { longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat() };
                    _this.vc.originPlaceId = place.place_id;
                }
                else {
                    // its a example aleatory position
                    _this.vc.destination = { longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat() };
                    _this.vc.destinationPlaceId = place.place_id;
                }
                if (_this.vc.directionsDisplay === undefined) {
                    _this.mapsAPILoader.load().then(function () {
                        _this.vc.directionsDisplay = new google.maps.DirectionsRenderer;
                    });
                }
                // Update the directions
                _this.vc.updateDirections();
                _this.zoom = 12;
            });
        });
    };
    HomeComponent.prototype.getDistanceAndDuration = function () {
        this.estimatedTime = this.vc.estimatedTime;
        this.estimatedDistance = this.vc.estimatedDistance;
    };
    HomeComponent.prototype.setPickUpLocation = function (place) {
        // verify result
        if (place.geometry === undefined || place.geometry === null) {
            return;
        }
        // set latitude, longitude and zoom
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.zoom = 12;
    };
    HomeComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    HomeComponent.prototype.getMapCusotmStyles = function () {
        // Write your Google Map Custom Style Code Here.
    };
    return HomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pickupInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], HomeComponent.prototype, "pickupInputElementRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pickupOutput'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], HomeComponent.prototype, "pickupOutputElementRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], HomeComponent.prototype, "scrollContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__directive_index__["a" /* DirectionsMapDirective */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__directive_index__["a" /* DirectionsMapDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__directive_index__["a" /* DirectionsMapDirective */]) === "function" && _d || Object)
], HomeComponent.prototype, "vc", void 0);
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(197),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["MapsAPILoader"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["MapsAPILoader"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _f || Object])
], HomeComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (result) {
            console.log(result);
            if (result === true) {
                _this.router.navigate(['/']);
            }
            else {
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        }, function (error) {
            alert(error.json().message);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(198),
        styles: [__webpack_require__(194)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DirectionService = (function () {
    function DirectionService(http) {
        this.http = http;
        gapi.load('client', function () { });
    }
    DirectionService.prototype.getPathBetweenTwoPoints = function (firstPoint, secondPoint) {
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
            'apiKey': __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].key,
            // Your API key will be automatically added to the Discovery Document URLs.
            'discoveryDocs': ['https://maps.googleapis.com/$discovery/rest'],
        }).then(function () {
            // 3. Initialize and make the API request.
            return gapi.client.people.people.get({
                'resourceName': 'directions/json',
                'requestMask.includeField': 'person.names'
            });
        }).then(function (response) {
            console.log(response.result);
        }, function (reason) {
            console.log('Error: ' + reason.result.error.message);
        });
    };
    return DirectionService;
}());
DirectionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], DirectionService);

var _a;
//# sourceMappingURL=direction.service.js.map

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\r\n  height: 535px;\r\n}\r\n\r\n.form-control {\r\n  width: 80% !important;\r\n  display: inline-block;\r\n}\r\n\r\n.informationSpan {\r\n  margin-left: 20px;\r\n  font-size: 2em;\r\n  font-family: \"skolar\",serif;\r\n}\r\n\r\n.row {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.navbar-brand {\r\n  padding: 5px 16px;\r\n}\r\n\r\n.navbar-brand > img {\r\n  height: 40px;\r\n}\r\n\r\n.navbar-right > a {\r\n  font-size: 1.3em;\r\n  margin-right: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\r\n  height: 535px;\r\n}\r\n\r\n.form-control {\r\n  width: 80% !important;\r\n  display: inline-block;\r\n}\r\n\r\n.informationSpan {\r\n  margin-left: 20px;\r\n  font-size: 2em;\r\n  font-family: \"skolar\",serif;\r\n}\r\n\r\n.row {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.navbar-brand {\r\n  padding: 5px 16px;\r\n}\r\n\r\n.navbar-brand > img {\r\n  height: 40px;\r\n}\r\n\r\n.navbar-right > a {\r\n  font-size: 1.3em;\r\n  margin-right: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "#form {\r\n  background-color: #FFF;\r\n  height: 600px;\r\n  width: 600px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  margin-top: 0px;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  padding: 0;\r\n  text-align:center;\r\n}\r\nlabel {\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-size: 18px;\r\n  color: #333;\r\n  height: 20px;\r\n  margin-left: 10px;\r\n  text-align: right;\r\n  margin-right:15px;\r\n}\r\n/*input {\r\n  height: 25px;\r\n  width: auto;\r\n  border: 1px solid #000;\r\n  margin-top: 10px;\r\n}*/\r\n\r\nbutton {\r\n  float:right;\r\n}\r\n\r\n.alert-danger {\r\n  color: #a94442 !important;\r\n  background-color: #f2dede;\r\n  border-color: #ebccd1;\r\n}\r\n\r\n.alert {\r\n  padding: 15px;\r\n  margin-bottom: 20px;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n}\r\n\r\n.btn {\r\n  width: 115px;\r\n  margin-right: -30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <!--<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n\n      &lt;!&ndash; Collect the nav links, forms, and other content for toggling &ndash;&gt;\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <form class=\"navbar-form navbar-left\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"#\">Link</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">Action</a></li>\n              <li><a href=\"#\">Another action</a></li>\n              <li><a href=\"#\">Something else here</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a href=\"#\">Separated link</a></li>\n            </ul>\n          </li>\n        </ul>\n      </div>&lt;!&ndash; /.navbar-collapse &ndash;&gt;\n    </div>&lt;!&ndash; /.container-fluid &ndash;&gt;\n  </nav>-->\n\n\n  <nav class=\"navbar navbar-default\">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"../assets/img/logo.png\"/> </a>\n\n    <div class=\"navbar-form navbar-right\">\n      <a href=\"#\">Sign In</a>\n    </div>\n  </nav>\n\n</div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n  <div class=\"row\">\r\n    <span class=\"col-sm-2 informationSpan\">Start point</span>\r\n    <input placeholder=\"Enter source location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\"\r\n           class=\"form-control\" #pickupInput [formControl]=\"destinationInput\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"col-sm-2 informationSpan\">End point</span>\r\n    <input placeholder=\"Enter destination\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\"\r\n           class=\"form-control\" #pickupOutput [formControl]=\"destinationOutput\">\r\n  </div>\r\n</div>\r\n<div>\r\n\r\n\r\n  <sebm-google-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\"\r\n                   [styles]=\"mapCustomStyles\">\r\n    <!-- <sebm-google-map-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"iconurl\">\r\n        <sebm-google-map-info-window>\r\n            <strong>InfoWindow content</strong>\r\n        </sebm-google-map-info-window>\r\n    </sebm-google-map-marker> -->\r\n    <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>\r\n    <sebm-google-map-directions [origin]=\"origin\" [destination]=\"destination\"></sebm-google-map-directions>\r\n  </sebm-google-map>\r\n</div>\r\n"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <form name=\"form\" #f=\"ngForm\" novalidate class=\"form-horizontal\">\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n\r\n      <label for=\"username\" class=\"col-sm-4 col-sm-offset-3 control-label\">Login</label>\r\n      <div class=\"col-sm-4\">\r\n        <input id=\"username\" type=\"text\" class=\"form-control col-sm-5\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n        <div *ngIf=\"username.errors && (username.dirty || username.touched)\"    class=\"alert alert-danger\">\r\n          <div [hidden]=\"username == undefined || username.value.length > 0\">\r\n            Login is required!\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"password\" class=\"col-sm-4 col-sm-offset-3 control-label\">Password</label>\r\n      <div class=\"col-sm-4\">\r\n        <input id=\"password\" type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n        <div *ngIf=\"password.errors && (password.dirty || password.touched)\"  class=\"alert alert-danger\">\r\n          <div [hidden]=\"password == undefined || password.value.length > 0\">\r\n            Password is required\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-1 col-sm-offset-7\">\r\n      <button [disabled]=\"loading\" (click)=\"f.form.valid && login()\" class=\"btn btn-primary\"  type=\"button\">Login</button>\r\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n      <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(120);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    key: 'AIzaSyAJuadu_mfMn6DyVBzsY91D4s231IXYAaM',
    host: 'localhost:8080'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__(126);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__direction_directive__ = __webpack_require__(130);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__direction_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(131);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(132);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__direction_service__ = __webpack_require__(133);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__direction_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__(81);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__login_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser);
        this.token = currentUser && currentUser.token;
        console.log(this.token);
        this.host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].host;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        localStorage.setItem('currentUser', JSON.stringify({ username: 'test' }));
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(true);
        /*return this.http.post(this.host + '/user/login', JSON.stringify({ name: username, password: password }), options)
          .map(response => {
    
            const jwtToken = response.json() && response.json();
            console.log(jwtToken);
            if (jwtToken) {
              this.token = jwtToken.token;
              console.log(this.token);
              localStorage.clear();
              localStorage.setItem('currentUser', JSON.stringify({ username: username, token: jwtToken.token, time: new Date()}));
              localStorage.setItem('authorities', JSON.stringify(jwtToken.authorities));
              this.authService.setRoles(jwtToken.authorities.map(role => {return role['authority']}));
              return true;
            } else {
              return false;
            }
          });*/
    };
    AuthenticationService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('currentUser');
        // this.authService.setRoles([]);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ })

},[250]);
//# sourceMappingURL=main.bundle.js.map