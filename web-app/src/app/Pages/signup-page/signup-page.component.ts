import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/interfaces/user-info.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  async onSignUp() {
    if (this.password != this.confirmPassword) {
      this.snackBar.open('Password confirmation does not match. Please try again.', 'close', { duration: 5000 });
      return;
    }

    const userInfo: UserInfo = {
      firstName: this.firstName,
      lastName: this.lastName,
    };
    await this.authService.signUp(this.email, this.password, userInfo);
    this.snackBar.open('Successfully signing up. Please check your email to verify the account.', 'close', { duration: 10000 });
    this.router.navigate(['/landing-page']);
  }

}
