import { Component } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

constructor(private servicio:ServicioService ) {
  
}

  
  filtro:string="";
  search(){
    this.servicio.filtro=this.filtro;
    console.log(this.filtro);
  }
}
