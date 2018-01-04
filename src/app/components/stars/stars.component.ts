import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent {

  private _rating: number;
  private stars: boolean[];

  private maxStars: number = 5;

  @Input() readonly: boolean = true; //display starts only
  
  @Input() get rating(): number {
    return this._rating;
  };

  // Use the setter for the input rating. This setter can be invoked either from
  // within StarsComponent (to render an existing rating) or from its parent
  // (when the user clicks the starrs)
  set rating(value: number) {
    this._rating = value || 0;
    this.stars = Array(this.maxStars).fill(true, 0, this.rating);
  }
  
  //@Output used by the parent component to recalculate the average rating
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  fillStarsWithColor(index) {

    if(!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }
}
