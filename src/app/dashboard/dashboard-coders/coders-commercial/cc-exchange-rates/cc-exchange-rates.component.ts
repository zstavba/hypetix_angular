import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../../../../../auth/API/exchange-rates.service';
import { ExchangeRates } from '../../../../../auth/Classes/exchange-rates';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import $ from 'jquery';
import { CreateExchangeRatesModalComponent } from '../../../../components/create-exchange-rates-modal/create-exchange-rates-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchExchangeRatesPipe } from '../../../../../auth/Pipes/search-exchange-rates.pipe';
import { UpdateExchangeRatesModalComponent } from '../../../../components/update-exchange-rates-modal/update-exchange-rates-modal.component';
import { UploadExchangeRatesModalComponent } from '../../../../components/upload-exchange-rates-modal/upload-exchange-rates-modal.component';

@Component({
  selector: 'app-cc-exchange-rates',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NavigationsComponent,
    NotificationComponent,
    CreateExchangeRatesModalComponent,
    NgxPaginationModule,
    SearchExchangeRatesPipe,
    UpdateExchangeRatesModalComponent,
    UploadExchangeRatesModalComponent
  ],
  templateUrl: './cc-exchange-rates.component.html',
  styleUrl: './cc-exchange-rates.component.scss'
})
export class CcExchangeRatesComponent implements OnInit {

  public ExchangeRatesList: Array<ExchangeRates> = new Array<ExchangeRates>();
  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();
  public systemMessage: string = '';
  public searchExchangeRates: string = '';
  public ipp: number = 9;
  public p: any; 

  public selectedERItem: ExchangeRates = new ExchangeRates();


  constructor(
    private _ExchangeRatesService: ExchangeRatesService,
    private _SessionService: SessionService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.getExchangeRates();
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
        title: "Komercijala",
        url:  '/dashboard/coders/commercials',
      },
      {
        title: "Tip tečajne liste",
        url: '/dashboard/coders/commercials/exchange/rates'
      }
    ]

  }

  getExchangeRates = () => {
    this._ExchangeRatesService.get().subscribe(
      (response: ExchangeRates[]) => {
        return this.ExchangeRatesList = response;
      }
    )
  }

  onNotify = (message: string) => {
    this.systemMessage = message; 
    $('.ec_notification').fadeIn();
    setTimeout(() => {
      $('.ec_notification').fadeOut();
      this.systemMessage = '';
    },4000);
  }

  toggleCreateERModal = () => {
    $('.create_exchange_rates_modal').fadeIn();
  }

  deleteItem = (ID: number) => {
    this._ExchangeRatesService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message);
      },
       (error: any) =>  {
        this.onNotify(error.error.message);
       }
    )
  }

  toggleUpdateModal = (item: ExchangeRates) => {
    $('.update_exchnage_rates_modal').fadeIn();
    this.selectedERItem = item; 
  }

  toggleUploadERModal = () => {
    $('.upload_exchange_rates_modal').fadeIn();
  }
}
