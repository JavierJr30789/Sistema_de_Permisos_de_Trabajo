import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './compartido/cabecera/cabecera.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceraComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sistema-de-Permisos-de-Trabajo';
}
