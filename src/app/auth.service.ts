import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${credential.user.uid}`);

    const data = {
      uid: credential.user.uid,
      email: credential.user.email,
      displayName: credential.user.displayName,
      photoURL: credential.user.photoURL
    };

    return userRef.set(data, { merge: true });
  }

    async signOut() {
    await this.afAuth.auth.signOut();
    }

}