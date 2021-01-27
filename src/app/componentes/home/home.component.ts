import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelos/usuario';

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

  usuarios2: Usuario [] = [
    {
      nombre : "Juan",
      apellido: "Fernandez"
    },
    {
      nombre : "Jesus",
      apellido: "Huertas"
    },
    {
      nombre : "Jaime",
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
