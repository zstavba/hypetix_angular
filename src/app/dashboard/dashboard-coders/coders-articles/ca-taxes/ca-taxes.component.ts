import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import $ from 'jquery';
import { CreateTaxModalComponent } from '../../../../components/create-tax-modal/create-tax-modal.component';
import { Tax } from '../../../../../auth/Classes/tax';
import { TaxService } from '../../../../../auth/API/tax.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { SearchTaxPipe } from '../../../../../auth/Pipes/search-tax.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateTaxModalComponent } from '../../../../components/update-tax-modal/update-tax-modal.component';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
@Component({
  standalone: true,
  selector: 'app-ca-taxes',
  imports: [
    NavigationsComponent,
    CreateTaxModalComponent,
    NgxPaginationModule,
    NotificationComponent,
    SearchTaxPipe,
    ReactiveFormsModule,
    FormsModule,
    UpdateTaxModalComponent
  ],
  templateUrl: './ca-taxes.component.html',
  styleUrl: './ca-taxes.component.scss'
})
export class CaTaxesComponent implements OnInit {

  public TaxList: Array<Tax> = new Array<Tax>();
  public tax: Tax = new Tax();
  public itemsPerPage: number = 9;
  public p: any; 
  public searchTax: string = '';
  public systemMessage: string = '';
  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();
  

  constructor(
    private _SessionServce: SessionService,
    private _TaxService: TaxService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionServce.getSessionData();
    this.getTaxes();
    this.URLsList = [
      {
        title: "Domov",
        url: '/dashboard',
      },
      {
        title: "Šifranti",
        url:  '/dashboard/coders',
      },
      {
        title: "Artikli",
        url:  'dashboard/coders/articles',
      },
      {
        title: "Davki",
        url: 'dashboard/coders/articles/taxes'
      }
    ];
  }

  getTaxes = () => {
    this._TaxService.get().subscribe(
      (response: Tax[]) => {
        this.TaxList = response; 
      }
    )
  }

  toggleCreateTaxModal = () => {
    $('.create_tax_modal').fadeIn();
  }

  deleteItem = (ID:number) => {
    this._TaxService.deleteTax(ID).subscribe(
      (response: any) => {
        this.getTaxes();
        $('.tax_notification').fadeIn();
        this.systemMessage = response.message;
        setTimeout(() => {
          $('.tax_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      },
      (error: any) => {
        $('.tax_notification').fadeIn();

        if(error.status === "404"){
          this.systemMessage = 'Povezava do URLja ni bila najdena  !'
        }

        this.systemMessage = error.error.message;
        setTimeout(() => {
          $('.tax_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      }
    )
  }

  toggleUpdateTaxModal  = (T: Tax) => {
    $('.update_tax_modal').fadeIn();
    this.tax = T; 
  }

}
