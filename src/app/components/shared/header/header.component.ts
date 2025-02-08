import { Component, input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-header',
  imports: [MatToolbarModule],
  template: `
    <mat-toolbar color="primary">
      <h1>{{ title() }}</h1>
    </mat-toolbar>
  `,
})
export class HeaderComponent {
  title = input<string>('Midudev Academia');
}
