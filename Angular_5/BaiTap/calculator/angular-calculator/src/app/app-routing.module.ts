import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component';
import {ColorComponent} from './color/color.component';
import {NameBindingComponent} from './name-binding/name-binding.component';


const routes: Routes = [
  {path: 'calculator' , component: CalculatorComponent},
  {path: 'color' , component: ColorComponent},
  {path: 'name', component: NameBindingComponent},
  {path: '**', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
