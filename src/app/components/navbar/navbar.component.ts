import { Observable } from 'rxjs/observable';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;
  userEmail: string;

  constructor(
    private _auth: AuthService
  ) { }

  ngOnInit() {
    this.user = this._auth.authUser();
    this.user.subscribe(user => {
      if (user) {
        this.userEmail = user.email;
      }
    });
  }

  logout() {
    this._auth.logout();
  }

}
