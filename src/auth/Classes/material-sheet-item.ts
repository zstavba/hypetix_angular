import { AlternativeChipers } from "./alternative-chipers";
import { MeassurmentUnits } from "./meassurment-units";
import { User } from "./user";
import { Warehouse } from "./warehouse";

export class MaterialSheetItem {

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_alternative_chiper_id: AlternativeChipers = new AlternativeChipers();
    public fk_warehouse_id: Warehouse = new Warehouse();
    public fk_mu_id: MeassurmentUnits = new MeassurmentUnits();
    public ammount: string = '';
    public usage: string = '';
    public deadline: Date = new Date();

    constructor(){}

    public static getKeys = () => {
        return Object.keys(new MaterialSheetItem());
    }



}
