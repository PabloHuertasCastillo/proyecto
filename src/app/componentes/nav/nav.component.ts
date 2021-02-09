import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Modelos/usuario';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private servicioUser: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  doLogout(): void {
    this.servicioUser.logOut();
    this.router.navigate(['/login']);
  }

  comprobarToken(): boolean{
    return this.servicioUser.isLoged();
    }

}
