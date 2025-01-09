import { Classification } from "./classification";
import { MeassurmentUnits } from "./meassurment-units";
import { User } from "./user";

export class WorkProcedures {

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_em_id: MeassurmentUnits = new MeassurmentUnits();
    public fk_classification_id: Classification = new Classification();
    public title: string = '';
    public type: string = '';

    constructor(){}

    public static getKeys = () => {
        return Object.keys(new WorkProcedures());
    }

}



