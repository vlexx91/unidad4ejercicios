import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

interface Pelicula {
  titulo: string,
  director: string,
  anyo: number,
  genero: string,
  calificacion: number
}

@Component({
  selector: 'app-ejercicio1',
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})

export class Ejercicio1Component {

  genero: string = '';
  titulo: string = '';
  calificacion: number = 0;

  //DECLARAR UN ARRAY DE OBJETOS
  //PRIMERO LA INTERFACE FUERA DE LA CLASE Y ARRIBA DEL COMPONENT QUE SI NO ME TIRA UN ERROR ¿?¿? PREGUNTAR JOSE

  peliculas: Pelicula[] = [
    {
      titulo: "Origen",
      director: "Nolan",
      anyo: 2018,
      genero: "Thriller",
      calificacion: 9
    },
    {
      titulo: "Batman el Caballero Oscuro",
      director: "Nolan",
      anyo: 2015,
      genero: "Thriller",
      calificacion: 8
    },
    {
      titulo: "El Exorcista",
      director: "Parker",
      anyo: 1975,
      genero: "Terror",
      calificacion: 7.5
    },
    {
      titulo: "Babadook",
      director: "Grime",
      anyo: 2018,
      genero: "Terror",
      calificacion: 8.5
    },
    {
      titulo: "Resacón en las Vegas",
      director: "Griffin",
      anyo: 2013,
      genero: "Comedia",
      calificacion: 7
    },
    {
      titulo: "Los Simpson",
      director: "Groening",
      anyo: 2016,
      genero: "Comedia",
      calificacion: 8
    }
  ]

  resultadosPorGenero: Pelicula[] = [];
  mejoresPeliculas: Pelicula[] = [];
  contadorCalificacion: number = 0;

  //BUSCAR PELICULAS POR GENERO

  //La función filter evalúa cada elemento del array (pelicula) para verificar si cumple la condición (pelicula.genero === genero).
  buscarPeliculaPorGenero(genero: string){
    return this.peliculas.filter(pelicula=> pelicula.genero.toLowerCase() === genero.toLowerCase());
  }

  //SORT ORDENA, SLICE MUESTRA DESDE LA POS 0 A 3
  peliculasMejorCalificadas(calificacion: number){
    return this.peliculas.sort((a, b)=> b.calificacion - a.calificacion).slice(0,3);
  }

  calcularPromedio(): number{

    //SINTAXIS BASICA DE ARRAY.REDUCE MUY MUY IMPORTANTE

    // array.reduce((acumulador, elementoActual) => {
    // }, valorInicial POR ESO HAY QUE PONER 0, ES EL VALOR INICIAL DEL ACUMULADOR!);

    //primero declaro el total
    const sumaTotal = this.peliculas.reduce((sum, pelicula) => sum + pelicula.calificacion, 0);
    //devuelvo el total con el promedio
    return sumaTotal / this.peliculas.length;
  }

  actualizarCalificacion(titulo: string, nuevaCalificacion: number){
    const pelicula = this.peliculas.find(pelicula => pelicula.titulo.toLowerCase() === titulo.toLowerCase());
    if (pelicula){
      pelicula.calificacion = nuevaCalificacion;
    }
  }
}
