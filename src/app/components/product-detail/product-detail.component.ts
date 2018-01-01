import { Product, Review, ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarsComponent } from '../stars/stars.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export  class ProductDetailComponent {
  product: Product;
  reviews: Review[];

  newComment: string;
  newRating: number;

  //hidden show Review Form
  isReviewHidden: boolean = true;

  constructor(route: ActivatedRoute, productService: ProductService) {

    let prodId: number = parseInt(route.snapshot.params['productId']);
    this.product = productService.getProductById(prodId);

    this.reviews = productService.getReviewsForProduct(this.product.id);
  }

  addReview() {
    let review = new Review(0, this.product.id, new Date(), 'Anonymous', this.newRating, this.newComment);
    console.log("Adding review " + JSON.stringify(review));
    //The reviews array gets the values of all existing elements(...this.reviews) plus the new one (review)
    this.reviews = [...this.reviews, review];
    this.product.rating = this.averageRating(this.reviews);

    this.resetForm();
  }

  averageRating(reviews: Review[]) {
    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    // (reduce) function run for each elemnt in array (reviews) like for-loop
    // when to loop start (average) is the previously returned value of the function
    // the currentValue is review.rating
    // add the (average) and the (review.rating) = sum
    // the calculation is repeated for each (review) in the (reviews) array
    // 0 is initialValues
    let sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }

  resetForm() {
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }
}