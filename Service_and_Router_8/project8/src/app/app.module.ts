import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { TodoComponent } from './todo/todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import {ImageGalleryModule} from './image-gallery/image-gallery.module';
import {GalleryConfig} from './image-gallery/token';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ImgSliderModule} from './img-slider/img-slider.module';
import { ImgComponent } from './img/img.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {BlogDetailComponent} from './blog/blog-detail/blog-detail.component';
import {BlogEditComponent} from './blog/blog-edit/blog-edit.component';
import {BlogComponent} from './blog/blog.component';
import {BlogModule} from './blog/blog.module';
import { TodoJsonComponent } from './todo-json/todo-json.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictionaryComponent,
    TodoComponent,
    LoginComponent,
    RegisterComponent,
    StudentListComponent,
    StudentDetailComponent,
    ImgComponent,
    TodoJsonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ImageGalleryModule,
    ImgSliderModule,
    NgbModule,
    HttpClientModule,
    BlogModule
  ],
  providers: [
    {provide: GalleryConfig, useValue: 2},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
