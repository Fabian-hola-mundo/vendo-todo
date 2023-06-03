import { Component } from '@angular/core';
import { ProducSelectedService } from 'src/app/services/produc-selected.service';
import { Product } from '../../dominio/productInterface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  product!: any | Product

  constructor(
    public producSelect: ProducSelectedService
  ){

  }

  ngOnInit(): void {
    this.product = this.producSelect.obtenerDatos()
  }

}
