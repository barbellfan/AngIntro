import { Component, ElementRef, ViewChild } from '@angular/core';

import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postFormText: string = '';
  postDetailsText: string = '';
  postImageUrl: string = '';
  postUrl: string = '';
  myColor: string = 'yellow';
  isChecked: boolean = false;

  toggleChecked($event: Event) {
    if (this.isChecked) {
      this.myColor = 'yellow';
    } else {
      this.myColor = 'white';
    }

    this.isChecked = !this.isChecked;
  }
}
// finish up the task, then check the solution video
// sample image link
// https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg
