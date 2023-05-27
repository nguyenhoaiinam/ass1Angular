import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './page/admin/products-list/products-list.component';
import { ProductsAddComponent } from './page/admin/products-add/products-add.component';
import { ProductsEditComponent } from './page/admin/products-edit/products-edit.component';

const routes: Routes = [
  {path: "admin", component: ProductsListComponent},
  {path: "admin/product/add", component: ProductsAddComponent},
  {path: "admin/product/:id/edit", component: ProductsEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
