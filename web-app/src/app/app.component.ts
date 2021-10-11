import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-generator';

  constructor(private authService: AuthService) {
  }

  async onSignUp() {
    const res = await this.authService.signUp('lydo1797@gmail.com', 'test1234');
    console.log('res =', res);
  }

  async onLogin() {
    const res = await this.authService.signIn('lydo1797@gmail.com', 'test1234');
    console.log('res =', res);
  }
}
