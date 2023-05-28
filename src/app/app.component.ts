import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  postArray: Array<string> = [
    "post 1",
    "post 2",
    "post 3",
    "post 4",
    "post 5",
  ];

  constructor() {

  }


}
