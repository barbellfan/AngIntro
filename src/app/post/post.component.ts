import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public title: string = "List of Posts";
  messagePost: string = "Message Post";

  @Input() fromParent:string = "";

  postParentMessage: string = "Message coming from the post parent";

  childMessage: string = ""

  outputChildMessage: string = "Message from Child Component Via Output";

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {

  }

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }
}
