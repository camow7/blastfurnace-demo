import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const paths: {}[] = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent}
]

const firebaseConfig = {
  apiKey: "AIzaSyBFUSBY61oC3b1E45eGxD-arFQNPLdyGpg",
  authDomain: "blastfurnacedemo.firebaseapp.com",
  databaseURL: "https://blastfurnacedemo.firebaseio.com",
  projectId: "blastfurnacedemo",
  storageBucket: "blastfurnacedemo.appspot.com",
  messagingSenderId: "518923278740",
  appId: "1:518923278740:web:418a76291ff5a1db2dd781",
  measurementId: "G-Q0BH7H85ED"
};

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  MDBBootstrapModule.forRoot(),
                  RouterModule.forRoot(paths),
                  AngularFireModule.initializeApp(firebaseConfig),
                  AngularFireDatabaseModule,
                  AngularFirestoreModule
                ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, LoginComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
