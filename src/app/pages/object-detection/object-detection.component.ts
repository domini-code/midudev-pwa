import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Prediction } from '@pages/object-detection/models/prediction.interface';
import { PredictionListComponent } from '@pages/object-detection/prediction-list/prediction-list.component';
import { UploadCardComponent } from '@pages/object-detection/upload-card/upload-card.component';
import { ObjectDetectionService } from './object-detection.service';

@Component({
  selector: 'app-object-detection',
  imports: [UploadCardComponent, PredictionListComponent],
  templateUrl: './object-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectDetectionComponent {
  predictions = signal<Prediction[]>([]);
  file = signal<File | undefined>(undefined);

  previewSrc = signal<string | null>(null);

  private readonly _objectDetectionService = inject(ObjectDetectionService);
  isPredicting = this._objectDetectionService.isPredicting;

  handleImageUpload(file: File): void {
        debugger;
    this.file.set(file);
    this.previewSrc.set(URL.createObjectURL(file));
    this.predictions.set([]);
  }

  async predict(): Promise<void> {
    const src = this.previewSrc();
    if (!src) return;
    
    const image = new Image();
    image.src = src; 
    debugger;

    const predictions = await this._objectDetectionService.predict(image);

    this.predictions.set(predictions);

  }
}
