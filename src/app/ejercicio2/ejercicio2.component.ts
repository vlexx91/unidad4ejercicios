import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';

interface Plato {
  id: number,
  nombre: string,
  precio: number
}

interface Pedido{
  id: number,
  cliente: string,
  platos: Plato[]
}


@Component({
  selector: 'app-ejercicio2',
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    CurrencyPipe
  ],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {

  //VARIABLES PARA GUARDAR RESULTADO DE LOS METODOS

  restaurante: Restaurante;
  totalVentas: number = 0;
  pedidosCliente: Pedido[] = [];
  pedidoMinimo: Pedido[] = [];

  //VARIABLES PARA EL TEMPLATE
  clienteBuscado: string = '';
  minimoPedido: number = 0;
  nuevoCliente: string = '';
  platosParaAgregar: Plato[] = [];

  constructor() {
    //CREO RESTAURANTE DE PRUEBA, RESTAURANTE LLEVA PEDIDO, Y PEDIDO LLEVA DENTRO PLATO
    this.restaurante = new Restaurante([
      new Pedido(1, "Juan", [new Plato(1, "Solomillo", 10), new Plato(2, "Pasta", 8)]),
      new Pedido(2, "Jose", [new Plato(3, "Pescado", 20), new Plato(4, "Helado", 5)])
    ]);
  }

  // AÑADE PLATO A ARRAY
  agregarPlato() {
    this.platosParaAgregar.push({ id: this.platosParaAgregar.length + 1, nombre: '', precio: 0 });
  }

  // AÑADE UN NUEVO PEDIDO

  //OJO A ESTO QUE ME HA TIRADO EL CHAT, PREGUNTAR A JOSE
  //El spread operator (...) es una característica de JavaScript/TypeScript que permite expandir los elementos de un array o propiedades de un objeto.
  //En este caso, se está utilizando para crear una copia superficial de un array (no una referencia al mismo array).

  agregarPedido() {
    const nuevoPedido = new Pedido(
      this.restaurante.pedidos.length + 1,
      this.nuevoCliente,
      [...this.platosParaAgregar] // Copia los platos ingresados
    );
    this.restaurante.agregarPedido(nuevoPedido);

    // Restablecer el formulario
    this.nuevoCliente = '';
    this.platosParaAgregar = [];
  }


  actualizarPedidosFiltrados(minimo: number) {
    this.pedidoMinimo = this.restaurante.filtrarPedidos(minimo);
  }

  actualizarTotalVentas() {
    this.totalVentas = this.restaurante.calcularTotalVentas();
  }

  actualizarPedidosCliente(cliente: string) {
    this.pedidosCliente = this.restaurante.buscarPedidos(cliente);
  }

}

class Plato {
  constructor(public id: number, public nombre: string, public precio: number ) {

  }
}

class Pedido{
  constructor(public id: number, public cliente: string, public platos: Plato[]) {
  }

  calculaTotal(): number {
    // Suma los precios de todos los platos en el pedido
    return this.platos.reduce((sum, plato)=> sum + plato.precio, 0);
  }
}

class Restaurante {
  pedidos: Pedido[] = []; // Inicializamos como un array vacío

  constructor(pedidos?: Pedido[]) { // El constructor acepta un array de pedidos opcional
    if (pedidos) { // Si se proporciona un array de pedidos al crear la instancia...
      this.pedidos = pedidos; // ...lo usamos para inicializar la propiedad 'pedidos'.
    }
  }

  agregarPedido(pedido: Pedido){
    this.pedidos.push(pedido);
  }

  calcularTotalVentas(): number {
    return this.pedidos.reduce((total, pedido) => total + pedido.calculaTotal(), 0);
  }

  buscarPedidos(cliente: string){
    return this.pedidos.filter(pedidos => pedidos.cliente.toLowerCase() === cliente.toLowerCase());
  }

  filtrarPedidos(minimo: number){
    return this.pedidos.filter(pedidos => pedidos.calculaTotal() > minimo);
  }
}
