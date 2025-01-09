import { UnitAboveStorage } from "./unit-above-storage";
import { User } from "./user";

enum PriorityType {
    zero = "undefined",
    one = "highest"
}


export class Locations {

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_uas_id: UnitAboveStorage = new UnitAboveStorage();
    public fk_partner_id: User = new User();
    public location_id: string = '';
    public warehouse_id: string = '';
    public title: string = '';
    public priority: PriorityType = PriorityType.zero;
    public length: string = '';
    public volume: string = '';
    public width: string  = '';
    public height: string = '';
    public max_weight: string = '';
    public extra_1: string = '';
    public extra_2: string = '';
    public extra_3: string = '';
    public pickup_location: boolean = false;
    public shipping_location: boolean = false; 
    public auxiliary_location: boolean = false; 
    public refound_location: boolean = false; 
    public updated_at: Date = new Date();
    public created_at: Date = new Date();

    constructor(){}

    static getKeys = () => {
        return Object.keys(new Locations());
    }



}
