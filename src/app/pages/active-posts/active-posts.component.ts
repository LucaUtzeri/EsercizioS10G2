import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
    selector: 'app-post-attivi',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss']
})
export class PostAttiviComponent implements OnInit {
    posts!: Post[];


    constructor(private postSrv: PostsService) { }

    async ngOnInit() {
        const posts = await this.postSrv.recuperaPosts();
        this.posts = posts;
    }

    onInactivePost(id: number, i: number) {
        this.postSrv.aggiornaPost({ active: false }, id);
        this.posts.splice(i, 1);
    }
}
