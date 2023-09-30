import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: HouseDetailsComponent,
    title: 'Home details',
  },
];

export default routeConfig;
