import { AlternativeChipers } from "./alternative-chipers";
import { User } from "./user";

export class AlternativeChippersPartners {

    public id: number = 0; 
    public fk_alternative_id: AlternativeChipers = new AlternativeChipers();
    public fk_partner_id: User = new User();

    constructor(){}

}


