import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { PostAttiviComponent } from './pages/post-attivi/post-attivi.component';
import { PostNonAttiviComponent } from './pages/post-non-attivi/post-non-attivi.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'post-attivi',
    component: PostAttiviComponent
  },
  {
    path: 'post-non-attivi',
    component: PostNonAttiviComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostAttiviComponent,
    PostNonAttiviComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

