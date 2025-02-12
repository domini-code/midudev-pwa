import { Routes } from "@angular/router";

const detectionRoutes: Routes = [
  {
    path: '',
    loadComponent: ()=> import('./object-detection.component').then(c => c.ObjectDetectionComponent)
  }
]
export default detectionRoutes;