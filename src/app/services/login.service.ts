import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http'
import {observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: Http) { }

  public header = new Headers({
    'access-control-allow-origin':'*',
    'Accept':'application/json',
    'Content-type':'application/json'
  })

  signupservice(json){
    console.log(json)
    return this.http.post("http://localhost:8080/users/", json, {headers: this.header}).toPromise().then(Response => console.log(Response));


  }
}

