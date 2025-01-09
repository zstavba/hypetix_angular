import { GroupType } from "./group-type";
import { User } from "./user";

export class DeliveryConditions {

    public id: number = 0; 
    public fk_user_id: User = new User();
    public fk_group_id: GroupType = new GroupType();
    public location: string = '';
    public title: string = '';
    public ident: string = ''; 
    public active: boolean = false; 
    public price: string = '';
    public created_at: Date = new Date();

    constructor(){}


}
