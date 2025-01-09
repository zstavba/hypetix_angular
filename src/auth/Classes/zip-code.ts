import { User } from "./user";

export class ZipCode {

    public id: number = 0;
    public ident: string = '';
    public name: string = '';
    public attribute: string = ''; 
    public fk_user_id: User = new User();

    constructor(){}

    static getKeys = () => {
        return Object.keys(new ZipCode());
    }

}
