import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../auth/API/user.service';
import { User } from '../../../../auth/Classes/user';
import { RouterLink } from '@angular/router';

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

@Component({
  selector: 'app-coders-partners',
  imports:[ 
    RouterLink
 ],
  templateUrl: './coders-partners.component.html',
  styleUrl: './coders-partners.component.scss'
})
export class CodersPartnersComponent implements OnInit {

  public PartnersList: Array<User> = new Array<User>(); // ok
  public BuyersList: Array<User> = new Array<User>();
  public RecipentsList: Array<User> = new Array<User>();
  public PassengersList: Array<User> = new Array<User>(); // ok
  public WorkersList: Array<User> = new Array<User>(); //ok
  public SpendersList: Array<User> = new Array<User>(); //ok

  public itemsList: Array<any> = new Array<any>();

  constructor(
    private _UserService: UserService
  ){}

  ngOnInit(): void {
    this.setTableItems();
    this.getUserByType(UserType.partner)
    this.getUserByType(UserType.buyers)
    this.getUserByType(UserType.recipent)
    this.getUserByType(UserType.passengers)
    this.getUserByType(UserType.worker)
    this.getUserByType(UserType.spenders)


  }

  getUserByType = (type: string) => {

    this._UserService.getByType(type).subscribe(
      (response: User[]) => {
        switch (type){
          case UserType.partner:
              this.PartnersList = response; 
            break;
          case UserType.worker:
            this.WorkersList = response; 
            break;
          case UserType.spenders:
            this.SpendersList = response;
            break;
          case UserType.passengers: 
            this.PassengersList = response; 
            break;
          case UserType.buyers:
              this.BuyersList = response; 
            break;
          case UserType.recipent:
              this.RecipentsList = response; 
            break;

        }

        
      }
    )
  }

  setTableItems = () => {
    this.itemsList = [
      {
        title: "Partnerji",
        items: this.PartnersList.length,
        category: "Uporabniki",
        url: "/dashboard/coders/partners/table/partners",
      },
      {
        title: "Kupci",
        items: this.BuyersList.length,
        category: "Uporabniki",
        url: "/dashboard/coders/partners/table/buyers",
      },
      {
        title: "Dobavitelji",
        items: this.RecipentsList.length,
        category: "Uporabniki",
        url: "/dashboard/coders/partners/table/recipents",
      },
      {
        title: "Potniki",
        items: this.PassengersList.length,
        category: "Uporabniki",
        url: "/dashboard/coders/partners/table/passengers",
      },
      {
        title: "Zaposleni",
        items: this.WorkersList.length,
        category: "Uporabniki",
        url: "/dashboard/coders/partners/table/worker",
      },
      {
        title: "Špenditerji",
        items: this.SpendersList.length,
        category: "Uporabniki",
        url: "/dashboard/coders/partners/table/spenders",
      },      
    ]
  }

}
