import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Note } from '../Modelos/note';
import { Mensaje } from '../Modelos/mensaje';

const url = 'http://localhost/backendphp/mensajes/';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private http: HttpClient) { }

  getMensajes(): Observable<any> {
    return this.http.get(url);
  }

  enviarMensaje(mensaje: Mensaje): Observable<any> {
    return this.http.post(url, mensaje);
  }

  borrarMensaje(id: number): Observable<any> {
    return this.http.delete(url + id);
  }



}

