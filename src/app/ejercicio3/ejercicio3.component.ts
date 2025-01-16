import { Component } from '@angular/core';

interface Meteorologia {
  fecha: Date,
  temperatura: number,
  humedad: number,
  precipitacion: number
}

@Component({
  selector: 'app-ejercicio3',
  imports: [],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {

  temperaturaTotal: number = 0;
  diasLluvia: number = 0;
  temperaturaMaxima: number = 0;

  dia: Meteorologia[] = [
    {fecha: new Date("2025-01-01"), humedad: 0, precipitacion: 10, temperatura: 2},
    {fecha: new Date("2025-01-02"), humedad: 1, precipitacion: 9, temperatura: 4},
    {fecha: new Date("2025-01-03"), humedad: 0, precipitacion: 11, temperatura: 4},
    {fecha: new Date("2025-01-04"), humedad: 4, precipitacion: 10, temperatura: 5},
    {fecha: new Date("2025-01-05"), humedad: 0, precipitacion: 12, temperatura: 7},
    {fecha: new Date("2025-01-06"), humedad: 2, precipitacion: 0, temperatura: 1},
    {fecha: new Date("2025-01-07"), humedad: 0, precipitacion: 10, temperatura: 0}
  ]

  calcularPromedio(): number{
    const sumaTotal = this.dia.reduce((sum, dia) => sum + dia.temperatura, 0);
    return sumaTotal / this.dia.length;
  }

  filtrarLluvia(precipitacion: number){
    return this.dia.filter(dia => dia.precipitacion > 0);
  }

  temperaturaAlta(): Meteorologia{
    return this.dia.reduce((max, dia)=> dia.temperatura > max.temperatura ? dia: max, this.dia[0]);
  }

  generarResumen(): string{
    const temperaturaPromedio = this.calcularPromedio().toFixed(1);
    const diasLluvia = this.filtrarLluvia(0).length;
    const maxTemperatura = this.temperaturaAlta();

    return `Resumen del mes:
    Dias lluviosos: ${diasLluvia},
    Temperatura promedio: ${temperaturaPromedio},
    Máxima temperatura: ${maxTemperatura.temperatura}ºC el dia ${maxTemperatura.fecha.toLocaleDateString()}`
  }

}
