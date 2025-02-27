import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { DatePickerModule } from 'primeng/datepicker';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [DividerModule, DatePickerModule, CalendarModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  fecha!: Date; // Propiedad para el p-calendar

  constructor() {
    this.fecha = new Date(); // Asigna la fecha y hora actual
  }

  
}
