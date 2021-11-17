import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { UserInfo } from 'src/app/interfaces/user-info.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) { }

  async ngOnInit() {
  }

}
