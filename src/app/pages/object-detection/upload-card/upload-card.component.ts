import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-upload-card',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatListModule,
  ],
  templateUrl: './upload-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadCardComponent {
  isPredicting = input<boolean>(false);
  file = input<File | undefined>(undefined);

  fileUpload = output<File>();
  predict = output<void>();
  
  previewUrl = signal<string | null>(null);

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files?.length) {
      const newFile = input.files[0];
      if (this.previewUrl()) {
        URL.revokeObjectURL(this.previewUrl()!);
      }

      const newUrl = URL.createObjectURL(newFile);
      this.previewUrl.set(newUrl);
      this.fileUpload.emit(newFile);
    }
  }
}
