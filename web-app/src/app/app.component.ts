import { Component } from '@angular/core';
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

  userList$!: Observable<Array<User>>;
  constructor(private store: Store<userAppState>) {}
  ngOnInit(): void {
    this.userList$ = this.store.select((store) => store.user.users);
    console.log(this.userList$)
  }
  
}


