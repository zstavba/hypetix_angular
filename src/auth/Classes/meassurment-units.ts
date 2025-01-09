import { User } from "./user";

export class MeassurmentUnits {

    public id: number = 0;
    public fk_user_id: User = new User();
    public idg: string = '';
    public title: string = '';
    public active: boolean = false;
    public created_at: Date = new Date();

    constructor(){

    }

    static getKeys = () => {
        return Object.keys(new MeassurmentUnits());
    }
    

}
