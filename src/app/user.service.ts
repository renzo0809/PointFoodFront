import { Injectable } from '@angular/core';
import { UserLogIn } from './_model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

user:UserLogIn={logged:false};

constructor() { }
getUser():UserLogIn
{
  return this.user;
}

}
