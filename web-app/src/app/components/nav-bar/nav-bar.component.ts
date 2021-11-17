import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { UserInfo } from 'src/app/interfaces/user-info.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  curUser: CognitoUser | null | undefined = null;
  userInfo: UserInfo | null | undefined = null;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) { }

  async ngOnInit() {
    try {
      this.curUser = await this.authService.getCurUser();
      this.userInfo = await this.authService.getUserAttributes();
    } catch (err) {
      console.log('User not logged in');
    }
  }

  async onLogout() {
    const response = await this.authService.signOut();
    console.log(response);
    this.curUser = null;
    this.userInfo = null;
    this.snackBar.open('Successfully logged out', 'close', { duration: 3000 });
  }

}
