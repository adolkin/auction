import { ProductItemComponent } from './../product-item/product-item.component';
import { CarouselComponent } from './../carousel/carousel.component';
import { Product, ProductService } from './../../services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
} 