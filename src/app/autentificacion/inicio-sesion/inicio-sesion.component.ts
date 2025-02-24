import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
  imports: [DialogModule, ButtonModule, CommonModule, FloatLabelModule, InputTextModule, FormsModule] // Importar todo aquí
})
export class InicioSesionComponent {
  visible: boolean = false;
  email: string = '';   //  Definir email y password para evitar errores
  password: string = '';

  show() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

 
}

