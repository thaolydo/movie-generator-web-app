import { userState,userReducer } from "./user.reducer";
import { ActionReducerMap } from "@ngrx/store";

export const rootReducer = {};

export interface userAppState {
    user: userState
}

export const reducers: ActionReducerMap<userAppState, any> = {
    user: userReducer
}