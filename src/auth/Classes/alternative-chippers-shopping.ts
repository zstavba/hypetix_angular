import { AlternativeChipers } from "./alternative-chipers";
import { User } from "./user";

export class AlternativeChippersShopping {

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_chipper_id: AlternativeChipers = new AlternativeChipers();
    public minimum_stock: string  = '';
    public block_stock: string= '';
    public singular_stock: string = '';
    public optimal_stock: string = '';
    public expences_per_unit: string = '';
    public expences_per_year: string = '';
    public average_stock: string = '';
    public optimum_stock_payment: string = '';
    public forseen_stock: string = '';
    public block_price: string = '';

    constructor(){}

}
