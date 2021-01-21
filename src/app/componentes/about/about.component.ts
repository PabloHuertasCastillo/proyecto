import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  nombre: string; 
  apellido: string;

  constructor() { }

  ngOnInit(): void {
  }

}
