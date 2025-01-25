import { User } from "./user";

export class DebitNotes {

    public id: number = 0;
    public fk_user_id: User = new User();
    public document_type: string = '';
    public ident: string = '';
    public title: string = '';
    public description: string = '';

    constructor(){}

}
