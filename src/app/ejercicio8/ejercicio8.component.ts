import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-ejercicio8',
  imports: [
    NgForOf
  ],
  templateUrl: './ejercicio8.component.html',
  styleUrl: './ejercicio8.component.css'
})
export class Ejercicio8Component {

  public palabrasMayus: string[] = [];
  public palabrasFiltradas: string[] = [];
  public palabrasOrdenadas: string[] = [];

  //creo constructor para crear variable con el array
  constructor() {

    const palabras = ["manzana", "pera", "platano", "melon", "kiwi", "fresa"];

    //array palabras en mayus
    this.palabrasMayus = palabras.map(palabra => palabra.toUpperCase());

    //filtrar palabras + 5 letras
    this.palabrasFiltradas = palabras.filter(palabra => palabra.length > 5);

    //ordenar palabra de mayor a menor
    this.palabrasOrdenadas = [...palabras].sort((a, b)=> b.length - a.length);
  }

}
