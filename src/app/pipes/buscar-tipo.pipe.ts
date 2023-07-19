import { Pipe, PipeTransform } from '@angular/core';
import { Rutas } from '../services/servicio.service';

@Pipe({
  name: 'buscarTipo'
})
export class BuscarTipoPipe implements PipeTransform {

  transform(value: Rutas[], arg: string): Rutas[] {
    const rutas=[];
    for(const ruta of value){
      if(ruta.tipo==arg){
        rutas.push(ruta);
      }
    }
    if(rutas.length>0)
      return rutas;
    else
      return value;
  }

}
