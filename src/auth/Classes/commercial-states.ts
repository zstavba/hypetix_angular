import { User } from "./user";

enum CommercialStatesTypes {
    BK = "debit_notes",
    OK = "credits",
    FK = "fakturing",
    FT = "fakturing_country",
    ND = "supplier_orders",
    NK = "costumer_orders",
    PO = "offers",
    PR = "estimates",
    XX = "general_statments"
}


export class CommercialStates {

    public id: number = 0;
    public fk_user_id: User = new User();
    public type: string = '';
    public title: string = '';
    public description: string = '';
    public status: string = '';
    public active: boolean = false;
    public created_at: Date = new Date();

    constructor(){}

    static getKeys = () => {
        return Object.keys(new CommercialStates());
    }


}
