import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formRegister = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  creado = false;
  mensaje: string;

  constructor(private fb: FormBuilder, private servicioUser: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.servicioUser.isLoged){
      // this.router.navigate(['/perfil']);
    }
  }

  submit(): void{
    this.servicioUser.login(this.formRegister.value).subscribe(
      respuesta => {
        this.mensaje = respuesta;
        this.servicioUser.guardarToken(respuesta);
        this.creado = true;
        setTimeout(() => {
          this.creado=false;
          this.router.navigate(['/perfil']);
        }, 2000);
      }, error => {
        console.log(error), this.mensaje = error.error.error;
      } 
    )
  }

}
