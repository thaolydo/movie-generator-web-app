import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  signupFirstName: string = '';
  signupLastName: string = '';
  signupEmail: string = '';
  signupPassword: string = '';
  signupConfirm: string = '';

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  async onSignUp() {
    if (this.signupPassword != this.signupConfirm) {
      this.snackBar.open('Password confirmation does not match. Please try again.', 'close', { duration: 5000 });
      return;
    }

    await this.authService.signUp(this.signupEmail, this.signupPassword);
    this.snackBar.open('Successfully logged in', 'close', { duration: 3000 });
    this.router.navigate(['/landing-page']);
  }

}
