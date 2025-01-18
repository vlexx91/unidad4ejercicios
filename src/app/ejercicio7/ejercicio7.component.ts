import { Component } from '@angular/core';
import {CurrencyPipe, DecimalPipe, NgForOf} from '@angular/common';

interface Producto{
  nombre: string,
  precio: number,
  categoria: string

}

@Component({
  selector: 'app-ejercicio7',
  imports: [
    DecimalPipe,
    CurrencyPipe,
    NgForOf
  ],
  templateUrl: './ejercicio7.component.html',
  styleUrl: './ejercicio7.component.css'
})
export class Ejercicio7Component {

  public productos: Producto[] = [{
    nombre: 'Gel', precio: 10, categoria: 'Baño'
  },{
    nombre: 'Desodorante', precio: 20, categoria: 'Baño'
  },{
    nombre: 'Pringles', precio: 2.50, categoria: 'Alimentos'
  }, {
    nombre: 'Donuts', precio: 3, categoria: 'Alimentos'
  },{
    nombre: 'Fregona', precio: 15, categoria: 'Limpieza'
  }, {
    nombre: 'Escoba', precio: 4, categoria:'Limpieza'
  }];

  //creo variables para guardar resultados
  listaProductos: Producto[];
  nombreProductos: string[] = [];
  promedio: number = 0;
  productosDescuentos : Producto[] = [];


  //ahora hago mi constructor
  constructor() {

    this.listaProductos = this.productos;

    //productos superiores a 10
    this.nombreProductos = this.productos.filter(productos => productos.precio > 10).map(producto => producto.nombre);

    //promedio
    const sumaTotal = this.productos.filter(productos => productos.categoria === "Alimentos");
    this.promedio = sumaTotal.reduce((sum, productos) => sum + productos.precio, 0) / sumaTotal.length;

    //array descuento 10%
    this.productosDescuentos = this.productos.map(producto => ({...producto, precio: producto.precio * 0.9}));
  }
}
