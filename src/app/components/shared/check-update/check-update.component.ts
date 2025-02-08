import { Component } from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-check-update',
  template: ` 
  @if(updateAvailable()) {
    <div class="update-banner">
      <span>{{ newVersionAvailable }}</span>
      <button mat-flat-button (click)="activateUpdate()">
        <mat-icon>refresh</mat-icon>
        {{ updateNow }}
      </button>
    </div>
  }
  `,
  imports: [MatIconModule, MatButtonModule],
})
export class CheckUpdateComponent {
  newVersionAvailable = '¡Nueva versión disponible!';
  updateNow = 'Actualizar ahora';
  updateAvailable = signal(false);

  private readonly _document = inject(DOCUMENT);



  async activateUpdate(): Promise<void> {
    this._document.defaultView?.location.reload();
  }
}

