import { Component } from '@angular/core';
import { Product } from '../../dominio/productInterface';
import { ProductsService } from 'src/app/services/products.service';
import { ProducSelectedService } from 'src/app/services/produc-selected.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ProductComponent } from '../product/product.component';
import { GetFakeProductsService } from 'src/app/services/get-fake-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: any | Product[] = [];
  fakeProductsList: object = [];
  isActive = false;

  constructor(
    private producService: ProductsService,
    private productSelect: ProducSelectedService,
    private _bottomSheet: MatBottomSheet,
    private fakeProducts: GetFakeProductsService
  ) {}

  ngOnInit(): void {
    /*     this.producService.getProduct().subscribe(product => {
      this.products = product;
      console.log(product);

    }) */

    this.fakeProducts.getAllProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }

  onSelect(product: Product) {
    this.productSelect.establecerDatos(product);
    console.log(product);
    this._bottomSheet.open(ProductComponent);
  }
}
