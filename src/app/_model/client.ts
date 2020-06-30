import { Card } from './card';
export class Client{
  clientId:number;
  name:string;
  phone:string;
  email:string;
  signedUpAt:Date;
  username:string;
  card?:Card[];
}
