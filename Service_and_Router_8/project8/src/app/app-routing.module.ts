import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {TodoComponent} from './todo/todo.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {ImageGalleryComponent} from './image-gallery/image-gallery.component';
import {ImgSliderComponent} from './img-slider/img-slider.component';
import {ImgComponent} from './img/img.component';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailComponent} from './blog/blog-detail/blog-detail.component';
import {BlogEditComponent} from './blog/blog-edit/blog-edit.component';
import {TodoJsonComponent} from './todo-json/todo-json.component';


const routes: Routes = [
  {path: 'timelines', component : TimelinesComponent},
  {path: 'youtube', component: YoutubePlaylistComponent,
  children: [{path: ':id', component: YoutubePlayerComponent}]},
  {path: 'dictionary', component: DictionaryComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'student-list', component: StudentListComponent,
  children: [{path: ':id', component: StudentDetailComponent}]},
  {path: 'image-gallery', component: ImageGalleryComponent},
  {path: 'img', component: ImgComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:id', component: BlogDetailComponent},
  {path: 'blog/:id/edit', component: BlogEditComponent},
  // children: [{path: ':id', component: BlogDetailComponent}, {path: ':id/edit', component: BlogEditComponent}]},
  {path: 'todo-json', component: TodoJsonComponent},
  {path: '*', component: TimelinesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
