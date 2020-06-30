import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

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
