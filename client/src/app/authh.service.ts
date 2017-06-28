import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
@Injectable()
export class AuthhService {

  constructor(public router1: Router) { }
role;
  
  canActivate(route: ActivatedRouteSnapshot) {
    // console.log();
    var x = route.data;
    console.log(localStorage.getItem("types"))
    console.log(x)
    if (x[0].types == localStorage.getItem("types")) {
      return true;
    }
    else {
this.router1.navigate(['/'])
      return false;

    }

  }
}
