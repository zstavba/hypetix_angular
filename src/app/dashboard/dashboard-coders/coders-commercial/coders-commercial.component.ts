import { Component, OnInit } from '@angular/core';
import { ShippingMethod } from '../../../../auth/Classes/shipping-method';
import { RouterLink } from '@angular/router';
import { ShippingMethodService } from '../../../../auth/API/shipping-method.service';
import { Currencie } from '../../../../auth/Classes/currencie';
import { CurrencieService } from '../../../../auth/API/currencie.service';
import { PriceType } from '../../../../auth/Classes/price-type';
import { PriceTypeService } from '../../../../auth/API/price-type.service';
import { TrafficType } from '../../../../auth/Classes/traffic-type';
import { TrafficTypeService } from '../../../../auth/API/traffic-type.service';
import { ExchangeRates } from '../../../../auth/Classes/exchange-rates';
import { ExchangeRatesService } from '../../../../auth/API/exchange-rates.service';
import { response } from 'express';
import { DebitNotes } from '../../../../auth/Classes/debit-notes';
import { DebitNotesService } from '../../../../auth/API/debit-notes.service';
import { Credits } from '../../../../auth/Classes/credits';
import { CreditsService } from '../../../../auth/API/credits.service';

@Component({
  selector: 'app-coders-commercial',
  imports: [
    RouterLink
  ],
  templateUrl: './coders-commercial.component.html',
  styleUrl: './coders-commercial.component.scss'
})
export class CodersCommercialComponent implements OnInit {

  public ShippingMethodList: Array<ShippingMethod> = new Array<ShippingMethod>();
  public CurrenciesList: Array<Currencie> = new Array<Currencie>();
  public tableItems: Array<any> = new Array<any>();
  public priceTypeLits: Array<PriceType> = new Array<PriceType>();
  public TrafficTypeList: Array<TrafficType> = new Array<TrafficType>();
  public ExchangeRatesList: Array<ExchangeRates> = new Array<ExchangeRates>();
  public DebitNotesList: Array<DebitNotes> = new Array<DebitNotes>();
  public CredistList: Array<Credits> = new Array<Credits>();


  constructor(
    private _ShippingMethodService: ShippingMethodService,
    private _CurrencieService: CurrencieService,
    private _PriceTypeService: PriceTypeService,
    private _TrafficTypeService: TrafficTypeService,
    private _ExchangeRatesService: ExchangeRatesService,
    private _DebitNotesService: DebitNotesService,
    private _CreditsService: CreditsService
  ){}

  ngOnInit(): void {
    this.getShippingMethod();
    this.getCurrencies();
    this.getPriceTypes();
    this.getTrafficTypes();
    this.getExchnageRates();
    this.getDebitNotes();
    this.getCredits();
    this.updateTable();
  }

  getShippingMethod = () => {
    this._ShippingMethodService.get().subscribe(
      (response: ShippingMethod[]) => {
        this.ShippingMethodList = response;
      }
    )
  }

  getCurrencies = () => {
    this._CurrencieService.get().subscribe(
      (response: Currencie[]) => {
        this.CurrenciesList = response; 
      }
    )
  }

  getPriceTypes = () => {
    this._PriceTypeService.get().subscribe(
      (response: PriceType[]) => {
        this.priceTypeLits = response;
      }
    )
  }

  getTrafficTypes = () => {
    this._TrafficTypeService.get().subscribe(
      (response: TrafficType[]) => {
        this.TrafficTypeList = response; 
      }
    )
  }

  getExchnageRates = () => {
    this._ExchangeRatesService.get().subscribe(
      (response: ExchangeRates[]) => {
        this.ExchangeRatesList = response; 
      }
    )
  }

  getDebitNotes = () => {
    this._DebitNotesService.get().subscribe(
      (response: DebitNotes[]) => {
        this.DebitNotesList = response; 
      }
    )
  }

  getCredits = () => {
    this._CreditsService.get().subscribe(
      (response: Credits[]) => {
        this.CredistList = response; 
      }
    );
  }

  updateTable = () => {
    this.tableItems = [
      {
        title: "Načini odprem",
        items: this.ShippingMethodList.length,
        url: "/dashboard/coders/commercials/shippping/method"
      },
      {
        title: "Valuta",
        items: this.CurrenciesList.length,
        url: "/dashboard/coders/commercials/currencie"
      },
      {
        title: "Tipi Cen",
        items: this.priceTypeLits.length,
        url: "/dashboard/coders/commercials/price/type"
      },
      {
        title: "Vrste Prometa",
        items: this.TrafficTypeList.length,
        url: "/dashboard/coders/commercials/traffic/type"
      },
      {
        title: "Vrste Tečajne liste",
        items: this.ExchangeRatesList.length,
        url: "/dashboard/coders/commercials/exchange/rates"
      },
      {
        title: "Tipi reklamacij",
        items: [],
        url: "/dashboard/coders/commercials/complaints"
      },
      {
        title: "Bremepisi",
        items: this.DebitNotesList.length,
        url: "/dashboard/coders/commercials/debit/notes"
      },
      {
        title: "Dobropisi",
        items: this.CredistList.length,
        url: "/dashboard/coders/commercials/credits"
      }

    ]
  }

}
