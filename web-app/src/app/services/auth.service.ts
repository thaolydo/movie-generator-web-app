import { Injectable } from '@angular/core';
import { AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool, CognitoUserSession, ICognitoUserAttributeData, ICognitoUserData, ISignUpResult } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
import { UserInfo } from '../interfaces/user-info.model';
import { Auth } from 'aws-amplify';

/*
  Follow tutorial here: https://www.npmjs.com/package/amazon-cognito-identity-js
*/
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userPool: CognitoUserPool;
  // private curUser: CognitoUser | null | undefined;

  constructor() {
    this.userPool = new CognitoUserPool({
      UserPoolId: environment.userPoolId,
      ClientId: environment.userPoolClientId,
      // Storage: new Storage()
    });
    // this.curUser = null;
    // Auth.currentUserPoolUser
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
        // this.curUser = data?.user;
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
          console.log(`Successfull signed in with email '${email}'`);
          // console.log('session =', session);
          // this.curUser = user;
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

  sendResetPasswordCode(email: string): Promise<CognitoUser> {
    console.log(`Sending code for email '${email}'`);
    const user = new CognitoUser({
      Pool: this.userPool,
      Username: email,
    });
    return new Promise((resolve, reject) => {
      user.forgotPassword({
        onSuccess: (data: any) => {
          console.log(`Successfull sent code to email '${email}'`);
          resolve(user);
        },
        onFailure: (err) => {
          console.error(err);
        },
      });
    });
  }

  resetPasswordWithCode(user: CognitoUser, verificationCode: string, newPassword: string) {
    console.log(`Reset password with code`);
    return new Promise((resolve, reject) => {
      user.confirmPassword(verificationCode, newPassword, {
        onSuccess: () => {
          console.log(`Successfully saved new password`);
          resolve(user);
        },
        onFailure: (err) => {
          console.error(err);
        }
      });
    });
  }

  updateUserAttributes(newUserInfo: UserInfo) {
    const attributes: ICognitoUserAttributeData[] = [];
    if (newUserInfo.firstName) {
      attributes.push(new CognitoUserAttribute({
        Name: 'custom:firstName',
        Value: newUserInfo.firstName
      }));
    }
    if (newUserInfo.lastName) {
      attributes.push(new CognitoUserAttribute({
        Name: 'custom:lastName',
        Value: newUserInfo.lastName
      }));
    }
    if (newUserInfo.phoneNumber) {
      attributes.push(new CognitoUserAttribute({
        Name: 'custom:phoneNumber',
        Value: newUserInfo.phoneNumber
      }));
    }
    return new Promise(async (resolve, reject) => {
      console.log('Writing attributes:', attributes);
      const curUser = await this.getCurUser();
      curUser?.updateAttributes(attributes, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        console.log('Update attributes successfully with data =', data);
        resolve(data);
      });
    });
  }

  getUserAttributes(): Promise<UserInfo> {
    return new Promise(async (resolve, reject) => {
      const curUser = await this.getCurUser();
        curUser?.getUserAttributes((err, data) => {
        if (err) {
          // console.error(err);
          reject(err);
          return;
        }
        console.log('Get attributes successfully with data =', data);
        const res: UserInfo = {};
        data?.forEach(attribute => {
          if (attribute.getName() === 'custom:firstName') {
            res.firstName = attribute.getValue();
          } else if (attribute.getName() === 'custom:lastName') {
            res.lastName = attribute.getValue();
          } else if (attribute.getName() === 'custom:phoneNumber') {
            res.phoneNumber = attribute.getValue();
          }
        });
        resolve(res);
      });
    });
  }

  getCurUser(): Promise<CognitoUser> {
    const curUser = this.userPool.getCurrentUser();
    return new Promise((resolve, reject) => {
      if (!curUser) {
        reject('User not logged in');
        return;
      }
      curUser.getSession((err: any, session: CognitoUserSession) => {
        if (err) {
          reject(err);
          return;
        }
        if (!session.isValid()) {
          reject('Invalid session');
          return;
        }
        console.log('session is valid');
        resolve(curUser);
      });
    });
  }
}
