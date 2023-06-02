import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})


export class PostComponent {
  posts: Array<any>;

  constructor(private postService: PostService) {
    this.posts = postService.postList;
  }

  addNewData() {
    let newPost = {
      id: 7,
      postTitle: "Post 7"
    }

    this.postService.addPost(newPost);
  }
}
