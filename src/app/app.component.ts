import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto1';

  constructor(){
    console.log('funciones de prueba');
    console.warn("Advertencia");
    console.log("prueba de conflictos")
  }
}
