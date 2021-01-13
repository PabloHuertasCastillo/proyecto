import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  letras = ["a","b","c"];

  usuarios = [
    {
      nombre : "Manolo",
      apellido: "Fernandez"
    },
    {
      nombre : "Pablo",
      apellido: "Huertas"
    },
    {
      nombre : "Pepe",
      apellido: "Hernandez"
    }
  ]

  numero1 = 0;
  numero2 = 0;

  usuarioclic = "";

  mostrarUsuario(usuario){
    this.usuarioclic = usuario.nombre +" "+usuario.apellido;
  }

  calculaSuma(){
    return this.numero1 + this.numero2;
  }

  ngOnInit(): void {
  }

}
