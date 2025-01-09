import { User } from "./user";

export class ClassificationWorkProceduress {

    public id: number = 0;
    public fk_user_id: User = new User();
    public type: string = '';
    public title: string = '';
    public active: boolean  = false;


    constructor(){}

    public static getKeys = () => {
        return Object.keys(new ClassificationWorkProceduress());
    }


}
