import { Component } from '@angular/core';
// Components
import { HomeComponent } from './components/home/home.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, SearchbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
