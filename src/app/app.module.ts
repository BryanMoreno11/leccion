import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServicioService } from './services/servicio.service';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { BuscarTipoPipe } from './pipes/buscar-tipo.pipe';
import { RutaComponent } from './components/ruta/ruta.component';
import { BuscarCiudadPipe } from './pipes/buscar-ciudad.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    RutasComponent,
    BuscarTipoPipe,
    RutaComponent,
    BuscarCiudadPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
