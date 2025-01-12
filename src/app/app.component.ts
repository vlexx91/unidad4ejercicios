import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Ejercicio1Component} from './ejercicio1/ejercicio1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ejercicio1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unidad4ejercicios';
}
