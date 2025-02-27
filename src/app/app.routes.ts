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

  {
    path:'toolbar',
    loadComponent: () =>
      import('./planillas/pt-caliente/toolbar/toolbar.component').then(
        (m) => m.ToolbarComponent
      ),
    title: 'toolbar'
  },

{
  path:'paso1',
loadComponent: () =>
  import('./planillas/pt-caliente/pasos/paso1/paso1.component').then(
    (m) => m.Paso1Component
  ),
title: 'paso1'
},

{
  path:'paso2',
loadComponent: () =>
  import('./planillas/pt-caliente/pasos/paso2/paso2.component').then(
    (m) => m.Paso2Component
  ),
title: 'paso2'
},

{
  path:'paso3',
loadComponent: () =>
  import('./planillas/pt-caliente/pasos/paso3/paso3.component').then(
    (m) => m.Paso3Component
  ),
title: 'paso3'
},

{
  path:'paso4',
loadComponent: () =>
  import('./planillas/pt-caliente/pasos/paso4/paso4.component').then(
    (m) => m.Paso4Component
  ),
title: 'paso4'
},

{
path:'paso5',
loadComponent: () =>
  import('./planillas/pt-caliente/pasos/paso5/paso5.component').then(
    (m) => m.Paso5Component
  ),
title: 'paso5'
},

{
path:'paso6',
loadComponent: () =>
  import('./planillas/pt-caliente/pasos/paso6/paso6.component').then(
    (m) => m.Paso6Component
  ),
title: 'paso6'}

];