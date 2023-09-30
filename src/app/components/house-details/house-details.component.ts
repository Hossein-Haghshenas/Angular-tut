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
  // access to route options
  route: ActivatedRoute = inject(ActivatedRoute);

  // get house details from house services
  housingService = inject(HousingService);

  housingLocation: HousingLocation | undefined;

  // form section
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);

    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }

  // apply form data function
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
