import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { FormBuilder} from '@angular/forms';
import { IProducts } from 'src/app/interface/products';


@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent {
  constructor(
    private productService: ServiceService,
    private formBuilder: FormBuilder
  ){}

  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    img: ['']
  })

  onHandleSubmit(){
    if(this.productForm.valid){
      const product: IProducts = {
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        img: this.productForm.value.img || ""
      }
      this.productService.addProduct(product).subscribe(product => {
        console.log(product);
        
      })
    }
  }
}
