import { Component } from '@angular/core';

import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = 'Message from Typescript Component File';
  imgUrl: string = 'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg';
}
