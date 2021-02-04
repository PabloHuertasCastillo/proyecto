import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { loginUser, User } from '../Modelos/user';

const url = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  registrar(usuario: User): Observable <any> {
    return this.http.post(url, usuario);
  }

  login(user: loginUser): Observable <any> {
    return this.http.post(url + "login" , user);
  }

  guardarToken(token:string): void {
    localStorage.setItem("tokenUser",token);
  }

  

}
