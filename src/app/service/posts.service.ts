import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  async recuperaPost() {
    return await (await fetch('../../assets/db.json')).json();
    //la funzione asincrona aspetta la fetch CHE ASPETTA la risposta a sua volta
  }
}