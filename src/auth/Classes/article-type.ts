import { GroupType } from "./group-type";
import { User } from "./user";

export class ArticleType {

    public id: number = 0;
    public code: string = '';
    public title: string = '';
    public fk_user_id: User = new User();
    public fk_group_type: GroupType = new GroupType();
    public konto: string = '';
    public konto_consignation: string = ''; 
    public active: boolean = false;
    public group_name: string = '';
    public type: string = '';


    constructor(){}

    static getKeys = () => {
        return Object.keys(new ArticleType());
    }

}
