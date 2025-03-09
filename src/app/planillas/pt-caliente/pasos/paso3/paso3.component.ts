import { Component } from '@angular/core';
// Importaciones de PrimeNG
import { CardModule } from 'primeng/card'; // Para p-card
import { CheckboxModule } from 'primeng/checkbox'; // Para p-checkbox
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-paso3',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule, CardModule, CheckboxModule, DividerModule, ButtonModule, RouterModule],
  templateUrl: './paso3.component.html',
  styleUrls: ['./paso3.component.css']
})
export class Paso3Component {

  requisitos = [
    { label: 'Obtener autorización del responsable por la instalación', checked: false },
    { label: 'Ventilar', checked: false },
    { label: 'Revisar que los controles identificados en la evaluación de riesgo operacional estén implementados', checked: false },

    { label: 'Realizar medición de gases (registrar en formulario de medición de gases)', checked: false },
    { label: 'Revisar equipos y herramientas', checked: false },
    { label: 'Contar con supervisor de SSMA permanente', checked: false },
      
    { label: 'Inertizar', checked: false },
    { label: 'Aislar (instalar barrera) y señalizar área de trabajo', checked: false },
    { label: 'Remover o cubrir con material ignífugo, cualquier material inflamable/combustible en un radio de 11 metros', checked: false },
    

    { label: 'Despresurizar', checked: false },
    { label: 'Definir observador de fuego (permanente)', checked: false },
    { label: 'Usar iluminación de 12-24 V', checked: false },

    { label: 'Plaquear equipo', checked: false },
    { label: 'Usar iluminación antiexplosiva', checked: false },
    { label: 'Chequear EPS específico para trabajo en caliente', checked: false },
    { label: 'Otros', checked: false, text: '' } 
    
  ];

  // Nueva lista de checkboxes para la segunda card
  equiposProteccion = [
    { label: 'Casco', checked: false },
    { label: 'Antiparras', checked: false },
    { label: 'Delantal de soldador', checked: false },
    { label: 'Botas especiales', checked: false },
    { label: 'Botines', checked: false },
    { label: 'Anteojos', checked: false },
    { label: 'Polainas', checked: false },
    { label: 'Guantes de soldador', checked: false },
    { label: 'Protector facial de Soldadura', checked: false },
    { label: 'Mangas', checked: false },
    { label: 'Protección auditiva', checked: false },
    { label: 'Protección respiratoria Tipo:', checked: false },
    { label: 'Sensor multigas', checked: false },
    { label: 'Equipo de resp. autónomo', checked: false },
    { label: 'Otros (especificar):', checked: false, text: '' }
  ];

}