import { Component } from '@angular/core';
import { Housinglocation } from '../housinglocation';
@Component({
  selector: 'app-home',
  //standalone: true,
  //imports: [CommonModule],
  // template: `
  //   <p>
  //     home works!
  //   </p>
  // `,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [
    {
      id: 9999,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: 'assets/example-house.jpg',
      availableUnits: 99,
      wifi: true,
      laundry: false,
    }
  ];
}
