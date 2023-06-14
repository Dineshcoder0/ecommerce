import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShabtComponent } from './shabt/shabt.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CntsComponent } from './cnts/cnts.component';
import { SucessComponent } from './sucess/sucess.component';
import { ProddetailsComponent } from './proddetails/proddetails.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'products', component:ProductsComponent},
  {path: 'shabt', component: ShabtComponent},
  {path:'sigin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {path: 'cart', component:CartComponent},
  {path:'order', component: OrderComponent},
  {path:'cnts' , component:CntsComponent},
  {path:'sucess', component:SucessComponent},
  {path: 'pro', component: ProddetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
