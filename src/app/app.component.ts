import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './shared/routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  AppRoutes = AppRoutes
}
