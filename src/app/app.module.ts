import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const paths: {}[] = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent}
]

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  MDBBootstrapModule.forRoot(),
                  RouterModule.forRoot(paths) 
                ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, LoginComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
