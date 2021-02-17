import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LOCALE_ID, NgModule } from '@angular/core';
import "@angular/common/locales/global/es";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './componentes/nav/nav.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { GenerarLoteriaComponent } from './componentes/generar-loteria/generar-loteria.component';
import { HolaComponent } from './componentes/hola/hola.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';
import { NumerosPipe } from './pipes/numeros.pipe';
import { DniPipe } from './pipes/dni.pipe';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
import { CrudContactosComponent } from './componentes/crud-contactos/crud-contactos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { EnviarTokenInterceptor } from './auth/enviar-token.interceptor';
import { ListadousersComponent } from './componentes/listadousers/listadousers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    LoteriaComponent,
    GenerarLoteriaComponent,
    HolaComponent,
    TuberiasComponent,
    NumerosPipe,
    DniPipe,
    EstructurasComponent,
    FormularioClaseComponent,
    CrudLocalComponent,
    CrudContactosComponent,
    RegistroComponent,
    CrudComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    ListadousersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'},
    {provide: HTTP_INTERCEPTORS, useClass: EnviarTokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
