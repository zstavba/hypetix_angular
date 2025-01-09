enum UserType {
    admin =  "admin",
    partner = "partner",
    worker = "worker",
    guest =  "guest",
    spenders = "spenders",
    suppliers = 'suppliers',
    manufacturer = 'manufacturer',
    buyers = "buyers",
    passengers = "passengers",
    recipent = "recipents",
    
};

export class UserInformation {
    public id: number = 0; 
    public user_type: UserType = UserType.guest;
    public phone_number: string = '';
    public tax_number: string = '';
    public emsho: string = '';
    public profile_image: string = '';
    public sex: string = '';
    constructor() {}


}
