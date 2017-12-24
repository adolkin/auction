import { FilterPipe } from './../../pipes/filter-pipe';
import { FormControl } from '@angular/forms';
import { ProductItemComponent } from './../product-item/product-item.component';
import { CarouselComponent } from './../carousel/carousel.component';
import { Product, ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];
  titleFilter: FormControl = new FormControl();
  filterCriteria: string;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.titleFilter.valueChanges
      .debounceTime(100)
      .subscribe(
        value => this.filterCriteria = value,
        error => console.log(error)
      );
  }
} 