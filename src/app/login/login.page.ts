import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication-service';
import { CognitoServiceProvider } from "../../providers/cognito-service/cognito-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
    //,public CognitoSerive: CognitoServiceProvider
  ) {}

  ngOnInit() {}

 logIn(email, password) {
    this.authService
      .SignIn(email.value, password.value)
      .then((res) => {
        if (this.authService.isEmailVerified) {
          this.router.navigate(['dashboard']);
        } else {
          window.alert('Email is not verified');
          return false;
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
 
}
