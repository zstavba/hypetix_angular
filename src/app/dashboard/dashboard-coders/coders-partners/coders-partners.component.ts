import { ChangeDetectorRef, Component, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../../../../auth/API/user.service';
import { User } from '../../../../auth/Classes/user';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';

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
    private _UserService: UserService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.loadUserData();
  }
 
  loadUserData = () => {
    forkJoin({
      partners: this._UserService.getByType(UserType.partner),
      buyers: this._UserService.getByType(UserType.buyers),
      suppliers: this._UserService.getByType(UserType.suppliers),
      passengers: this._UserService.getByType(UserType.passengers),
      workers: this._UserService.getByType(UserType.worker),
      spenders: this._UserService.getByType(UserType.spenders),
    }).subscribe(response => {
      this.PartnersList = response.partners;
      this.BuyersList = response.buyers;
      this.RecipentsList = response.suppliers;
      this.PassengersList = response.passengers;
      this.WorkersList = response.workers;
      this.SpendersList = response.spenders;

      this.setTableItems();
    });
  };


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
          case UserType.suppliers:
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
        url: "/dashboard/coders/partners/table/partner",
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
        url: "/dashboard/coders/partners/table/suppliers",
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
