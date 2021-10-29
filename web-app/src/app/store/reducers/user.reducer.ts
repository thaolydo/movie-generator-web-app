import { User } from "../models/user.model";
import { UserAction, UserActionType } from "../actions/user.action";

export interface userState{
    users: User[];
}

const initialState: userState = {
    users: [ 
    {firstName: "joe",lastName: "brown", email: "judge"}
],
}


export function userReducer(state: userState = initialState, action: UserAction): userState{
    switch(action.type){
        case UserActionType.ADD_USER:
            return {...state, users: [...state.users, action.payload] }
        default:
            return state;
    }
}