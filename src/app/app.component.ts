import { Component } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];
  objArray: Array<object> = [
    { id: 1, postTitle: "Post 1" },
    { id: 2, postTitle: "Post 2" },
    { id: 3, postTitle: "Post 3" },
    { id: 4, postTitle: "Post 4" },
    { id: 5, postTitle: "Post 5" },
  ];

  constructor() {
    for(let i = 0; i < this.postArray.length; i++) {
      console.log(this.postArray[i]);
    }
  }
}
