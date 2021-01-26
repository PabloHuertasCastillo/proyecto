import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css']
})
export class EstructurasComponent implements OnInit {

  verdad = false;
  mentira = false;
  edad;

  constructor() { }

  ngOnInit(): void {
  }
 

  muestraLog(indice: string, numero: string) {
    console.log("Posicion: "+indice + ", Es el numero: " + numero );
  }

  muestraTabla(indice: string, numero: string) {
    
  }

}
