import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
    selector: 'app-post-attivi',
    templateUrl: './post-attivi.component.html',
    styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {
    posts: Post[] = [];


    constructor(private postSrv: PostsService) {
        this.postSrv.recuperaPost().then((posts) => {
            this.posts = posts;
        })

    }

    ngOnInit(): void {
    }
    updatePost(id: number) {
        this.postSrv.aggiornaPost({ active: false }, id)
    }

}
