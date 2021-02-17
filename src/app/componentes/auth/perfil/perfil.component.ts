import { R3TargetBinder } from '@angular/compiler';
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

  borrarUsuarioPass: string;
  borrarUsuarioEmail: string;

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
        console.log(respuesta);
        this.cargarPerfil()
      }
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
        console.log(respuesta);
      }, error => { console.log(error); }
    );
  }

}
