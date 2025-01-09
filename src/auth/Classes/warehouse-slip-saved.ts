import { Traitor } from "./traitor";
import { TraitorItem } from "./traitor-item";
import { WarehouseSlip } from "./warehouse-slip";

export class WarehouseSlipSaved {

    public id: number = 0;
    public fk_traitor_id: Traitor = new Traitor();
    public fk_traitor_item_id: TraitorItem = new TraitorItem();
    public fk_warehouse_slip_id: WarehouseSlip = new WarehouseSlip();
    public saved: boolean = false; 

    constructor () {}

    public static getKeys = () => {
        return Object.keys(new WarehouseSlipSaved());
    }

}
