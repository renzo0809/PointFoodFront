import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from '../../shared/services/client.service';
import { Router } from '@angular/router';
import { Client } from '../../_model/client';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  public clientForm:FormGroup;
  constructor(private clientService:ClientService, private router:Router) { }

  ngOnInit(): void {
    this.clientForm=new FormGroup({
      name: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      email:new FormControl('',[Validators.required,Validators.maxLength(30)]),//30
      phone:new FormControl('',[Validators.required,Validators.maxLength(9)]),//9
      username:new FormControl('',[Validators.required,Validators.maxLength(20)]),//20
    })
  }
  public createClient(clientFormValue){

    //Validation here
    this.executeClientCreation(clientFormValue);
  }
  public executeClientCreation(clientFormValue){
    let client: Client= {
      name: clientFormValue.name,
      phone:clientFormValue.phone,
      email:clientFormValue.email,
      signedUpAt: new Date(),
      username:clientFormValue.username,
      password:'prueba123',
    }

    let apiUrl='clients';
    this.clientService.create(apiUrl,client).subscribe(res=>{
      this.redirectToOwnerList();
    })
  }
  public redirectToOwnerList(){
    this.router.navigate(['admin/dashboard']);
  }

}
