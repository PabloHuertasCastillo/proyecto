import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelos/usuario';

@Component({
  selector: 'app-formulario-clase',
  templateUrl: './formulario-clase.component.html',
  styleUrls: ['./formulario-clase.component.css']
})
export class FormularioClaseComponent implements OnInit {

  user: Usuario = new Usuario();
  users: Usuario [] = [];

  constructor() { }

  ngOnInit(): void {
  }

  insertarUsuarios(){
    this.users.push(this.user);
    this.user = new Usuario;
    localStorage.setItem('backup', JSON.stringify(this.users));
  }

  mostrarUsuario(usuario){
    console.log(usuario)
  }

}
