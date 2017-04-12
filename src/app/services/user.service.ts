import { Injectable } from '@angular/core';
import { HttpClient } from '../common/HttpClient';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

import { AppService} from './app.service';

@Injectable()
export class UserService {
  private urlApi:string = 'http://58ddd2cc91f417120010ab92.mockapi.io/api/users';
  constructor(private appService:AppService, private http:HttpClient, private router:Router) { }

  login(item:any){
    this.http.get(this.urlApi).subscribe(res=>{
      res.json().forEach(user => {
        if (user.username == item.username && user.password == item.password) {
          localStorage.setItem('username',user.username);
          localStorage.setItem('access_token',user.username);
        }

        this.appService.changeMenuState();
        this.router.navigate(['']);
      });
    });
  }

  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('access_token');
    this.appService.changeMenuState();
    this.router.navigate(['/login']);
  }

  userInfo(){
    return {
      username: localStorage.getItem('username')
    }
  }

  isLoggedIn(){
    console.log(localStorage.getItem('access_token')==null?false:true);
    return localStorage.getItem('access_token')==null?false:true;
  }
}
