import { User } from "./user";

export class Characteristics {

    public id: number = 0;
    public fk_user_id: User = new User();
    public title: string = '';
    public idg: string = '';
    public active: boolean = false; 


    constructor(){}

    public static getKeys = () => {
        return Object.keys(new Characteristics());
    }

}
