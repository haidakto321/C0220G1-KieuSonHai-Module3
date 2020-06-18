import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingBarExampleComponent } from './rating-bar-example/rating-bar-example.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingBarComponent,
    RatingBarExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
