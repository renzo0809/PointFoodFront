import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient, private envUrl: EnvironmentUrlService) { }

  private createCompleteRoute=(route:string,envAddress:string)=>{
    return `${envAddress}/${route}`;
  }

  private generateHeaders=()=>{
    return{
    headers:new HttpHeaders({'Content-Type':'application/json'})
    };
  }

  public getData=(route:string)=>{
    return this.http.get(this.createCompleteRoute(route,this.envUrl.urlAddress));
  }

  public create(route:string,body){
    return this.http.post(this.createCompleteRoute(route,this.envUrl.urlAddress),body);
  }
}
