import { ArticleType } from "./article-type";
import { Country } from "./country";
import { CustomTariffs } from "./custom-tariffs";
import { MeassurmentUnits } from "./meassurment-units";
import { User } from "./user";
import { Warehouse } from "./warehouse";

export class AlternativeChipers {

    public id: number = 0;
    public title: string = '';
    public fk_user_id: User = new User();
    public fk_mu_id: MeassurmentUnits = new MeassurmentUnits();
    public fk_article_type_id: ArticleType = new ArticleType();
    public fk_warehouse_id: Warehouse = new Warehouse();
    public fk_custom_tarifs_id: CustomTariffs = new CustomTariffs();
    public fk_country_id: Country = new Country;
    public ident: string = '';
    public active: boolean = false; 
    public intrasant: boolean = false; 
    public standart: string = '';
    public belonging: string = '';
    public traceability: boolean = false;
    public length: string = '';
    public width: string = '';
    public height: string = '';
    public volume: string = '';
    public delivery_time: Date = new Date();
    public creation_time: Date = new Date();


    constructor() {}

    static getKeys = () => {
        return Object.keys(new AlternativeChipers());
    }

    static getSpecificKeys = (chipper: AlternativeChipers) => {
        return  {
            id: chipper.id,
            fk_user_id: chipper.fk_user_id,
            title: chipper.title,
            active: chipper.active
        }
    }


}
