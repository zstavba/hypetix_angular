import { Country } from "./country";
import { UserInformation } from "./user-information";
import { ZipCode } from "./zip-code";



export class User {

    public id: number = 0;
    public fk_information_id: UserInformation = new UserInformation();
    public first_name: string = '';
    public last_name: string = '';
    public username: string = ''; 
    public password: string = '';
    public email: string = '';
    public address: string = '';
    public updated_at: Date = new Date();
    public created_at: Date = new Date();


    constructor(){}

    static getKeys = () => {
        return Object.keys(new User());
    }


}
