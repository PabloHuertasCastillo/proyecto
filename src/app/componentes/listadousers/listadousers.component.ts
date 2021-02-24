import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Modelos/user';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MensajeService } from '../../services/mensaje.service';

@Component({
  selector: 'app-listadousers',
  templateUrl: './listadousers.component.html',
  styleUrls: ['./listadousers.component.css']
})
export class ListadousersComponent implements OnInit {

  constructor(private userService: UserService, private fb: FormBuilder, private mensajeService: MensajeService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  usuarios: User [] = [];
  usuarioselected: User;
  mostrar = false;
  mensajecreado = false;

  formMensaje = this.fb.group({
    idDestinatario: [''],
    mensaje: ['', Validators.required]
  });

  obtenerUsuarios(): void {
    this.userService.obtenerTodos().subscribe(
      respuesta => {

        this.usuarios = respuesta;
      },
      error => console.log(error)
    );
  }

  crearMensaje(): void{
    this.mensajeService.enviarMensaje(this.formMensaje.value).subscribe(
      respuesta => {
       console.log(respuesta);
       this.mostrar = false;
       this.mensajecreado = true;
       setTimeout( () => {
         this.mensajecreado = false;
       }, 3000);
      },
      error => { console.log(); }
      );
  }

}
