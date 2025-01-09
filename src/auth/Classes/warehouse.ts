import { User } from "./user";

export class Warehouse {

    public id: number = 0;
    public fk_user_id: User = new User();
    public title: string = '';
    public status: string = '';
    public movement: string = '';
    public active: boolean = false;
    public unit: string = '';
    public stock_type: string = '';
    public konto: string = '';
    public stm: string = '';
    public created_at: string = '';

    constructor(){}

    static getKeys = () => {
        return Object.keys(new Warehouse());
    }


}
