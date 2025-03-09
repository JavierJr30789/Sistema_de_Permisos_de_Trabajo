import { Component } from '@angular/core';
// Importaciones de PrimeNG
import { CardModule } from 'primeng/card'; // Para p-card
import { FieldsetModule } from 'primeng/fieldset'; // Para p-fieldset
import { InputTextModule } from 'primeng/inputtext'; // Para pInputText
import { CheckboxModule } from 'primeng/checkbox'; // Para p-checkbox
import { ButtonModule } from 'primeng/button'; // Para p-button
//import { InputTextarea } from 'primeng/inputtextarea';  Para pInputTextarea
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-paso2',
   standalone: true,
    imports: [CommonModule ,FormsModule,HttpClientModule, FileUploadModule, CardModule, FloatLabelModule ,ReactiveFormsModule,RouterModule, FieldsetModule, InputTextModule, CheckboxModule, ButtonModule, DividerModule],
  templateUrl: './paso2.component.html',
  styleUrl: './paso2.component.css'
})
export class Paso2Component {

  peligros = [
    { label: 'Trabajo en altura (Adjuntar Certificado de Trabajo en Altura)', cert: true, file: null, checked: false },
    { label: 'Entrada en espacio confinado (Adjuntar Certificado de Entrada en Espacio Confinado)', cert: true, file: null, checked: false },
    { label: 'Aislamiento de energía (Adjuntar Certificado de Aislamiento de Energía)', cert: true, file: null, checked: false },
    { label: 'Excavaciones (Adjuntar Certificado de Excavación)', cert: true, file: null, checked: false },
    { label: 'Trabajo con Izaje crítico (Adjuntar Certificado de Izaje)', cert: true, file: null, checked: false },
    { label: 'Trabajo con electricidad (Adjuntar Certificado de Trabajo Eléctrico y de Aislamiento de Energía)', cert: true, file: null, checked: false },
    { label: 'Trabajo en red zonas (Autorizados deben firmar este permiso como participantes)', cert: false, checked: false },
    { label: 'Trabajo crítico (definido en ERO - Evaluación de Riesgo Operacional) Indicar tarea:', cert: false, checked: false },
    { label: 'Trabajo con anulación (Bypasser) de sistema de seguridad (detallar cuales en el campo observaciones)', cert: false, checked: false }
  ];

  observaciones: string = '';

  onFileSelect(event: any, item: any) {
    if (event.files && event.files.length > 0) {
      item.file = event.files[0]; // ✅ Guardamos el archivo en el objeto correspondiente
      console.log(`Archivo seleccionado para ${item.label}:`, item.file);
    }
  }
  
}
