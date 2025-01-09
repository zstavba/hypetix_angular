import { Classification } from "./classification";
import { User } from "./user";

export class TechnologicalUnits {

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_classification_id: Classification = new Classification();
    public title: string = '';
    public active: boolean = false;


    constructor() {}

    public static getKeys = () => {
        return Object.keys(new TechnologicalUnits());
    }

}
