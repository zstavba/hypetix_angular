import { User } from "./user";

export class PaymentTerms {

    public id: number = 0;
    public fk_user_id: User = new User();
    public ident: string = '';
    public title: string = '';
    public payment_deadline: Date = new Date();
    public net_condition: boolean = false; 
    public days: Array<string> = new Array<string>();
    public sconto: Array<string> = new Array<string>();
    public before_currency: boolean = false; 
    public from_receipt: boolean = false; 

    constructor(){}

}
