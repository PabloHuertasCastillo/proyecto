import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { loginUser, User } from '../Modelos/user';

const url = 'http://localhost/backendphp/user/';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  obtenerPerfil(): Observable <any> {
    return this.http.get(url);
  }

  obtenerTodos(): Observable <any>{
    return this.http.get(url+'list/');
  }

  registrar(usuario: User): Observable <any> {
    return this.http.post(url, usuario);
  }

  editar(usuario: User): Observable <any> {
    return this.http.put(url, usuario);
  }

  eliminar(): Observable <any> {
    return this.http.delete(url);
  }

  login(user: loginUser): Observable <any> {
    return this.http.post(url + 'login/' , user);
  }

  subirImagen(entrada): Observable<any> {
    return this.http.post(url + 'image/', entrada);
  }

  guardarToken(token: string): void {
    localStorage.setItem('userToken', token);
  }

  isLoged(): boolean {
    return !!localStorage.getItem('userToken');
  }

  logOut(){
    localStorage.removeItem('userToken');
  }

  getToken(): string {
    return localStorage.getItem('userToken');
  }

}
