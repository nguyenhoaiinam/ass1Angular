import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  constructor(private FormBuilder: FormBuilder,
              private ProductService: ProductServiceService
    ){}
}
