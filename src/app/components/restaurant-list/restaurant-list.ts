import { Component, computed, input, output } from '@angular/core';
import { RestaurantCard } from '../restaurant-card/restaurant-card';
import { Restaurant } from '../../models/restaurant';
@Component({
  selector: 'app-restaurant-list',
  imports: [RestaurantCard],
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css',
})
export class RestaurantList {

  restaurants = input.required<Restaurant[]>();
  restaurantRated = output<Restaurant>();
  all = "Tous";

  activeFilter = this.all;

  districts = computed(() => {
    const allDistricts = this.restaurants().map(r => r.district);
    // Le Set supprime automatiquement les doublons, puis [... ] redonne un tableau
    return [...new Set(allDistricts)];
  });
  setActive(filter: string) { 
    this.activeFilter = filter; 
  }
}
