import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { Restaurants } from './mock-restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

constructor() { }

getRestaurants():Restaurant[]{
  return Restaurants;
}
}
