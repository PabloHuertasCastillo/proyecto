import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})



export class UserRouterGuard implements CanActivate {

  constructor(private servicioUser: UserService, private router:Router) {
  
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if ( this.servicioUser.isLoged() ) {return true; }
      else {
        this.router.navigate(['/login'])
        return false;
      }
  }
  
}
