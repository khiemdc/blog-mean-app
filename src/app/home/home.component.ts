import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { IPost } from '../post';

// interface Ipost{
//   postTitle: string;
//   postDescription: string;
// }

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  posts: IPost[];

  //posts: Array<Post>;
  constructor(private _postService: PostService) {}

  // posts: any[] = [{
  //   postTitle: "Creating a blog site using MEAN app - 2",
  //   postDescription: "Practice with Get and Post method in a MongoDB,Express, Angular, Node.js app- 2"
  // }]

  

  ngOnInit() {this.getPosts()}

    getPosts() {
      this._postService.getPosts()
      .subscribe(
        posts => this.posts = posts
      );
    }
    // this._postService.getPosts()
    //   .subscribe(res=> this.posts = res);
  

}
