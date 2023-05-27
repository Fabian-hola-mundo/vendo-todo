import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-upload-products',
  templateUrl: './upload-products.component.html',
  styleUrls: ['./upload-products.component.scss']
})
export class UploadProductsComponent {

formulario!: FormGroup;
inputText!: string;

products = {}

  constructor(
    private productService: ProductsService
  ) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      image: new FormControl()
    })
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(product => {
      this.products = product

    })
  }

  onSubmit() {
    console.log(this.formulario.value);
    const response =  this.productService.addProduct(this.formulario.value)
    console.log(response);
  }

}
