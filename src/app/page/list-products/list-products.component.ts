import { Component } from '@angular/core';
import { IProducts } from 'src/app/interface/products';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  products: IProducts[] = [];
  constructor(private ProductService: ProductServiceService){
    this.ProductService.getProducts().subscribe(data => {
      this.products = data
    }, error => {
      console.log(error.message);
    })
  }
  onHandleDelete(id: any){
    this.ProductService.deleteProduct(id).subscribe(() =>{})
  }
}
