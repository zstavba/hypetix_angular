import { AlternativeChipers } from "./alternative-chipers";
import { MeassurmentUnits } from "./meassurment-units";
import { TechnologicalUnits } from "./technological-units";
import { User } from "./user";
import { WorkCenterClassification } from "./work-center-classification";
import { WorkOrder } from "./work-order";

export class WorkSheet {

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_workorder_id: WorkOrder = new WorkOrder();
    public fk_alternative_chiper_id: AlternativeChipers = new AlternativeChipers();
    public fk_technological_unit_id: TechnologicalUnits = new TechnologicalUnits();
    public fk_work_center_id: WorkCenterClassification = new WorkCenterClassification();
    public fk_mu_id: MeassurmentUnits = new MeassurmentUnits();
    public ammount: string  = '';
    public start_date: Date = new Date();

    constructor() {}

    public static getKeys = () => { 
        return Object.keys(new WorkSheet());
    }


}
