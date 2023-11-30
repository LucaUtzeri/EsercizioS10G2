import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';


@Component({
  selector: 'app-post-non-attivi',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {
  posts!: Post[];

  constructor(private postSrv: PostsService) { }

  async ngOnInit() {
    const posts = await this.postSrv.recuperaPosts();
    this.posts = posts;
  }

  onActivePost(id: number, i: number) {
    this.postSrv.aggiornaPost({ active: true }, id);
    this.posts.splice(i, 1);
  }
}