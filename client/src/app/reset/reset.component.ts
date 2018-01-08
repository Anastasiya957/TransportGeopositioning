import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { AuthenticationService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'reset.component.html',
  styleUrls: ['reset.component.css']
})

export class ResetComponent implements OnInit {
  model: any = { };
  denddate: string;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

  reset() {
  }
}
