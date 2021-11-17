import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CognitoUserAttribute, ICognitoUserAttributeData } from 'amazon-cognito-identity-js';
import { UserInfo } from 'src/app/interfaces/user-info.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string = 'lydo1797@gmail.com';
  password: string = 'test1234';

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  async onLogin() {
    const user = await this.authService.signIn(this.email, this.password);
    this.snackBar.open('Successfully logged in', 'close', { duration: 3000 });
    this.router.navigate(['/landing-page']);
  }

}
