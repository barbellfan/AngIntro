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

  onKeyUp($event: KeyboardEvent) {
    // The keyCode property is deprecated. Use key instead. Note
    // that 'Enter' is spelled out for that key.
    if ($event.key == 'Enter') {
      console.log("Enter entered");

    }

  }
}
