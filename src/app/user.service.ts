import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user:User={logged:false};

constructor() { }
getUser():User
{
  return this.user;
}

}
