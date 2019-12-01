import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsMainComponent } from './products/products-main/products-main.component';
import { CreateNewProductComponent } from './products/create-new-product/create-new-product.component';
import { PartnersMainComponent } from './partners/partners-main/partners-main.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'partners', component: PartnersMainComponent},
  {path: 'products', component: ProductsMainComponent},
  {path: 'createProduct', component: CreateNewProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
