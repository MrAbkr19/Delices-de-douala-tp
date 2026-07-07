import { Component, input, output } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
export class StarRating {
  currentRating = input<number>(0);
  ratingChanged = output<number>()

  // position des etoiles
  stars = [5,4,3,2,1];

  // fonction appellé au clic sur une etoile
  onStarClick(star:number){
    this.ratingChanged.emit(star)
  }
    
  }
