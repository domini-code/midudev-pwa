import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', 
    redirectTo: 'objection-detection',
    pathMatch: 'full'
  },
  {
    path: 'objection-detection',
    loadChildren: ()=> import('./pages/object-detection/detection.routes')
  }
];
