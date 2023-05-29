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

  dummyText: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi mollitia ut corporis, quaerat pariatur, adipisci minus tenetur ratione recusandae est totam maxime labore magnam perspiciatis quibusdam necessitatibus natus vel!';

  constructor() {

  }


}
