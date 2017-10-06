import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/observable';

import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private authState: any;


  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.user = afAuth.authState;
  }

  get currentUserId(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  reset(): void {
    this.user = null;
    this.authState = null;
  }

  authUser() {
    return this.user;
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
        const status = 'online';
        this.setUserStatus(status);
        this.router.navigate(['/chat']);
      });
  }

  logout() {
    const status = 'offline';
    this.setUserStatus(status);
    this.reset();
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  signUp(email: string, password: string, displayName: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
        const status = 'online';
        this.setUserData(email, displayName, status);
      })
      .catch(err => {
        console.log(err);
      });
  }

  setUserData(email: string, displayName: string, status: string): void {
    const path = `users/${this.currentUserId}`;
    const data = {
      email: email,
      displayName: displayName,
      status: status
    };

    this.db.object(path).update(data)
      .catch(err => console.log(err));
  }

  setUserStatus(status: string): void {
    const path = `users/${this.currentUserId}`;
    const data = {
      status: status
    };

    this.db.object(path).update(data)
      .catch(err => console.log(err));
  }
}
