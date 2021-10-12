import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword-page',
  templateUrl: './resetpassword-page.component.html',
  styleUrls: ['./resetpassword-page.component.scss']
})
export class ResetpasswordPageComponent implements OnInit {

  enteredPassword: string = ""
  confirmedPassword: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
