import { User } from "./user";

export class TechnologicalProcesses {

    public id: number = 0;
    public group_id: string = '';
    public fk_user_id: User = new User();
    public type: string  = '';
    public title: string = '';
    public active: boolean = false;


    constructor(){}

    public static getKeys = () => {
        return Object.keys(new TechnologicalProcesses());
    }

}
