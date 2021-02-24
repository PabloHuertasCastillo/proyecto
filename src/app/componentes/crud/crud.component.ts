import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/services/notas.service';
import { Note } from '../../Modelos/note';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Nota } from '../../Modelos/nota';
import { User } from 'src/app/Modelos/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  formNuevo: FormGroup = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    contenido: new FormControl('', [Validators.required]),
  });

  formEditar: FormGroup = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    contenido: new FormControl('', [Validators.required]),
  });

  temporizador: any = null;

  notas: Note [] = [];

  creado = false;

  mensaje = '';

  busqueda = '';

  notaSeleccionada: Note = new Note();

  constructor(private servicio: NotasService, private userService: UserService) { }

  ngOnInit(): void {
    this.obtenerNotas();
  }

  obtenerNotas(): void {
    this.servicio.leerNotas().subscribe(
      respuesta => {
        this.notas = respuesta;
      },
      error => console.log(error)
    );
  }

  crearNota(nota: Note) {
    this.servicio.insertarNota(nota).subscribe(
      respuesta => {
        this.mensaje = respuesta;
        this.obtenerNotas();
        this.formNuevo.reset();
        this.creado = true;
        setTimeout(() => {this.creado=false}, 3000);
      }, error => console.log(error)
    );
  }

  eliminarNota(): void {
    this.servicio.borrarNota(this.notaSeleccionada.id).subscribe(
      respuesta => {
        this.notaSeleccionada = new Note();
        this.obtenerNotas();
      },
      error => console.log(error)
    );
  }

  editarNota(): void{
    this.servicio.editarNota(this.notaSeleccionada).subscribe(
      respuesta => {
        this.mensaje = respuesta;
        this.notaSeleccionada = new Note();
        this.obtenerNotas();
        this.creado = true;
        setTimeout(() => {this.creado=false}, 3000);
      }, error => console.log(error)
    )
  }

  buscarNota() {
    this.servicio.buscarNotas(this.busqueda).subscribe(
      respuesta => {
        console.log(respuesta);
        this.notas = respuesta;
      }, error => console.log(error)
    )
  }

  buscarConRetraso(): void {
    if (this.temporizador == null){
      this.temporizador = setTimeout(() => { this.buscarNota(), this.temporizador = null}, 2000);
    }
  }

}
