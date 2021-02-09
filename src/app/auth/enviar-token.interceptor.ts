import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EnviarTokenInterceptor implements HttpInterceptor {

  constructor(private userService: UserService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let peticion = request;
    if (this.userService.isLoged()){
      peticion = request.clone({
        setHeaders: {Authorization: this.userService.getToken()}
      });
    }
    return next.handle(peticion).pipe(
      catchError(( err: HttpErrorResponse ) => {
        if (err.status === 401){
          this.userService.logOut();
          this.router.navigate(['/login']);
        }
        return throwError(err);
      })
    )
  }
}
