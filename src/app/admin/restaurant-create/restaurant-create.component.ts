import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../_model/restaurant';
import { RestaurantService } from '../../shared/services/restaurant.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.css']
})
export class RestaurantCreateComponent implements OnInit {

  public restaurantForm:FormGroup;
  constructor(private ownerService:RestaurantService, private router:Router) { }

  ngOnInit(): void {
    this.restaurantForm=new FormGroup({
      name: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      address:new FormControl('',[Validators.required,Validators.maxLength(50)]),//30
      phone:new FormControl('',[Validators.required,Validators.maxLength(9)]),//9
      restaurantOwner:new FormControl('',[Validators.required,Validators.maxLength(3)]),
      punctuation: new FormControl('',[Validators.required,Validators.maxLength(1)]),
    })
  }
  public createRestaurant(restaurantFormValue){

    //Validation here
    this.executeRestaurantCreation(restaurantFormValue);
  }
  public executeRestaurantCreation(restaurantFormValue){
    let owner: Restaurant= {
      name: restaurantFormValue.name,
      address:restaurantFormValue.address,
      phone:restaurantFormValue.phone,
      restaurantOwner:restaurantFormValue.restaurantOwner,
      punctuation:restaurantFormValue.punctuation,

    }

    let apiUrl='restaurants';
    this.ownerService.create(apiUrl,owner).subscribe(res=>{

    })
  }
}
