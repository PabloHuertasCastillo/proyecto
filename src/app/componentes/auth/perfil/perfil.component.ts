import { R3TargetBinder } from '@angular/compiler';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Modelos/user';
import { UserService } from 'src/app/services/user.service';
import { dniValido } from 'src/app/validaciones/dni-valido';
import { telefonoValido } from 'src/app/validaciones/tlf-valido';
import { Mensaje } from '../../../Modelos/mensaje';
import { MensajeService } from '../../../services/mensaje.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  borrarUsuarioPass: string;
  borrarUsuarioEmail: string;
  usuario: User;
  mostrarEditar = false;
  mostrarEliminar = false;
  mensajes: Mensaje [] = [];
  mostrar = false;
  mostrar2 = false;
  mostrar3 = false;
  mensaje: string;

  

  constructor(private userService: UserService, private mensajeService: MensajeService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.cargarPerfil();
    this.cargarMensajes();
  }

  formRegister = this.fb.group({
    nombre: ['', [Validators.required]],
    apellidos: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    telefono: [ undefined, [telefonoValido()]],
    dni: ['',[Validators.required, dniValido()]]
  })

  formImagen = this.fb.group({
    imagen: ['', Validators.required],
  })

  cargarPerfil(){
    this.userService.obtenerPerfil().subscribe(
      respuesta => {
        this.usuario = respuesta;
      }, error => console.log(error)
    );
  }

  cargarMensajes(){
    this.mensajeService.getMensajes().subscribe(
      respuesta => {
        this.mensajes = respuesta;
      }, error => console.log(error)
    )
  }

  borrarMensaje(id){
    this.mensajeService.borrarMensaje(id).subscribe(
      respuesta => {
        this.mensaje = respuesta;
        this.mostrar3 = true;
        this.cargarMensajes();
        setTimeout(() => {
          this.mostrar3 = false;
        }, 2000);
      }, error => {
        this.mensaje = error.error.error;
      }
    )
  }

  // cambiaImagen(evento):void{
  //   if( evento.target.files ) {
  //     this.formImagen.get('imagen').setValue(evento.target.files[0]);
  //   }
  // }

  // subirImagen(): void{
  //   const formData = new FormData();
  //   formData.append('imagen', this.formImagen.get('imagen').value);
  //   this.userService.subirImagen(formData).subscribe(
  //     respuesta => {
  //       console.log(respuesta);
  //       this.cargarPerfil()
  //     }
  //   )
  // }

  foto: File
  tengoFoto(evento): void {
    if(evento.target.files){
      this.foto = evento.target.files[0];
    }
  }

  subirFoto(): void{
    const formData = new FormData();
    formData.append('imagen', this.foto);
    this.userService.subirImagen(formData).subscribe(
      respuesta => {
        this.mensaje = respuesta;
        this.mostrar2 = true;
        setTimeout(() => {
          this.mostrar2 = false;
        }, 2000);
        this.cargarPerfil();
      }
    )
  }

  editarPerfil(){
    this.userService.editar(this.usuario).subscribe(
      respuesta => {
        this.mostrarEditar = false;
        this.mensaje = respuesta;
        this.mostrar2 = true;
        this.cargarPerfil();
        setTimeout(() => {
          this.mostrar2 = false;
        }, 2000);
      }, error => {
        this.mensaje = error.error.error;
        this.mostrar2 = true;
        this.cargarPerfil();
        setTimeout(() => {
          this.mostrar2 = false;
        }, 2000);
      }
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



  cambiaImagen(evento): void {
    if (evento.target.files){
      this.formImagen.get('imagen').setValue(evento.target.files[0]);
    }
  }

  subirImagen(): void {
    const formData = new FormData();
    formData.append('imagen', this.formImagen.get('imagen').value);
    this.userService.subirImagen(formData).subscribe(
      respuesta => {
        this.mensaje = respuesta;
        this.mostrar2 = true;
        this.cargarPerfil();
        setTimeout(() => {
          this.mostrar2 = false;
        }, 2000);
      }, error => {
        this.mensaje = error.error.error;
        this.mostrar2 = true;
        this.cargarPerfil();
        setTimeout(() => {
          this.mostrar2 = false;
        }, 2000);
      }
    );
  }

}
