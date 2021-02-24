import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { dniValido } from 'src/app/validaciones/dni-valido';
import { telefonoValido } from 'src/app/validaciones/tlf-valido';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formRegister = this.fb.group({
    nombre: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    password2: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: [undefined, [telefonoValido()]],
    dni: ['', [Validators.required, dniValido()]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioUser: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  creado = false;
  mensaje: string;

  submit() {
    if (this.formRegister.value.password == this.formRegister.value.password2) {
      this.servicioUser.registrar(this.formRegister.value).subscribe(
        (respuesta) => {
          this.mensaje = "Usuario creado correctamente, redirigiendo al perfil";
          this.servicioUser.guardarToken(respuesta);
          this.creado = true;
          setTimeout(() => {
            this.creado = false;
            this.router.navigate(['/perfil']);
          }, 2000);
        },
        (error) => {
          this.mensaje = error.error.error;
          this.creado = true;
          setTimeout(() => {
            this.creado = false;
          }, 2000);
        }
      );
    } else {
      this.mensaje = 'Las contraseñas no coinciden';
      this.creado = true;
      setTimeout(() => {
        this.creado = false;
      }, 2000);
    }
  }
}
