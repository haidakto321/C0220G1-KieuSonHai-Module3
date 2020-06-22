import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {RegisterComponent} from './register/register.component';
import {RegisterFinalComponent} from './register-final/register-final.component';
import {LoginComponent} from './login/login.component';
import {DropdownTestComponent} from './dropdown-test/dropdown-test.component';


const routes: Routes = [
  {path: 'todo' , component: TodoComponent},
  {path: 'register-final', component: RegisterFinalComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dropdown-test', component: DropdownTestComponent},
    {path: '*', component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
