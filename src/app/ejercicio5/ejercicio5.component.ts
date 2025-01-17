import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-ejercicio5',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './ejercicio5.component.html',
  styleUrls: ['./ejercicio5.component.css']
})
export class Ejercicio5Component {
  banco: Banco;
  mensaje: string = '';

  constructor() {
    this.banco = new Banco();

    const cliente1 = new Cliente(1, 'Ana', 500);
    const cliente2 = new Cliente(2, 'Juan', 300);
    const cliente3 = new Cliente(3, 'Maria', 700);

    this.banco.agregarCliente(cliente1);
    this.banco.agregarCliente(cliente2);
    this.banco.agregarCliente(cliente3);

    cliente1.depositar(200);
    cliente2.retirar(100);
    if (!cliente3.retirar(900)) {
      this.mensaje = 'Saldo insuficiente para Maria';
    }
  }
}

export class Cliente {
  constructor(
    public id: number,
    public nombre: string,
    public saldo: number
  ) {}

  depositar(cantidad: number) {
    this.saldo += cantidad;
  }

  retirar(cantidad: number): boolean {
    if (this.saldo >= cantidad) {
      this.saldo -= cantidad;
      return true;
    } else {
      this.saldo = 0; // Si no tiene suficiente saldo, lo dejamos en 0
      return false;
    }
  }


  mostrarEstado(): string {
    return `Cliente: ${this.nombre} | Saldo: ${this.saldo}€`;
  }
}

export class Banco {
  clientes: Cliente[] = [];

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  buscarClientePorId(id: number): Cliente | undefined {
    return this.clientes.find(cliente => cliente.id === id);
  }

  calcularSaldoTotal(): number {
    return this.clientes.reduce((total, cliente) => total + cliente.saldo, 0);
  }
}
