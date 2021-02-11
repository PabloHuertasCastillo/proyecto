import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Modelos/user';
import { UserService } from 'src/app/services/user.service';
import { dniValido } from 'src/app/validaciones/dni-valido';
import { telefonoValido } from 'src/app/validaciones/tlf-valido';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  borrar_usuario_pass: string;
  borrar_usuario_email: string;

  usuario: User;
  mostrarEditar = false;
  mostrarEliminar = false;

  

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.cargarPerfil();
  }

  formRegister = this.fb.group({
    nombre: ['', [Validators.required]],
    apellidos: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    telefono: [ undefined, [telefonoValido()]],
    dni: ['',[Validators.required, dniValido()]],
  })

  cargarPerfil(){
    this.userService.obtenerPerfil().subscribe(
      respuesta => {
        this.usuario = respuesta;
      }, error => console.log(error)
    )
  }

  editarPerfil(){
    this.userService.editar(this.usuario).subscribe(
      respuesta => {
        this.mostrarEditar = false;
        this.router.navigate(['/perfil']);
      }, error => console.log(error)
    );
  }

  eliminarUsuario(){
    this.userService.eliminar().subscribe(
      respuesta => {
        this.userService.logOut();
        this.mostrarEditar = false;
        this.router.navigate(['/login']);
      }, error => console.log(error)
    );
  }

}
