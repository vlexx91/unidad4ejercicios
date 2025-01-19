import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-ejercicio10',
  imports: [
    NgForOf
  ],
  templateUrl: './ejercicio10.component.html',
  styleUrl: './ejercicio10.component.css'
})

export class Ejercicio10Component {

  public empleados: Empleado[] = [];

  constructor() {

    const empleado1 = new EmpleadoPorHoras('Maikel', 'Rich', 1200, 20, 5);
    const empleado2 = new EmpleadoTiempoCompleto('Manuel', 'Bellerin', 1000, 10);

    this.empleados = [empleado1, empleado2];
  }
}

export class Empleado {

  constructor(
    public nombre: string,
    public apellido: string,
    public salario: number
  ) {}

  public mostrarDetalles(): string{
    return `Nombre: ${this.nombre}, Apellidos: ${this.apellido}, Salario: ${this.salario}`;
  }

  public calcularSalario(): number {
    return this.salario;
  }

}

export class EmpleadoTiempoCompleto extends Empleado{

  public horasExtras: number;
  public bonoHoraExtra: number = 20;

  constructor(nombre: string, apellido: string, salario: number, horasExtras: number) {
    super(nombre, apellido, salario);
    this.horasExtras = horasExtras;
  }

  public override calcularSalario(): number{
    return this.salario + (this.horasExtras * this.bonoHoraExtra);
  }

  public override mostrarDetalles(): string {
    return `${super.mostrarDetalles()}, Horas extras: ${this.horasExtras}`;
  }
}

export class EmpleadoPorHoras extends Empleado{

  public tarifaHoras: number;
  public horasTrabajadas: number;

  constructor(nombre: string, apellido: string, salario: number, tarifaHoras: number, horasTrabajadas: number) {
    super(nombre, apellido, salario);
    this.tarifaHoras = tarifaHoras;
    this.horasTrabajadas = horasTrabajadas;
  }

  public override calcularSalario(): number{
    return this.salario + (this.horasTrabajadas * this.tarifaHoras);
  }

  public override mostrarDetalles(): string {
    return `${super.mostrarDetalles()}, Horas trabajadas: ${this.horasTrabajadas}, Tarifa por hora ${this.tarifaHoras}`;
  }
}
