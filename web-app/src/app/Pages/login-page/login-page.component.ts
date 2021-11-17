import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  async onLogin() {
    const user = await this.authService.signIn(this.email, this.password);
  }

}
