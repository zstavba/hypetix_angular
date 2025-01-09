import { AlternativeChipers } from "./alternative-chipers";
import { MeassurmentUnits } from "./meassurment-units";
import { Warehouse } from "./warehouse";
import { WorkOrder } from "./work-order";

export class BackToProductionItem {
    
    public id: number = 0;
    public fk_alternative_chipper_id: AlternativeChipers = new AlternativeChipers();
    public fk_workorder_id: WorkOrder = new WorkOrder();
    public fk_warehouse_id: Warehouse = new Warehouse();
    public fk_mu_id: MeassurmentUnits = new MeassurmentUnits();
    public ammount: string = '';
    public open: string = '';
    public closed: string = '';
    public shippment_date: Date = new Date();
    public description: string = ''; 
    public konto: string = '';
    public weight: string = '';

    constructor(){}

    public static getKeys = () => {
        return Object.keys(new BackToProductionItem());
    }


}
