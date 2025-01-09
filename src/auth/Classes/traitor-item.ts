import { AlternativeChipers } from "./alternative-chipers";
import { MeassurmentUnits } from "./meassurment-units";
import { Warehouse } from "./warehouse";
import { WorkOrder } from "./work-order";

export class TraitorItem {

    public id: number = 0;
    public fk_workorder_id: string = '';
    public fk_warehouse_id: Warehouse = new Warehouse();
    public fk_alternative_chipper_id: AlternativeChipers = new AlternativeChipers();
    public fk_mu_id: MeassurmentUnits = new MeassurmentUnits();
    public fk_selected_workorder_id: WorkOrder = new WorkOrder();
    public selected_ammount: string = '';
    public has_sub_order: boolean = false; 

    constructor(){}

    public static getKeys = () =>  {
        return Object.keys(new TraitorItem());
    }

}
