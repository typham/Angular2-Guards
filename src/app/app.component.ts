import { Component, OnInit, OnDestroy } from '@angular/core';
import {UserService } from './services/user.service';
import {AppService} from './services/app.service';
import {Subscription} from 'rxjs/subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscription:Subscription;
  userInfo = {};
  isLoggedIn:boolean = false;
  constructor(private userService:UserService, private appService:AppService){
    this.userInfo = this.userService.userInfo();
    this.isLoggedIn = this.userService.isLoggedIn();

    this.subscription = this.appService.stateChange().subscribe(()=>{
      this.userInfo = this.userService.userInfo();
      this.isLoggedIn = this.userService.isLoggedIn();
    });
  }

  OnInit(){
    
  }

  logout(){
    this.userService.logout();
  }

  OnDestroy(){
    this.subscription.unsubscribe();
  }
}
