import { Component } from '@angular/core';
import { Housinglocation } from '../housinglocation';
@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  housingLocation: Housinglocation[] = [
    {
      id: 9999,
      name: 'Test Home 1',
      city: 'Test city',
      state: 'ST',
      photo: 'assets\\image1.jpg',
      availableUnits: 99,
      wifi: true,
      laundry: false,
    }, 
    {
      id: 9999,
      name: 'Test Home 2',
      city: 'Test city',
      state: 'ST',
      photo: 'assets\\image1.jpg',
      availableUnits: 99,
      wifi: true,
      laundry: false,
    }, 
  ]
}
