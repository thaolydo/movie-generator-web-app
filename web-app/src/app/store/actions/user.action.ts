import { Action } from '@ngrx/store';
import { User } from '../models/user.model';
export enum UserActionType {
  ADD_USER = '[USER] Add User',
}
export class AddUserAction implements Action {
  readonly type = UserActionType.ADD_USER;
  //add an optional payload
  constructor(public payload: User) {}
}
export type UserAction = AddUserAction;