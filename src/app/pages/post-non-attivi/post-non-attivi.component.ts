import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';


@Component({
  selector: 'app-post-non-attivi',
  templateUrl: './post-non-attivi.component.html',
  styleUrls: ['./post-non-attivi.component.scss']
})
export class PostNonAttiviComponent implements OnInit {

  posts: Post[] = [];


  constructor(private postSrv: PostsService) {
    this.postSrv.recuperaPost().then((posts) => {
      this.posts = posts;
      console.log(this.posts);

    })
  }

  ngOnInit(): void {
  }

}
