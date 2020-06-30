import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-log-in-admin',
  templateUrl: './log-in-admin.component.html',
  styleUrls: ['./log-in-admin.component.css']
})
export class LogInAdminComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  ingresar():void{
    this.userService.getUser().logged=true;
  }
}
