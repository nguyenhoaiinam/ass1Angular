import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IProducts } from 'src/app/interface/products';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  constructor(
    private FormBuilder: FormBuilder,
    private ProductService: ProductServiceService
  ) { }
  productForm = this.FormBuilder.group({
    name: [''],
    price: [0],
    img: ['']
  })
  onHandleAdd(){
    const product: IProducts = {
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0,
      img: this.productForm.value.img || ""
    }
    console.log(product);
    
    this.ProductService.addProduct(product).subscribe(product => {})
  }
}
