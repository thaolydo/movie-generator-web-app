import { Component, OnInit } from '@angular/core';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-resetpassword-page',
  templateUrl: './resetpassword-page.component.html',
  styleUrls: ['./resetpassword-page.component.scss']
})
export class ResetpasswordPageComponent implements OnInit {

  enteredPassword: string = '';
  confirmedPassword: string = '';
  verificationCode: string = '';
  email: string = '';
  editable = false;
  curUser: CognitoUser | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void { 
  }
  
  async onSendCode() {
    console.log('Sending code');
    this.curUser = await this.authService.sendResetPasswordCode(this.email);
  }
  
  onResetPassword() {
    console.log('Reset password');
    this.authService.resetPasswordWithCode(this.curUser!, this.verificationCode, this.enteredPassword);
  }

}
