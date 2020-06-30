import { Injectable } from '@angular/core';
import { Restaurant } from './_model/restaurant';
import { Restaurants } from './_model/mock-restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

constructor() { }

getRestaurants():Restaurant[]{
  return Restaurants;
}
}
