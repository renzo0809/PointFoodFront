import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OwnerService } from '../../shared/services/owner.service';
import { Router } from '@angular/router';
import { Owner } from '../../_model/owner';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.css']
})
export class OwnerCreateComponent implements OnInit {

  public ownerForm:FormGroup;
  constructor(private ownerService:OwnerService, private router:Router) { }

  ngOnInit(): void {
    this.ownerForm=new FormGroup({
      name: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      email:new FormControl('',[Validators.required,Validators.maxLength(30)]),//30
      phone:new FormControl('',[Validators.required,Validators.maxLength(9)]),//9
      username:new FormControl('',[Validators.required,Validators.maxLength(20)]),//20
    })
  }
  public createOwner(ownerFormValue){

    //Validation here
    this.executeOwnerCreation(ownerFormValue);
  }
  public executeOwnerCreation(ownerFormValue){
    let owner: Owner= {
      name: ownerFormValue.name,
      phone:ownerFormValue.phone,
      email:ownerFormValue.email,
      username:ownerFormValue.username,
      password:'prueba123',

    }

    let apiUrl='restaurant-owners';
    this.ownerService.create(apiUrl,owner).subscribe(res=>{

    })
  }


}
