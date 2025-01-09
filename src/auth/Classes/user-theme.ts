import { User } from "./user";
export enum Theme {
    dark = "dark",
    light = "light"

}
export class UserTheme {

    public id: number = 0;
    public fk_user_id: User = new User();
    public type: Theme = Theme.light;

    constructor(){}

}
