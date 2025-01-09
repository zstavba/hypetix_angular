import { User } from "./user";

export class ControlPlan {

    public id: number = 0; 
    public fk_user_id: User = new User();
    public title: string = '';
    public connection_type: string = '';
    public save_konto: boolean = false; 
    public konto_page: string = '';
    public status: string = '';
    public atribute_list: Array<string> = new Array<string>();
    


}
