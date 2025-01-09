import { User } from "./user";

export class CostCenters {

    public id: number = 0;
    public fk_user_id: User = new User();
    public title: string = '';
    public stm: string = '';
    public above_stm: string = '';
    public status: string = '';
    public type: string = '';
    public point:string = ''
    public active: boolean = false; 
    public created_at: Date = new Date();

    constructor(){}

    static getKeys = () => {
        return Object.keys(new CostCenters());
    }
}
