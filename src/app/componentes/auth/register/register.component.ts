import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { dniValido } from 'src/app/validaciones/dni-valido';
import { telefonoValido } from 'src/app/validaciones/tlf-valido';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister = this.fb.group({
    nombre: ['', [Validators.required]],
    apellidos: ['',[Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    password2: ['', [Validators.required, Validators.minLength(4)]],
    email: ['',[Validators.required, Validators.email]],
    telefono: [ undefined, [telefonoValido()]],
    dni: ['',[Validators.required, dniValido()]]

  })

  constructor(private fb: FormBuilder,  private servicioUser: UserService) { }

  ngOnInit(): void {
  }

  submit(){
    if (this.formRegister.value.password == this.formRegister.value.password2) {
      this.servicioUser.registrar(this.formRegister.value).subscribe(
        respuesta => {
          console.log(respuesta);
          this.servicioUser.guardarToken(respuesta);
        }, error => console.log(error)
      );
    } else {
      alert("Las contraseñas no coinciden")
    }
    
  }

}
