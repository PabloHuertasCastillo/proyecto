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

  op1: number;
  op2: number;
  resultado: number;
  operacion: string;

  constructor() { }

  ngOnInit(): void {
  }


  muestraLog(indice: string, numero: string) {
    console.log("Posicion: " + indice + ", Es el numero: " + numero);
  }

  muestraTabla(indice: string, numero: string) {

  }

  realizaOperacion() {
    switch (this.operacion) {
      case "+":
        this.resultado = this.op1 + this.op2;
        break;
      case "-":
        this.resultado = this.op1 - this.op2;
        break;
      case "/":
        this.resultado = this.op1 / this.op2;
        break;
      case "*":
        this.resultado = this.op1 * this.op2;
        break;
    }
  }

}
