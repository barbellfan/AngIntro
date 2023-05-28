import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  userdetails = {
    name: "User 1",
    city: "New York",
    country: "US"
  }

  constructor() {

  }


}
