import { Currencie } from "./currencie";
import { User } from "./user";

export class ExchangeRates {

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_currencie_id: Currencie = new Currencie();
    public title: string = '';
    public ident: string = '';
    public type: string = '';
    public unit: string = '';
    public course: string = '';
    public status: string = '';
    public course_value: string = '';
    public active: boolean = false;
    public created_at: Date = new Date();

    constructor () {}

    static getKeys = () => {
        return Object.keys(new ExchangeRates());
    }

}
