import { Card } from './card';
export class Client{
  clientId?:number;
  name:string;
  phone:string;
  email:string;
  signedUpAt:Date;
  username:string;
  password:string;
  card?:Card[];
}
