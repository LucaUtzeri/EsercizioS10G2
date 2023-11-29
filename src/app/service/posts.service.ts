import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  async recuperaPost() {
    return await (await fetch('../../assets/db.json')).json();
    //la funzione asincrona aspetta la fetch CHE ASPETTA la risposta a sua volta
  }

  async aggiornaPost(data: Partial<Post>, id: number) {

    (await fetch('../../assets/db.json'), { method: "PUT", body: JSON.stringify(data) })

    this.recuperaPost()
  }

}