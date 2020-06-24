import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PointFoodSPA';
  constructor(public userService:UserService)
  {

  }


  ngOnInit():void{
  }

}
