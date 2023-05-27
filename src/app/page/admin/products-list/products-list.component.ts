import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { IProducts } from 'src/app/interface/products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: IProducts[] = [];

  constructor(private productService : ServiceService){
    this.productService.getProducts().subscribe(data => {
      this.products = [data]
      console.log(data);
      
    }, error => {console.log(error.message);
    })
  }
}
