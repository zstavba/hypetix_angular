import { User } from "./user";

export class PriceType {

    public id: number = 0;
    public fk_user_id: User = new User();
    public ident: string = '';
    public type: string  = '';
    public title: string = '';
    public status: string = '';
    public active: boolean = false; 
    public created_at: Date = new Date();

    constructor(){}

    static getKeys = () => {
        return Object.keys(new PriceType());
    }


}



