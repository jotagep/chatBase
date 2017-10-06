import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  email: string;
  password: string;
  displayName: string;
  errorMsg: string;

  constructor(
    private _auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signUp() {
    this._auth.signUp(this.email, this.password, this.displayName)
      .then( res => this.router.navigate(['chat']))
      .catch ( err => this.errorMsg = err.message);
  }

}
