import { ChangeDetectionStrategy, Component, effect, inject, resource, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Prediction } from '@pages/object-detection/models/prediction.interface';
import { PredictionListComponent } from '@pages/object-detection/prediction-list/prediction-list.component';
import { UploadCardComponent } from '@pages/object-detection/upload-card/upload-card.component';
import { ObjectDetectionService } from './object-detection.service';

@Component({
  selector: 'app-object-detection',
  imports: [UploadCardComponent, PredictionListComponent, MatProgressSpinnerModule, MatCardModule ],
  templateUrl: './object-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectDetectionComponent {
  predictions = signal<Prediction[]>([]);
  file = signal<File | undefined>(undefined);

  previewSrc = signal<string | null>(null);

  modelRx = resource({
    loader: () => this._objectDetectionService.loadModel(),
  });

  private readonly _objectDetectionService = inject(ObjectDetectionService);
  isPredicting = this._objectDetectionService.isPredicting;

  constructor() {
    effect(() => {
      console.log('MODELRX', this.modelRx);
    })
  }


  handleImageUpload(file: File): void {
    this.file.set(file);
    this.previewSrc.set(URL.createObjectURL(file));
    this.predictions.set([]);
  }

  async predict(): Promise<void> {
    const src = this.previewSrc();
    if (!src) return;
    
    const image = new Image();
    image.src = src; 

    const predictions = await this._objectDetectionService.predict(image);

    this.predictions.set(predictions);

  }
}
