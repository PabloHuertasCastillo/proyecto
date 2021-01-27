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

}
