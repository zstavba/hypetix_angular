import { User } from "./user";

export class Country {
    public id: number = 0;
    public fk_user_id: User = new User();
    public name: string = '';
    public type: string = '';
    public name_ang: string = '';
    public ident: string = '';
    public active: boolean = false;

    constructor(){

    }

    static getKeys = () => {
        return Object.keys(new Country());
    }

}
