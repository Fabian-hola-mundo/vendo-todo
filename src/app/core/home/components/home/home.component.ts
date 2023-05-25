import { Component } from '@angular/core';
import { Product } from '../../dominio/productInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent {

  isActive = false;

  products: Product[] = [
    {
      title: "Producto",
      subtitle: "subtitle",
      img: "img",
      p: "Text"
    },
    {
      title: "Producto",
      subtitle: "subtitle",
      img: "img",
      p: "Text"
    },
    {
      title: "Producto",
      subtitle: "subtitle",
      img: "img",
      p: "Text"
    },
    {
      title: "Producto",
      subtitle: "subtitle",
      img: "img",
      p: "Text"
    },
    {
      title: "Producto",
      subtitle: "subtitle",
      img: "img",
      p: "Text"
    },
    {
      title: "Producto",
      subtitle: "subtitle",
      img: "img",
      p: "Text"
    },
    {
      title: "Producto",
      subtitle: "subtitle",
      img: "img",
      p: "Text"
    },
    {
      title: "Producto",
      subtitle: "subtitle",
      img: "img",
      p: "Text"
    },
  ]

  ngOnInit(): void {

  }

}
