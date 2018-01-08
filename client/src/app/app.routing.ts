import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { AuthGuard } from './_guard/index';
import { RouteComponent } from './route/index';
import { RegistrationComponent } from './registration/index';
import { ResetComponent } from './reset/index';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'route', component: RouteComponent, canActivate: [AuthGuard]},
  {path: 'registration', component: RegistrationComponent},
  {path: 'reset', component: ResetComponent},
  {path: '', component: HomeComponent, canActivate: [AuthGuard], pathMatch: 'full'},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
