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
@Component({
  selector: 'app-cd-country',
  imports: [
    CreateCountryModalComponent,
    UploadCountryModalComponent,
    UpdateCountryModalComponent,
    NotificationComponent,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    NgxPaginationModule
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

  constructor(
    private _BankService: BankService
  ){}

  ngOnInit(): void {
    this.getCountry();
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
