import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { HolaComponent } from './componentes/hola/hola.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
import { CrudContactosComponent } from './componentes/crud-contactos/crud-contactos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { UserRouterGuard } from './auth/user-router.guard';
import { ListadousersComponent } from './componentes/listadousers/listadousers.component';
import { GraficaComponent } from './Componentes/grafica/grafica.component';
import { MapaComponent } from './Componentes/mapa/mapa.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "loteria", component:LoteriaComponent},
  {path: "hola/:nombre/:apellidos", component:HolaComponent},
  {path: "tuberias", component:TuberiasComponent},
  {path: "estructuras", component:EstructurasComponent},
  {path: "formulario", component:FormularioClaseComponent},
  {path: "crud-local", component:CrudLocalComponent},
  {path: "crud", component:CrudComponent},
  {path: "contactos", component:CrudContactosComponent},
  {path: "registro", component:RegisterComponent},
  {path: "login", component:LoginComponent},
  {path: "grafica", component:GraficaComponent},
  {path: "mapa", component:MapaComponent},
  {path: "users", component:ListadousersComponent},
  {path: "perfil", component:PerfilComponent, canActivate:[UserRouterGuard]},
  {path: "**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
