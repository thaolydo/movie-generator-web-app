import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../store/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  // route for API
  url = 'https://fdj1mj45a0.execute-api.us-west-1.amazonaws.com/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  addOrUpdateUser(user: User): Observable<User> {
    return this.http.put<User>(this.url, user, this.httpOptions);
  }

  deleteUser(id: string): Observable<User> {
    const userURL = `${this.url}/${id}`;
    return this.http.delete<User>(userURL, this.httpOptions);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url, this.httpOptions);
  }

  getUserById(id: string): Observable<User> {
    const userURL = `${this.url}/${id}`;
    return this.http.get<User>(userURL, this.httpOptions);
  }
}
