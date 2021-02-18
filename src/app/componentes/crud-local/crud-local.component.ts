import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/Modelos/nota';

@Component({
  selector: 'app-crud-local',
  templateUrl: './crud-local.component.html',
  styleUrls: ['./crud-local.component.css']
})
export class CrudLocalComponent implements OnInit {

  notaNueva: Nota = new Nota();
  notas: Nota [] = [];
  indice: number 
  notaSeleccionada: Nota = new Nota();

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('crudLocal')!= null) {
      this.notas = JSON.parse(localStorage.getItem('crudLocal'));
      this.indice = this.notas[this.notas.length-1].id + 1;
    } else {
      this.indice = 0;
    }
  }

  insertarNota(){
    this.notaNueva.id = this.indice;
    this.indice++;
    this.notas.push(this.notaNueva);
    this.notaNueva = new Nota();
    localStorage.setItem("crudLocal",JSON.stringify(this.notas));
  }

  editarNota(notaActualizada: Nota): void {
    for (const i in this.notas) {
      if (this.notas[i].id == notaActualizada.id ) {
        this.notas[i] = notaActualizada;
        this.notaSeleccionada = new Nota();
        localStorage.setItem('crudLocal', JSON.stringify(this.notas));
      }
    }
  }

  borrarNota(notaActualizada: Nota): void {

    if (notaActualizada.id > -1) {
      this.notas.splice(this.notas.indexOf(notaActualizada), 1);
      localStorage.setItem('crudLocal', JSON.stringify(this.notas));
      this.notaSeleccionada = new Nota();
    }
  }


}
