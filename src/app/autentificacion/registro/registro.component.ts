import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  imports: [DialogModule, ButtonModule, CommonModule, FloatLabelModule, InputTextModule, FormsModule] 
})
export class RegistroComponent {
  visible: boolean = false;
  email: string = '';   //  Definir email y password para evitar errores
  password: string = '';
  nombre: string = '';
  apellido: string = '';


  show() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

 
}
