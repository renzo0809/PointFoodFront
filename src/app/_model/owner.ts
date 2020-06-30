import { Restaurant } from './restaurant';
export class Owner{
  ownerId?:number;
  name:string;
  phone:string;
  email:string;
  username:string;
  password:string;
  restaurant?:Restaurant[];
}
