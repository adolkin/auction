import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent {

  private _rating: number;
  private stars: boolean[];

  private maxStarts: number = 5;

  @Input() readonly: boolean = true;
  
  @Input() get rating(): number {
    return this._rating;
  };

  set rating(value: number) {
    this._rating = value || 0;
    this.stars = Array(this.maxStarts).fill(true, 0, this.rating);
  }
  
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  fillStartsWithColor(index) {

    if(!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }
}
