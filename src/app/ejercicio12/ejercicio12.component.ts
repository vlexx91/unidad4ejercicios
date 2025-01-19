import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-ejercicio12',
  imports: [
    NgForOf
  ],
  templateUrl: './ejercicio12.component.html',
  styleUrl: './ejercicio12.component.css'
})
export class Ejercicio12Component {

  public listaPago: Pago[] = [];
  public mensajesPago: string[] = [];

  constructor() {

    const pago1 = new PagoConTarjeta();
    const pago2 = new PagoConPaypal();

    this.listaPago = [pago1, pago2];

    this.procesarPagos(this.listaPago);

  }

  public procesarPagos(pagos: Pago[]){
    pagos.forEach(pago => {
      const mensaje = pago.procesarPago();
      this.mensajesPago.push(mensaje);
    });
  }
}

export class Pago {

  public procesarPago(): string{
    return `Procesando pago...`
  }

}

export class PagoConTarjeta extends Pago {

  public override procesarPago(): string {
    return `Procesando pago con tarjeta`;
  }
}

export class PagoConPaypal extends Pago{

  public override procesarPago(): string {
    return `Procesando pago con PayPal`;
  }
}
