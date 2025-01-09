import { User } from "./user";

export class ShippingMethod {

    public id: number = 0;
    public fk_user_id: User = new User();
    public title: string = '';
    public status: string = '';
    public active: boolean = false;
    public attribute: string = '';
    public created_at: Date = new Date();

    constructor(){}

    static getKeys = () => {
        return Object.keys(new ShippingMethod());
    }
}
