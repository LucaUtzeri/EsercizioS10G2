import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// importare il router nella logica Home per permettergli di navigare tra i components

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  postAttivi() {
    this.router.navigate(['/post-attivi'])
  }
  //funzioni richiamate dai bottoni con (click) in home.components.html
  postInattivi() {
    this.router.navigate(['/post-non-attivi'])
  }
}
