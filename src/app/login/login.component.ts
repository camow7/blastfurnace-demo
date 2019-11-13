import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {AuthService} from '../auth.service'
import { Router } from '@angular/router';
export interface Item { email: string, password: string }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  private itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;

  constructor(private afs: AngularFirestore, private auth: AuthService, private router: Router) {
    //Create a reference to a document on our database
    this.itemDoc = afs.collection("users").doc("testUser");
    //Creat a variable that holds the latest values of our database document
    this.item = this.itemDoc.valueChanges();
    //Extract the data from the database doc variable
    this.item.subscribe(
      user => {
        this.email = user.email;
        this.password = user.password
      }
    )
  }

  signinWithGoogle () {
    this.auth.googleSignIn().then(() => {
      console.log("success");
      this.router.navigate(["/profile"])
      })
  }

  signOut() {
    this.auth.signOut().then(() => console.log("signed out"));
  }

  ngOnInit() {
  }

  onSubmit () {
    console.log(this.email + ", " + this.password);
    this.itemDoc.set({email: this.email, password: this.password});
  }



}