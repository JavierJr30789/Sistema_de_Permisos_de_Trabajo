import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './inicio/pagina-inicial/pagina-inicial.component';
import { PlantillasComponent } from './planillas/plantillas/plantillas.component';
import { PlanillasExistentesComponent } from './archivos/planillas-existentes/planillas-existentes.component';

export const routes: Routes = [
{path:'', component:PaginaInicialComponent, title:'Sistema de Permisos de Trabajo'},
{path:'planillas', component:PlantillasComponent, title:'nueva planilla'},
{path:'planillas-existentes', component:PlanillasExistentesComponent, title:'planillas existentes'}

];
