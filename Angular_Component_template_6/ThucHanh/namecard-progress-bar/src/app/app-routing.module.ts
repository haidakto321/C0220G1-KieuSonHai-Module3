import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NameCardComponent} from './name-card/name-card.component';


const routes: Routes = [
  // tslint:disable-next-line:max-line-length
  {path: 'name-card' , component: NameCardComponent, data: {cardName : 'Professional Dev' , email : 'prodev@abc.xyz' , phone : '0123456789'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
