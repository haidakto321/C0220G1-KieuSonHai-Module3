import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {CustomerDeleteComponent} from './customer/customer-delete/customer-delete.component';
import {CustomerDetailComponent} from './customer/customer-detail/customer-detail.component';


const routes: Routes = [
  {path: 'customer', component: CustomerComponent},
  {path: 'customer-edit/:id', component: CustomerEditComponent},
  {path: 'customer/customer-delete/:id', component: CustomerDeleteComponent},
  {path: 'customer/customer-detail/:id', component: CustomerDetailComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: '*', component: CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
