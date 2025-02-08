import { User } from "./user";

export class PerformanceWork {

    public id: number = 0;
    public ident: string = '';
    public fk_user_id: User = new User();
    public performance: string = '';
    public title: string = '';
    public extra: string = '';
    public acvtive: boolean = false;
    public created_at: Date = new Date();

    constructor(){}

    static getKeys = () => {
        return Object.keys(new PerformanceWork());
    }

}
