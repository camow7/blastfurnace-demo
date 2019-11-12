import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { email: string, password: string }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  private itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;

  constructor(private afs: AngularFirestore) {
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

  update(item: Item) {
    this.itemDoc.update(item);
  }

  ngOnInit() {
  }

  onSubmit () {
    console.log(this.email + ", " + this.password);
    this.itemDoc.set({email: this.email, password: this.password});
  }



}