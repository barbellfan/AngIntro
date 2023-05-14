import { Component } from '@angular/core';

import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bool: boolean = false;

  userNamex: string = '';
  textValue: string = 'Value is coming from component'

  buttonClick() {
    console.log("Button click event worked");
  }

  onKeyUp() {
    console.log(this.textValue);

  }
}
