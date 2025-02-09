import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckUpdateComponent } from '@components/shared/check-update/check-update.component';
import { HeaderComponent } from '@components/shared/header/header.component';
import { ObjectDetectionComponent } from '@pages/object-detection/object-detection.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, CheckUpdateComponent, ObjectDetectionComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {

}
