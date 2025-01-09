import { User } from "./user";

export class Areas {

    public id: number = 0;
    public fk_user_id: User = new User();
    public area: string = '';
    public description: string = '';
    public superiors: string = '';
    public municipality: string = '';
    public active: boolean = false; 
    public created_At: Date = new Date();

    constructor(){}

    static getKeys = () => {
        return Object.keys(new Areas());
    }


}
