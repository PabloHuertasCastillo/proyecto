import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/Modelos/contacto';

@Component({
  selector: 'app-crud-contactos',
  templateUrl: './crud-contactos.component.html',
  styleUrls: ['./crud-contactos.component.css']
})
export class CrudContactosComponent implements OnInit {

  nuevoContacto: Contacto = new Contacto();
  contactos: Contacto [] = [];
  indiceSeleccionado: number;
  indice: number;
  contactoSeleccionada: Contacto = new Contacto();

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('contactosLS')!= null) {
      this.contactos = JSON.parse(localStorage.getItem('contactosLS'));
      this.indice = this.contactos[this.contactos.length-1].id + 1;
    } else {
      this.indice = 0;
    }
  }

  insertarContacto(){
    this.nuevoContacto.id = this.indice;
    this.indice++;
    this.contactos.push(this.nuevoContacto);
    this.nuevoContacto = new Contacto();
    localStorage.setItem("contactosLS",JSON.stringify(this.contactos));
  }

  editarContacto(contactoActualizado: Contacto): void {
    for (const i in this.contactos) {
      if (this.contactos[i].id == contactoActualizado.id ) {
        this.contactos[i] = contactoActualizado;
        this.contactoSeleccionada = new Contacto();
        localStorage.setItem('contactosLS', JSON.stringify(this.contactos));
      }
    }
  }

  borrarContacto(contactoActualizado: Contacto): void {

      console.log(this.indiceSeleccionado);
      this.contactos.splice(this.indiceSeleccionado, 1);
      localStorage.setItem('contactosLS', JSON.stringify(this.contactos));
      this.contactoSeleccionada = new Contacto();
    
  }

}
