import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from'./modules/material.module';
import { Http, HttpModule } from "@angular/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
