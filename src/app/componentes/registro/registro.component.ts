import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { telefonoValido } from '../../validaciones/tlf-valido';
import { dniValido } from "../../validaciones/dni-valido";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegister: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellidos: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dni: new FormControl('', [Validators.required, dniValido()]),
    telefono: new FormControl(undefined, [Validators.required, telefonoValido()])
  });

  formRegister2 = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    dni: ['', [Validators.required]],
    telefono: [undefined, Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  evaluaForm(){
    console.log(this.formRegister.getRawValue());
  
    if (this.formRegister.valid) {
      console.log("Formulario verificado");
    } else {
      console.log("el formulario no se ha podido verificar");
    }
  }

  get dni() {return this.formRegister.get('dni')}

}
