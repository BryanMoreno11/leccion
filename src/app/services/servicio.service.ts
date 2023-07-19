import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  filtro:string="";
  private rutas: Rutas[] = [
    {
      origen: 'Ciudad A',
      destino: 'Ciudad B',
      precio: 20.50,
      descripcion: 'Ruta directa entre Ciudad A y Ciudad B',
      tipo: 'Interno',
    },
    {
      origen: 'Ciudad B',
      destino: 'Ciudad C',
      precio: 15.75,
      descripcion: 'Ruta con paradas en diversas localidades',
      tipo: 'Interno',
    },
    {
      origen: 'Ciudad C',
      destino: 'Ciudad D',
      precio: 12.00,
      descripcion: 'Ruta corta entre Ciudad C y Ciudad D',
      tipo: 'Externo',
    },
    {
      origen: 'Ciudad D',
      destino: 'Ciudad E',
      precio: 25.20,
      descripcion: 'Ruta de lujo entre Ciudad D y Ciudad E',
      tipo: 'Externo',
    },
    {
      origen: 'Ciudad E',
      destino: 'Ciudad F',
      precio: 8.50,
      descripcion: 'Ruta económica entre Ciudad E y Ciudad F',
      tipo: 'Interno',
    },
    {
      origen: 'Ciudad F',
      destino: 'Ciudad G',
      precio: 19.00,
      descripcion: 'Ruta turística entre Ciudad F y Ciudad G',
      tipo: 'Externo',
    },
    {
      origen: 'Ciudad G',
      destino: 'Ciudad H',
      precio: 11.25,
      descripcion: 'Ruta con paradas intermedias entre Ciudad G y Ciudad H',
      tipo: 'Interno',
    },
    {
      origen: 'Ciudad H',
      destino: 'Ciudad I',
      precio: 18.25,
      descripcion: 'Ruta panorámica con vistas espectaculares',
      tipo: 'Interno',
    },
    {
      origen: 'Ciudad I',
      destino: 'Ciudad J',
      precio: 14.70,
      descripcion: 'Ruta nocturna entre Ciudad I y Ciudad J',
      tipo: 'Externo',
    },
    {
      origen: 'Ciudad J',
      destino: 'Ciudad A',
      precio: 22.00,
      descripcion: 'Ruta circular entre Ciudad J y Ciudad A',
      tipo: 'Externo',
    },
  ];
  

  getRutas(){
    return this.rutas;
  }

  getRuta(idx: number):Rutas{
    return this.rutas[idx];
  }


  constructor() { }
}

export interface Rutas{
origen:string;
destino:string;
precio:number;
descripcion:string;
tipo:string;
}