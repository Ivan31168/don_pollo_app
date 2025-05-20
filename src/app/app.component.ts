import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalDemoComponent } from './components/signal-demo/signal-demo.component';
import { ListadoFamiliasComponent } from './components/listado-familias/listado-familias.component';

@Component({
  selector: 'app-root', //
  imports: [RouterOutlet,ListadoFamiliasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'don_pollo_app';
}
