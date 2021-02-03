import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Note } from '../Modelos/note';

const url = 'http://localhost:3000/notas/';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient ) { }

  leerNotas(): Observable<any> {
    return this.http.get(url);
  }

  insertarNota(nota: Note): Observable<any> {
    return this.http.post(url, nota);
  }

  leerNota(id: number): Observable<any> {
    return this.http.get(url + id);
  }
  
  editarNota(nota: Note): Observable<any> {
    return this.http.put(url, nota);
  }

  borrarNota(id: number): Observable<any> {
    return this.http.delete(url + id);
  }

  buscarNotas(busqueda:string): Observable<any> {
    return this.http.get(url + "?busqueda=" + busqueda);
  }

}


