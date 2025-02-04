import { Component, OnInit } from '@angular/core';
import { CreateCountryModalComponent } from '../../../../components/create-country-modal/create-country-modal.component';
import { UploadCountryModalComponent } from '../../../../components/upload-country-modal/upload-country-modal.component';
import { UpdateCountryModalComponent } from '../../../../components/update-country-modal/update-country-modal.component';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import $ from 'jquery';
import { RouterLink } from '@angular/router';
import { Country } from '../../../../../auth/Classes/country';
import { BankService } from '../../../../../auth/API/bank.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
@Component({
  selector: 'app-cd-country',
  imports: [
    CreateCountryModalComponent,
    UploadCountryModalComponent,
    UpdateCountryModalComponent,
    NotificationComponent,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NavigationsComponent
  ],
  templateUrl: './cd-country.component.html',
  styleUrl: './cd-country.component.scss'
})
export class CdCountryComponent  implements OnInit {

  public systemMessage: string = ''; 
  public searchCountry: string = '';
  public CountryList: Array<Country> = new Array<Country>();
  public selectedCountry: Country = new Country();
  public ipp: number = 9;
  public p: any; 
  public UserInformation: User | null = new User();
  public URLsList: Array<any> = new Array<any>();


  constructor(
    private _SessionService: SessionService,
    private _BankService: BankService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.getCountry();
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
        title: "Splošno",
        url:  '/dashboard/coders/defaults',
      },
      {
        title: "Države",
        url: '/dashboard/coders/default/country'
      }
    ];
  }

  onNotify(message: string) {
    $('.country_notification').fadeIn();
    this.systemMessage = message;
    setTimeout(() => {
      $('.country_notification').fadeOut();
      this.systemMessage = '';
    },4000);
  }


  toggleCreateCountryModal = () => {
    $('.create_country_modal').fadeIn();
  }

  getCountry = () => {
    this._BankService.getCountry().subscribe(
      (response: Country[]) => {
        this.CountryList = response;
      }
    )
  }

  deleteCountry = (ID: number) => {
      this._BankService.deleteCountry(ID).subscribe(
        (response: any) => {
          this.onNotify(response.message);
        },
        (error: any) => {
          this.onNotify(error.error.message);
        }
      )
      this.getCountry();
  }

  updateSelectedItem = (Item: Country) => {
    $('.update_country_modal').fadeIn();
    this.selectedCountry = Item; 
  }

  toggleUploadCountryModal = () => {
    $('.upload_country_modal').fadeIn();
  }

}
