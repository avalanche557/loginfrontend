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
  public usernameSignup:string="";
  public emailSignup:string="";
  public passwordSignup="";
  public usernamelogin=""
  public passwordlogin=""
  constructor(public _login: LoginService) { }

  ngOnInit() {
    if(this.usernameSignup!= "" || this.emailSignup != "" || this.passwordSignup != ""){
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
    console.log(this.usernameSignup, this.emailSignup, this.passwordSignup);
    this._login.signupservice(this.usernameSignup, this.emailSignup, this.passwordSignup)
    .then(() => {
      this.login()
    }).catch((err)=>{
      if(err.status == 0){
        console.log("cannot login")
      }else{
        console.log("error")
      }
    });
  }
  
  login(){
    console.log(this.usernamelogin, this.passwordlogin);
    this._login.login(this.usernamelogin, this.passwordlogin);
  }

}
