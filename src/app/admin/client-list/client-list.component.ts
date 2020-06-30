import { Component, OnInit } from '@angular/core';
import { Client } from '../../_model/client';
import { ClientService } from '../../shared/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  public clients:Client[];
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  public getAllClients=()=>{
    let apiAddress:string="clients";
    this.clientService.getData(apiAddress).subscribe(res=>{
      this.clients=res as Client[];
    })
  }


}
