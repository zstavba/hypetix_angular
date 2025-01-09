import { TechnologicalUnits } from "./technological-units";
import { User } from "./user";
import { Warehouse } from "./warehouse";
import { WorkCenterClassification } from "./work-center-classification";
import { WorkOrder } from "./work-order";

export class MaterialSheet {

    public id: number = 0; 
    public fk_user_id: User = new User();
    public fk_warehouse_id: Warehouse = new Warehouse();
    public fk_work_center_id: WorkCenterClassification = new WorkCenterClassification();
    public fk_workorder_id: WorkOrder = new WorkOrder();
    public fk_technological_units_id: TechnologicalUnits = new TechnologicalUnits();
    public status: string = '';
    public start_date: Date = new Date();

    constructor(){}

    public static getKeys = () => {
        return Object.keys(new MaterialSheet());
    }

}
