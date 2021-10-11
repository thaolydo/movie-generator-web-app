import { Injectable } from '@angular/core';
import { AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool, ISignUpResult } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';

/*
  Follow tutorial here: https://www.npmjs.com/package/amazon-cognito-identity-js
*/
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userPool: CognitoUserPool;

  constructor() {
    this.userPool = new CognitoUserPool({
      UserPoolId: environment.userPoolId,
      ClientId: environment.userPoolClientId,
    });
  }

  signUp(email: string, password: string): Promise<ISignUpResult> {
    console.log(`Signing up user with email '${email}' and password '${password}'`);
    return new Promise((resolve, reject) => {
      this.userPool.signUp(email, password, [
        new CognitoUserAttribute({
          Name: 'email',
          Value: email
        }),
      ], [], (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }
        console.log(`Successfully signed up user with email '${email}'`);
        if (data) {
          resolve(data);
        }
      });
    });
  }

  signIn(email: string, password: string): Promise<CognitoUser> {
    console.log(`Signing in user with email '${email}'`);
    const user = new CognitoUser({
      Pool: this.userPool,
      Username: email,
    });
    return new Promise((resolve, reject) => {
      user.authenticateUser(new AuthenticationDetails({
        Username: email,
        Password: password,
      }), {
        onSuccess: (session) => {
          console.log(`Successfull signed in with email '${email}' and session '${session}'`);
          resolve(user);
        },
        onFailure: (err) => {
          /* Possible err.code:
            UserNotFoundException: username not signed up yet
            NotAuthorizedException: wrong username/password
            UserNotConfirmedException: account is not verified yet by user
            UsernameExistsException: username exists
          */
          console.error(err);
          reject(err);
        }
      });
    });
  }

  getCurUser(): CognitoUser | null {
    return this.userPool.getCurrentUser();
  }
}
