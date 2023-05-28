import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  title: string = 'Angular course';
  count: number = 285645;
  dcValue: number = 3.87654;
  price: number = 99.99;

  constructor() {

  }


}
