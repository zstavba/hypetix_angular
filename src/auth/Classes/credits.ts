import { User } from "./user";

export class Credits {

    public id: number = 0; 
    public fk_user_id: User = new User();
    public ident: string = '';
    public title: string = '';
    public active: boolean = false; 
    public description: string = '';
    public created_at: Date = new Date();

    constructor(){}

}
