import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsAddComponent } from './page/admin/products-add/products-add.component';
import { ProductsEditComponent } from './page/admin/products-edit/products-edit.component';
import { ProductsListComponent } from './page/admin/products-list/products-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
