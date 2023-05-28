import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  postObj = {
    id: 1,
    postTitle: "Post 1"
  }

  constructor() {

  }


}
