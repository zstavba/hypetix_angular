import { User } from "./user";

export class WorkCenterClassification {

    public id: number  = 0;
    public fk_user_id: User = new User();
    public group_type: string = '';
    public group_id: string = '';
    public title: string = '';
    public active: boolean = false; 
    public extra_1: string = '';
    public extra_2: string = '';
    public extra_3: string  = '';
    public created_at: Date = new Date();
    public status: string = '';
    public idg: string = '';

    constructor(){}

    static getKeys = () => {
        return Object.keys(new WorkCenterClassification());
    }

}


