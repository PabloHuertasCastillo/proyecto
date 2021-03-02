import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  mapa: any;

  constructor() { }

  ngOnInit(): void {
    this.mapa = L.map('seccionmapa').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom:19
    }).addTo(this.mapa);

    L.marker([51.5, -0.09]).addTo(this.mapa)
    .bindPopup('Estamos <br> aquí')
    .openPopup();
  }

}
