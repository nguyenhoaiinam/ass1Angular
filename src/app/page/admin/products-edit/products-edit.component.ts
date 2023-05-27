import { Component } from '@angular/core';
import { IProducts } from 'src/app/interface/products';
import { ServiceService } from 'src/app/service/service.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent {
  product!: IProducts;
    productForm = this.formBuilder.group({
      name: [''],
      price: [0,],
      img: ['']
    })

  constructor(
    private productService: ServiceService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ){
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
        this.productForm.patchValue({
          name: product.name,
          price: product.price,
          img: product.img
        })
      }, error => console.log(error.message))
    })
  }
  onHandleUpdate(){
    if(this.productForm.valid){
      const newProduct: IProducts = {
        id: this.product.id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        img: this.productForm.value.img || ""
      }
      this.productService.updateProduct(newProduct).subscribe(product => {
        console.log(product)
      })
    }
  }
}
