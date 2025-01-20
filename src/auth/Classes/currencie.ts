import { Country } from "./country";
import { User } from "./user";

export class Currencie {

    public id: number = 0;
    public fk_user_id: User = new User();
    public type: string  = '';
    public title: string = '';
    public fk_country_id: Country = new Country();
    public code: string = '';
    public status: string = '';
    public active: boolean = false;
    public created_at: Date = new Date();

    constructor(){}

    static getKeys = () => {
        return Object.keys(new Currencie());
    }

}
