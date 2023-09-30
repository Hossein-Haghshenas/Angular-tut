import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Services
import { HousingService } from '../housing-location/housing.service';
// Types
import { HousingLocation } from '../housing-location/housinglocation';
// Angular forms
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-house-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css'],
})
export class HouseDetailsComponent {
  // get house details from house services
  housingService = inject(HousingService);

  housingLocation: HousingLocation | undefined;

  // access to route options
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    // get house id from route
    const housingLocationId = Number(this.route.snapshot.params['id']);

    // get house details depend on house id
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }

  // Form functionality

  // create a new form structure
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  // apply form data function
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
