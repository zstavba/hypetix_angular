import { MeassurmentUnits } from "./meassurment-units";
import { User } from "./user";

export class CustomTariffs {

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_em_id: MeassurmentUnits = new MeassurmentUnits();
    public ident: string = '';
    public name: string = '';
    public stage: string = '';
    public consigment: string = '';
    public position: string = '';
    public active: boolean = false;
    public validity: Date = new Date();
    public create_at: Date = new Date();
    
    constructor(){}

    static getKeys = () => {
        return Object.keys(new CustomTariffs());
    }


}
