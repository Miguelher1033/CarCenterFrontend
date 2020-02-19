import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './component/create-customer/create-customer.component';
import { EditCustomerComponent } from './component/edit-customer/edit-customer.component';
import {HomeComponent} from './component/home/home.component'
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'newCustomer', component: CreateCustomerComponent} ,
  { path: 'editCustomer/:documento/:tipo', component: EditCustomerComponent} ,
  {path: 'home', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }