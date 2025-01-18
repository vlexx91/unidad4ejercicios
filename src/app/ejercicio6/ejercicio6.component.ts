import { Component } from '@angular/core';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ejercicio6',
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './ejercicio6.component.html',
  styleUrl: './ejercicio6.component.css'
})
export class Ejercicio6Component {

  public zoologico: Zoologico;
  public especieBusqueda = '';
  public habitatBusqueda = '';
  public resultadosEspecie: Animal[] = [];
  public resultadosHabitat: Animal[] = [];
  public nuevoHabitat: string = '';

  constructor() {

    const animal1 = new Animal('Leon', 'Marcos', 12, 'Selva');
    const animal2 = new Animal('Tigre', 'Pelusa', 9, 'Jungla');

    this.zoologico = new Zoologico();
    this.zoologico.anyadirAnimal(animal1);
    this.zoologico.anyadirAnimal(animal2);

  }

  public buscarPorEspecie(): void {
    this.resultadosEspecie = this.zoologico.animalEspecie(this.especieBusqueda);
  }

  public buscarPorHabitat(): void {
    this.resultadosHabitat = this.zoologico.animalHabitat(this.habitatBusqueda);
  }

  cambiarHabitatAnimal(animal: Animal): void {
    if (this.nuevoHabitat) {
      animal.cambiarHabitat(this.nuevoHabitat);
      console.log(animal.mostrarInformacion()); // Mostrar la información del animal con el nuevo hábitat
    }
  }

  incrementarEdadAnimal(animal: Animal): void {
    animal.incrementarEdad();
    console.log(animal.mostrarInformacion()); // Mostrar la información del animal con la edad incrementada
  }

}

export class Animal {


  constructor(
    public especie: string,
    public nombre: string,
    public edad: number,
    public habitat: string
  ) {}

  //cambiar un valor de un constructor
  public cambiarHabitat(nuevoHabitat: string){
    this.habitat = nuevoHabitat;
  }

  public incrementarEdad(): number{
    return this.edad += 1;
  }

  public mostrarInformacion(): string{
    return `Especie: ${this.especie} | Nombre: ${this.nombre} | Edad: ${this.edad} | Habitat: ${this.habitat}`;
  }

}

export class Zoologico{
  public animales: Animal[] =[];

  public anyadirAnimal(animal: Animal){
    this.animales.push(animal);
  }

  //comparacion
  public animalEspecie(especie: string): Animal[]{
    return this.animales.filter(animal => animal.especie.toLowerCase()===especie.toLowerCase());
  }

  public animalHabitat(habitat: string): Animal[]{
    return this.animales.filter(animal => animal.habitat.toLowerCase()===habitat.toLowerCase());
  }

}
