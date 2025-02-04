import { Currencie } from "./currencie";
import { Invoices } from "./invoices";
import { User } from "./user";

export class RateSheet {

    public id: number = 0;
    public ident: string = '';
    public fk_user_id: User = new User();
    public fk_currencie_id: Currencie = new Currencie();
    public fk_invoices_id: Invoices = new Invoices();
    public set_date: Date = new Date();
    public unit: string = '';
    public course: string = '';

    constructor(){}

}
