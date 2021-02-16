import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Modelos/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listadousers',
  templateUrl: './listadousers.component.html',
  styleUrls: ['./listadousers.component.css']
})
export class ListadousersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  usuarios: User [] = [];

  obtenerUsuarios(): void {
    this.userService.obtenerTodos().subscribe(
      respuesta => {
        console.log(respuesta)
        this.usuarios = respuesta;
      },
      error => console.log(error)
    );
  }

}
