import { User } from "./user";

export class GroupType {

    public id: number = 0;
    public fk_user_id: User = new User();
    public ident: string = '';
    public title: string = '';
    public type: string = '';

    constructor(){}

    static getKeys = () => {
        return Object.keys(new GroupType());
    }


}
