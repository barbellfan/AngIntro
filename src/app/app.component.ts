import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage: string = 'Message changed';
  message: string = '';

  @ViewChild(PostComponent) childComp!: PostComponent;

  constructor() {
    console.log("constructor(): " + this.childComp);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit: " + this.childComp.title);
    console.log("ngAfterViewInit: " + this.childComp.childMessage);
    console.log("ngAfterViewInit: " + this.childComp.fromParent);
    console.log("ngAfterViewInit: " + this.childComp.postParentMessage);

    this.message = this.childComp.childMessage;
  }
}
