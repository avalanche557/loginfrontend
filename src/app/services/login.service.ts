import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http'
import {Router} from '@angular/router';
import {observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: Http,private router:Router) { }

  public header = new Headers({
    // 'Access-Control-Allow-Origin':'*',
    'Accept':'application/json',
    'Content-type':'application/json'
  })

  isLoggedIn(){
    return !(localStorage["loginData"] == null)
  }

  login(username, password){
    let json = JSON.stringify({
      username : username,
      password:password
    })
    console.log(json);
    return this.http.post("http://localhost:8000/api-tokenn-auth", json, {headers: this.header})
    .toPromise().
    then(response => {
      localStorage.setItem(
        "loginData",
        JSON.stringify({
          token:response.json().token,
          username:username
        })
      );
      localStorage.setItem("username" , username)
      this.router.navigate(["/home"]);
    }).catch((err)=>{
      console.log("error in auth", err)
      if(err.status == 0 ){
        console.log("connection error")
      }else{
        console.log("wrong username")
      }
    });
  }

  signupservice(username, email, password){
  let json = JSON.stringify({
    username:username,
    email:email,
    password:password
  });
  console.log(json)
    return this.http.post("http://localhost:8000/user/", json, {headers: this.header})
    .toPromise()
    .then(response => console.log(response));


  }
}

