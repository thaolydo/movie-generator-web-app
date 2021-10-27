import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  signupFirstName: string = "";
  signupLastName: string = "";
  signupEmail: string = "";
  signupPassword: string = "";
  signupConfirm: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
