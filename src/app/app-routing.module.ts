import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './page/list-products/list-products.component';
import { AddProductComponent } from './page/add-product/add-product.component';
import { EditProductComponent } from './page/edit-product/edit-product.component';

const routes: Routes = [
  {path: "admin", component: ListProductsComponent},
  {path: "admin/product/add", component: AddProductComponent},
  {path: "admin/product/:id/edit", component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }