import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';
@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent {

ruta:any=[];


  constructor(private servicio:ServicioService, private activatedRoute: ActivatedRoute,){
    this.activatedRoute.params.subscribe(params =>{
      this.ruta= servicio.getRuta(params['id']);
      console.log(this.ruta);
    })
  }
  ngOnInit():void{
    window.scroll(0,0);
  }


}
