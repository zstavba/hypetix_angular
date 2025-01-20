import { User } from "./user";

export class TrafficType {

    public id: number = 0;
    public fk_user_id: User = new User();
    public ident: string = '';
    public title: string = '';
    public attribute: string  = '';
    public status: string = '';
    public created_at: Date = new Date();
    public active: boolean = false;

    constructor(){}

    static getKeys = () => {
        return Object.keys(new TrafficType());
    }

}
