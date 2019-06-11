import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisesComponent } from './features/paises/paises.component';
import { LoginComponent } from './features/login/login.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { NavegacionComponent } from './features/navegacion/navegacion.component';
import { PaginaNoSeEncuentraComponent } from './features/pagina-no-se-encuentra/pagina-no-se-encuentra.component';
import { CrearPaisComponent } from './features/crear-pais/crear-pais.component';
import { EditarPaisComponent } from './features/editar-pais/editar-pais.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent,
    LoginComponent,
    InicioComponent,
    NavegacionComponent,
    PaginaNoSeEncuentraComponent,
    CrearPaisComponent,
    EditarPaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
