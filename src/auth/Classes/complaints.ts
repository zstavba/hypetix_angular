import { User } from "./user";

export class Complaints {

    public id: number = 0;
    public fk_user_id: User = new User();
    public title: string = '';
    public ident: string = '';
    public active: boolean = false; 
    public created_at: Date = new Date();

    constructor(){}


}
