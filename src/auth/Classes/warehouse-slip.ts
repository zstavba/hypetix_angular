import { User } from "./user";
import { WorkOrder } from "./work-order";

export class WarehouseSlip { 

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_workorder_id: WorkOrder = new WorkOrder();
    public item_width: string = '';
    public item_length: string = '';
    public item_weight: string = '';
    public item_gramature: string[] = [];
    public item_gramature_average: string = '';
    public item_ammount_meters: string = '';
    public item_thicness: string[] = [];
    public item_thicness_average: string = '';
    public item_permeability: string[] = [];
    public item_permeability_average: string = '';
    public sequence_number: number = 0;
    public sequence_number_workorder: number = 0;
    public workorder_id: string = '';
    public saved: boolean = false; 


    constructor(){}

    public static getKeys = () => {
        return Object.keys(new WarehouseSlip());
    }
}
