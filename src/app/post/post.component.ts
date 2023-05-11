import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title: string = "List of Posts";
  messagePost: string = "Message Post";

  @Input() fromParent:string = "";

  postMessage: string = "A message for the post list";

  constructor() {}

  ngOnInit(): void {

  }
}
