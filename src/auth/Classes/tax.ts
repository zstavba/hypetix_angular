import { User } from "./user";

export class Tax {

    public id: number = 0;
    public fk_user_id: User = new User();
    public ident: string = '';
    public title: string = '';
    public stage: string = '';
    public type: string = '';
    public active: boolean = false;
    public created_at: Date = new Date();

    constructor(){

    }

    static getKeys = () => {
        return Object.keys(new Tax());
    }
}
