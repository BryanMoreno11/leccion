import { Pipe, PipeTransform } from '@angular/core';
import { Rutas } from '../services/servicio.service';
@Pipe({
  name: 'buscarCiudad'
})
export class BuscarCiudadPipe implements PipeTransform {

  transform(value: Rutas[], arg: string): Rutas[] {
    const rutas=[];
    for(const ruta of value){
      if(ruta.origen==arg || ruta.destino==arg  ){
        rutas.push(ruta);
      }
    }
    if(rutas.length>0)
      return rutas;
    else
      return value;
  }

}
