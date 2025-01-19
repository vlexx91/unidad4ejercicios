import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-ejercicio9',
  imports: [
    NgForOf
  ],
  templateUrl: './ejercicio9.component.html',
  styleUrl: './ejercicio9.component.css'
})
export class Ejercicio9Component {

  public vehiculos: Vehiculos[] = [];
  constructor() {

    const coche1 = new Coche('Fiat', 'Punto', 2000, 4);
    const coche2 = new Coche('Nissan', 'Juke', 2015, 5);

    const moto1 = new Moto('Aprilia', 'SR50', 2006, 'Japonés');
    const moto2 = new Moto('Sym', 'JLK6', 2020, 'Europeo');


    this.vehiculos = [coche1, coche2, moto1, moto2];
  }

}

export class Vehiculos {

  constructor(
    public marca: string,
    public modelo: string,
    public anyo: number
  ) {}

  public mostrarDetalles(): string{
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anyo}`;
  }
}

export class Coche extends Vehiculos{

  public numeroPuertas: number;

  constructor(marca: string, modelo: string, anyo: number, numeroPuertas: number) {
    super(marca, modelo, anyo);
    this.numeroPuertas = numeroPuertas;
  }

  public override mostrarDetalles(): string {
    return `${super.mostrarDetalles()}, Número de puertas: ${this.numeroPuertas}`;
  }
}

export class Moto extends Vehiculos{

  public tipoDeManillar: string;

  constructor(marca: string, modelo: string, anyo: number, tipoDeManillar: string) {
    super(marca, modelo, anyo);
    this.tipoDeManillar = tipoDeManillar;
  }

  public override mostrarDetalles(): string {
    return `${super.mostrarDetalles()}, Tipo de manillar: ${this.tipoDeManillar}`;
  }
}
