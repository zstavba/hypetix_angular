import { User } from "./user";

export class UnitAboveStorage {

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_leader_id: User = new User();
    public stm: string = '';
    public title: string = '';
    public points: string = '';
    public extra_1: string = '';
    public extra_2: string = '';
    public extra_3: string = '';
    public extra_4: string = '';
    public extra_5: string = '';
    public type: string = '';
    public active: boolean = false;
    public created_at: Date = new Date();

    constructor(){}

    static getKeys = () => {
        return Object.keys(new UnitAboveStorage());
    }

}
