import { AlternativeChipers } from "./alternative-chipers";
import { MeassurmentUnits } from "./meassurment-units";
import { TechnologicalUnits } from "./technological-units";
import { TrafficType } from "./traffic-type";
import { User } from "./user";
import { Warehouse } from "./warehouse";
import { WorkCenterClassification } from "./work-center-classification";
import { WorkOrder } from "./work-order";

export class Traitor {

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_workorder_id: WorkOrder = new WorkOrder();
    public fk_warehouse_id: Warehouse = new Warehouse();
    public fk_technological_units_id: TechnologicalUnits = new TechnologicalUnits();
    public fk_work_center_id: WorkCenterClassification = new WorkCenterClassification();
    public fk_alternative_chiper_id: AlternativeChipers = new AlternativeChipers();
    public fk_traffic_type_id: TrafficType = new TrafficType();
    public start_date: Date = new Date();
    public ammount: string = '';
    public fk_mu_id: MeassurmentUnits = new MeassurmentUnits();
    public open: boolean = false; 


    constructor(){}

    public static getKeys = () => {
        return Object.keys(new Traitor());
    }
    


}
