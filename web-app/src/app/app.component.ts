import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './store/models/user.model';
import { userAppState } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'movie-generator';

  constructor(private authService: AuthService, private store: Store<userAppState>) {
  }

  async onSignUp() {
    const res = await this.authService.signUp('lydo1797@gmail.com', 'test1234');
    console.log('res =', res);
  }

  async onLogin() {
    const res = await this.authService.signIn('lydo1797@gmail.com', 'test1234');
    console.log('res =', res);
  }
  userList$!: Observable<Array<User>>;
 
  ngOnInit(): void {
    this.userList$ = this.store.select((store) => store.user.users);
    console.log(this.userList$)
  }
  
}


