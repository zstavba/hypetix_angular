import { AlternativeChipers } from "./alternative-chipers";
import { ArticleType } from "./article-type";
import { MeassurmentUnits } from "./meassurment-units";
import { User } from "./user";
import { WorkSheet } from "./work-sheet";

export class WorkSheetItem {

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_work_sheet_id: WorkSheet = new WorkSheet();
    public fk_alternative_chiper_id: AlternativeChipers = new AlternativeChipers();
    public fk_mu_id: MeassurmentUnits = new MeassurmentUnits();
    public fk_article_type_id: ArticleType = new ArticleType();
    public ammount: string = '';

    constructor(){}
    
    public static getKeys = () => {
        return Object.keys(new WorkSheetItem());
    }


}
