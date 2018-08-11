import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _login: LoginService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):boolean | Observable<boolean> | Promise<boolean>{ 
      if(this._login.isLoggedIn()){
        console.log("hello")
        return true;
      } else {
        this.router.navigate(["/login"])
        return false
      }
    }
}
