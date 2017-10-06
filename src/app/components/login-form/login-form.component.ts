import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string;
  password: string;
  errorMsg: string;

  constructor(private _auth: AuthService, private router: Router) { }

  login() {
    this._auth.login(this.email, this.password)
    .then ( () => console.log('Authenticated!'))
    .catch(error => this.errorMsg = error.message);
  }
}
