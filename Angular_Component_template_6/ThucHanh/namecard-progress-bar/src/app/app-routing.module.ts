import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NameCardComponent} from './name-card/name-card.component';
import {NameCardParentComponent} from './name-card-parent/name-card-parent.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  // tslint:disable-next-line:max-line-length
  {path: 'name-card-parent' , component: NameCardParentComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
  {path: '*', component: NameCardParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
