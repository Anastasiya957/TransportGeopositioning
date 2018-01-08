import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  roles: string[];

  constructor() {
    const authorities = JSON.parse(localStorage.getItem('authorities'));
    if (authorities) {
      this.setRoles(authorities.map(x => x['authority']));
    }
  }

  public setRoles(userRoles: string[]) {
    this.roles = userRoles;
  }

  public hasRole(role: string): boolean {
    if (this.roles === undefined) {
      return false;
    } else {
      return this.roles.filter(x => {
          return x === role;
        }).length > 0;
    }
  }

  public isAuthorized(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  public getUserName(): string {
    return JSON.parse(localStorage.getItem('currentUser')).username;
  }
}
