import { Component, OnInit } from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
const VERSION_READY = 'VERSION_READY';
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
export class CheckUpdateComponent implements OnInit {
  newVersionAvailable = '¡Nueva versión disponible!';
  updateNow = 'Actualizar ahora';
  updateAvailable = signal(false);

  private readonly _swUpdate = inject(SwUpdate)
  private readonly _document = inject(DOCUMENT);

  ngOnInit(): void {
    if (this._swUpdate.isEnabled) {
      this._swUpdate.versionUpdates.subscribe((evt: VersionEvent) => {
        if (evt.type === VERSION_READY) {
          this.updateAvailable.set(true);
       }
     })
   }
  }

  async activateUpdate(): Promise<void> {
    await this._swUpdate.activateUpdate();
    this._document.defaultView?.location.reload();
  }
}

