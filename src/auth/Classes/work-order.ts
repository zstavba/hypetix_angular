import { AlternativeChipers } from "./alternative-chipers";
import { User } from "./user";
import { Warehouse } from "./warehouse";

export class WorkOrder {

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_partner_id: User = new User();
    public fk_warehouse_id: Warehouse = new Warehouse();
    public fk_alternative_chiper_id: AlternativeChipers = new AlternativeChipers();
    public start_date: Date = new Date();
    public shipment_date: Date = new Date();
    public article_length: string = '';
    public article_ammount: string = '';
    public article_widht: string = '';
    public article_square_meters: string = '';
    public article_description: string = '';
    public production_type:string = '';
    public product_type: string = '';


    constructor(){}

    public static getKeys = () => {
        return Object.keys(new WorkOrder());
    }

}
