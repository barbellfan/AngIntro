import { Component, ElementRef, ViewChild } from '@angular/core';

import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postTitle: string = '';
  postDetails: string = '';
  imageURL: string = '';
  postURL: string = '';
  addBackground: boolean = false;
}
// sample image link
// https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg
