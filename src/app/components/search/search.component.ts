import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ProductService]
})

export class SearchComponent implements OnInit {
  categories: string[];
  formModel: FormGroup;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
    this.createForm();
  }

  createForm() {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      'title': [null, Validators.minLength(3)],
      'price': [null, positiveNumberValidator],
      'category': [-1]
    })
  }

  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}

function positiveNumberValidator(control: FormControl): any {
  if (!control.value) return null;
  const price = parseInt(control.value);
  return price === null ||
    typeof price === 'number' &&
         price > 0 ? null : {positivenumber: true};
}

// positiveNumberValidator() attempts to parse an integer value from the FormControll's value
// using the standard parseInt() function. If the parsed value is a valid positive number,
// the function returns null, meaning there are no errors. Otherwise the funciton returns an error object