import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

interface Palabras {
  palabrasClave: string
}

@Component({
  selector: 'app-ejercicio4',
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {

  palabrasClave: string[] = ["JavaScript", "Node", "Angular", "React", "TypeScript"];
  palabraBuscar: string = '';
  palabraAgregar: string = '';
  resultadoBusqueda: string = '';
  mensajeAgregar: string = '';

  //operador ternario

  buscarPalabras(palabra: string){
    const index = this.palabrasClave.indexOf(palabra);
    //index !== -1: Esta condición verifica si el valor de index es diferente de -1.
    //En el contexto de indexOf, un valor de -1 indica que la palabra no se encontró en el array.
    //?: Si la condición es verdadera (es decir, index no es -1 y la palabra se encontró en el array), se ejecuta la primera parte después del ?.
    //`La palabra ${palabra} está en la posición: ${index}`: Esta es la primera parte de la expresión condicional.
    //Si la palabra se encuentra, se devuelve un mensaje que indica la posición de la palabra en el array.
    //:: Si la condición es falsa (es decir, index es -1 y la palabra no se encontró en el array), se ejecuta la segunda parte después del :.
    return index !== -1 ? `La palabra ${palabra} está en la posición: ${index}`: `La palabra ${palabra} no existe`;
  }

  agregarPalabras(palabra: string){
    if (this.palabrasClave.indexOf(palabra) === -1){
      this.palabrasClave.push(palabra);
      return `La palabra ${palabra} ha sido agregada`;
    }else {
      return `La palabra ${palabra} ya existe y no puede ser agregada`;
    }
  }

  ordenarPalabras(){
    this.palabrasClave.sort();
  }



}
