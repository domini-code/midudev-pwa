import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckUpdateComponent } from '@components/shared/check-update/check-update.component';
import { HeaderComponent } from '@components/shared/header/header.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, CheckUpdateComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {

}
