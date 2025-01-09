import { Country } from "./country";
import { GroupType } from "./group-type";
import { MeassurmentUnits } from "./meassurment-units";
import { Tax } from "./tax";
import { User } from "./user";
import { Warehouse } from "./warehouse";

export class AlternativeChipersMarketing {

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_supplier_id: User = new User();
    public fk_manufactrer_id: User = new User();
    public fk_country_id: Country = new Country();
    public fk_warehouse_id: Warehouse = new Warehouse();
    public fk_mu_id: MeassurmentUnits = new MeassurmentUnits();
    public fk_tax_id: Tax = new Tax();
    public alternative_chipers_marketing_partners: Array<User> = new Array<User>();
    public alternative_chipers_marketing_warehouses: Array<Warehouse> = new Array<Warehouse>();
    public fk_group_type_1_id: GroupType = new GroupType();
    public fk_group_type_2_id: GroupType = new GroupType();
    public fk_group_type_3_id: GroupType = new GroupType();
    public fk_group_type_4_id: GroupType = new GroupType();
    public supplier_code: string  = '';
    public ean: string = '';
    public description: string = '';
    public supplier_article_name: string = '';
    public article_color: string = '';
    public decimal_places: string = '';
    public kala: string = '';
    public margin: string = '';

    constructor(){}

    static getKeys = () => {
        return Object.keys(new AlternativeChipersMarketing());
    }
}
