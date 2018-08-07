import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { flatten } from '../../../../node_modules/@angular/core/src/render3/util';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logout_icon:boolean=false;
  hide=true;
  public Username:string="";
  public Email:string="";
  public Password="";
  public Username_login=""
  public Password_login=""
  constructor(public _login: LoginService) { }

  ngOnInit() {
    if(this.Username!= "" || this.Email != "" || this.Password != ""){
    }
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessageemail() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  username = new FormControl('', [Validators.required]);

  getErrorMessageusername(){
    return this.username.hasError('required') ? 'You must enter a value':'';
  }

  signup(){
    console.log(this.Username, this.Email, this.Password);
    let json = JSON.stringify({
      username:this.Username,
      email:this.Email,
      Password:this.Password,
    })
    this._login.signupservice(json)
  }
  
  login(){
    console.log(this.Password_login, this.Username_login);
  }
}
