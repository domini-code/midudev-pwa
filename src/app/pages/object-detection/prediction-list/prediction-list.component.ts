import { PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Prediction } from '../models/prediction.interface';

@Component({
  selector: 'app-prediction-list',
  templateUrl: './prediction-list.component.html',
  imports: [MatCardModule, MatListModule, PercentPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PredictionListComponent {
  predictions = input<Prediction[]>([]);
}
