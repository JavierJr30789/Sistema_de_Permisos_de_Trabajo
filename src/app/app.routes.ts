import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./inicio/pagina-inicial/pagina-inicial.component').then(
        (m) => m.PaginaInicialComponent
      ),
    title: 'Sistema de Permisos de Trabajo',
  },
  {
    path: 'planillas',
    loadComponent: () =>
      import('./planillas/plantillas/plantillas.component').then(
        (m) => m.PlantillasComponent
      ),
    title: 'nueva planilla',
  },
  {
    path: 'planillas-existentes',
    loadComponent: () =>
      import('./archivos/planillas-existentes/planillas-existentes.component').then(
        (m) => m.PlanillasExistentesComponent
      ),
    title: 'planillas existentes',
  },
  {
    path: 'pt-caliente',
    loadComponent: () =>
      import('./planillas/pt-caliente/pt-caliente.component').then(
        (m) => m.PtCalienteComponent
      ),
    title: 'Permiso de trabajo en Caliente',
  },
  {
    path: 'pt-frio',
    loadComponent: () =>
      import('./planillas/pt-frio/pt-frio.component').then(
        (m) => m.PtFrioComponent
      ),
    title: 'Permiso de trabajo en Frio',
  },
];