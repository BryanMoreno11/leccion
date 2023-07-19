import { Component } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { Rutas } from '../../services/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent {
rutas:Rutas[]=[];
 tipo="";

constructor(private _servicio:ServicioService, private router:Router){
  
}
ngOnInit(): void{

  this.rutas = this._servicio.getRutas();
  }
  
  verRuta(ob: Rutas){
    console.log(ob);
    this.router.navigate(['/ruta',this.rutas.indexOf(ob)]);
  }
}
