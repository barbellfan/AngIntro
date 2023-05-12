import { Component } from '@angular/core';

import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bool: boolean = false;

  buttonClick() {
    console.log("Button click event worked");
  }

  onKeyUp($event: Event) {
    console.log(($event.target as HTMLInputElement).value);

  }
}
