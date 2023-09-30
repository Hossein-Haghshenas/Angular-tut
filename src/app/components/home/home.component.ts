import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// Housing location component
import { HousingLocationComponent } from '../housing-location/housing-location.component';
// Housing location types
import { HousingLocation } from '../housing-location/housinglocation';
// Houses services
import { HousingService } from '../housing-location/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // houses list
  housingLocationList: HousingLocation[] = [];

  // inject housing services
  housingService: HousingService = inject(HousingService);

  // filtered data
  filteredLocationList: HousingLocation[] = [];

  // filter term
  searchResults: string = '';

  // filtering function
  filterResults(text: string) {
    // filter data
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );

    // check if text is empty or wrong then show all houses
    if (!text || this.filteredLocationList.length < 1) {
      this.filteredLocationList = this.housingLocationList;
    }
  }

  constructor() {
    // get all houses from houses services
    this.housingLocationList = this.housingService.getAllHousingLocations();
    // set filtered data
    this.filteredLocationList = this.housingLocationList;
  }
}
