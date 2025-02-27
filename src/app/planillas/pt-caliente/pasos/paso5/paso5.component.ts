import { Component } from '@angular/core';
// Importaciones de PrimeNG
import { CardModule } from 'primeng/card'; // Para p-card
import { FieldsetModule } from 'primeng/fieldset'; // Para p-fieldset
import { InputTextModule } from 'primeng/inputtext'; // Para pInputText
import { CalendarModule } from 'primeng/calendar'; // Para p-calendar
import { RadioButtonModule } from 'primeng/radiobutton'; // Para p-radioButton
import { CheckboxModule } from 'primeng/checkbox'; // Para p-checkbox
import { ButtonModule } from 'primeng/button'; // Para p-button
//import { InputTextarea } from 'primeng/inputtextarea';  Para pInputTextarea
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { DatePickerModule } from 'primeng/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { FloatLabelModule } from 'primeng/floatlabel';


@Component({
  selector: 'app-paso5',
   standalone: true,
    imports: [FormsModule, CardModule,DatePickerModule,PanelModule, FloatLabelModule ,ReactiveFormsModule,RouterModule, FieldsetModule, InputTextModule, CalendarModule, RadioButtonModule, CheckboxModule, ButtonModule, DividerModule],
  templateUrl: './paso5.component.html',
  styleUrl: './paso5.component.css'
})
export class Paso5Component {

}
