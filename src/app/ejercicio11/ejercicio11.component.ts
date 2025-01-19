import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-ejercicio11',
  imports: [
    NgForOf
  ],
  templateUrl: './ejercicio11.component.html',
  styleUrl: './ejercicio11.component.css'
})
export class Ejercicio11Component {

  public listaFiguras: Figura[] = []

  constructor() {

    const figura1 = new Rectangulo(10, 20);
    const figura2 = new Circulo(50);

    this.listaFiguras = [figura1, figura2]
  }


}

export class Figura {

  public calcularArea(): number{
    return 0;
  }
}

export class Rectangulo extends Figura{

  public base: number;
  public altura: number;

  constructor(base: number, altura: number) {
    super();
    this.altura = altura;
    this.base = base;
  }

  public override calcularArea(): number {
    return this.base * this.altura;
  }
}

export class Circulo extends Figura{

  public radio: number;

  constructor(radio: number) {
    super();
    this.radio = radio;
  }

  public override calcularArea(): number {
    return Math.PI * Math.pow(this.radio, 2);
  }
}
