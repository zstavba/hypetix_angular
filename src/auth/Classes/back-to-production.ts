import { MeassurmentUnits } from "./meassurment-units";
import { TechnologicalUnits } from "./technological-units";
import { TrafficType } from "./traffic-type";
import { User } from "./user";
import { Warehouse } from "./warehouse";
import { WorkOrder } from "./work-order";

export class BackToProduction {
    public id: number = 0; 
    public fk_user_id: User = new User();
    public fk_warehouse_id: Warehouse = new Warehouse();
    public fk_workorder_id: WorkOrder = new WorkOrder();
    public fk_technological_unit_id: TechnologicalUnits = new TechnologicalUnits();
    public fk_trafic_type_id: TrafficType = new TrafficType();
    public fk_mu_id: MeassurmentUnits = new MeassurmentUnits();
    public start_date: Date = new Date();
    public weight: string = '';


    constructor(){}

    public static getKeys = () => {
        return Object.keys(new BackToProduction());
    }


}
