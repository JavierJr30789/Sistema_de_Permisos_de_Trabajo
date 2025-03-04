import { Component } from '@angular/core';
// Importaciones de PrimeNG
import { CardModule } from 'primeng/card'; // Para p-card
import { FieldsetModule } from 'primeng/fieldset'; // Para p-fieldset
import { InputTextModule } from 'primeng/inputtext'; // Para pInputText
import { CalendarModule } from 'primeng/calendar'; // Para p-calendar
import { RadioButtonModule } from 'primeng/radiobutton'; // Para p-radioButton
import { CheckboxModule } from 'primeng/checkbox'; // Para p-checkbox
import { ButtonModule } from 'primeng/button'; // Para p-button
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { DatePickerModule } from 'primeng/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from '../pt-caliente/toolbar/toolbar.component';

@Component({
  selector: 'app-pt-frio',
  standalone: true,
  imports: [FormsModule, CardModule,DatePickerModule ,RouterModule, ToolbarComponent,ReactiveFormsModule, FieldsetModule, InputTextModule, CalendarModule, RadioButtonModule, CheckboxModule, ButtonModule, DividerModule],
  templateUrl: './pt-frio.component.html',
  styleUrl: './pt-frio.component.css'
})
export class PtFrioComponent {
  fecha!: Date; // Propiedad para el p-calendar

  constructor() {
    this.fecha = new Date(); // Asigna la fecha y hora actual
} 
}
