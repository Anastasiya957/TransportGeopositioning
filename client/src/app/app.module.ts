import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { routing } from './app.routing';
import { AuthGuard } from './_guard/index';

import { DirectionsMapDirective } from './directive/index';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { RouteComponent } from './route/index';
import { RegistrationComponent } from './registration/index';
import { ResetComponent } from './reset/index';

import { AuthenticationService, AuthService } from './services/index';
import { DirectionService, RouteService } from './services/index';
import { AgmCoreModule, GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { HttpUtil } from './util/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RouteComponent,
    RegistrationComponent,
    ResetComponent,
    DirectionsMapDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    routing,

    // need to determine proper way of saving such credentials
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLwE4qLzjOx0zWrvR5iZdj4v1eNNzyYmI',
      libraries: ['places']
    })
  ],
  providers: [
    DirectionService,
    GoogleMapsAPIWrapper,
    AuthenticationService,
    AuthService,
    RouteService,
    AuthGuard,
    HttpUtil
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
