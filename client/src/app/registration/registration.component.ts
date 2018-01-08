import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { AuthenticationService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.css']
})

export class RegistrationComponent implements OnInit {
  model: any = { };
  denddate: string;
  loading = false;
  error = '';
  roles = ['Admin','Driver'];


  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

  submit() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        console.log(result);
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      }, error => {
        console.log(error);
        alert(error.json().message);
        this.loading = false;
      });
  }
}
