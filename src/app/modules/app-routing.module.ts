import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Component} from "@angular/core"
import {LoginComponent} from '../components/login/login.component'
import { HomeComponent} from '../components/home/home.component'
import { AuthGuardService} from '../services/auth-guard.service'

const routes: Routes=[
    {path:'' , redirectTo: '/login', pathMatch:'full'},
    {path:'home', component: HomeComponent, canActivate: [AuthGuardService]},
    {path: 'login', component:LoginComponent,},
];

@NgModule ({
    imports:[RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{}