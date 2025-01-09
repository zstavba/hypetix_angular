import { Traitor } from "./traitor";
import { TraitorItem } from "./traitor-item";

export class WarehouseFabricSaved {

    public id: number = 0;
    public fk_traitor_item_id: TraitorItem = new TraitorItem();
    public used_ammount: string = '';
    public saved: boolean = false; 

    constructor(){}

    public static getKeys = () => {
        return Object.keys(new WarehouseFabricSaved());
    }


}
