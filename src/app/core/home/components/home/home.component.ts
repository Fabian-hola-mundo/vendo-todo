import { Component } from '@angular/core';
import { Product } from '../../dominio/productInterface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent {
  products: Product[] = []
  isActive = false;

  constructor(private producService: ProductsService) {

  }

  ngOnInit(): void {
    this.producService.getProduct().subscribe(product => {
      this.products = product;
      console.log(product);

    })
  }





}
