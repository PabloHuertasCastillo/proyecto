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

  constructor(private fb: FormBuilder, private servicioUser: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.servicioUser.isLoged){
      // this.router.navigate(['/perfil']);
    }
  }

  submit(): void{
    this.servicioUser.login(this.formRegister.value).subscribe(
      respuesta => {
        this.servicioUser.guardarToken(respuesta);
        this.router.navigate(['/perfil']);
      }, error => console.log(error)
    )
  }

}
