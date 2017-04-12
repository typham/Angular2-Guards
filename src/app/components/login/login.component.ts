import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, Validators} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userForm = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required],
  });
  constructor(private userService: UserService, public fb:FormBuilder, private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.userForm.value);
  }

}
