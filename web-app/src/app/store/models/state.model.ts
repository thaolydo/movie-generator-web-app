import { User } from "./user.model";

export interface State{
    readonly users: Array<User>;
}