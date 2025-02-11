import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
import { Invoices } from '../../../../auth/Classes/invoices';
import { InvoicesService } from '../../../../auth/API/invoices.service';
import { RateSheet } from '../../../../auth/Classes/rate-sheet';
import { RatesheetService } from '../../../../auth/API/ratesheet.service';
import { SupplierOrders } from '../../../../auth/Classes/supplier-orders';
import { SupplierOrdersService } from '../../../../auth/API/supplier-orders.service';
import { CustomerOrderService } from '../../../../auth/API/customer-order.service';
import { CustomerOrder } from '../../../../auth/Classes/customer-order';
import { Estimates } from '../../../../auth/Classes/estimates';
import { EstimatesService } from '../../../../auth/API/estimates.service';
import { Complaints } from '../../../../auth/Classes/complaints';
import { ComplaintsService } from '../../../../auth/API/complaints.service';
import { forkJoin } from 'rxjs';

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
  public InovicesList: Array<Invoices> = new Array<Invoices>();
  public RateSheetList: Array<RateSheet> = new Array<RateSheet>();
  public SupplierOrdersList: Array<SupplierOrders> = new Array<SupplierOrders>();
  public CustomerOrderList: Array<CustomerOrder> = new Array<CustomerOrder>();
  public EstimatesList: Array<Estimates> = new Array<Estimates>();
  public ComplaintsList: Array<Complaints> = new Array<Complaints>();

  constructor(
    private _ShippingMethodService: ShippingMethodService,
    private _CurrencieService: CurrencieService,
    private _PriceTypeService: PriceTypeService,
    private _TrafficTypeService: TrafficTypeService,
    private _ExchangeRatesService: ExchangeRatesService,
    private _DebitNotesService: DebitNotesService,
    private _CreditsService: CreditsService,
    private _InovicesService: InvoicesService,
    private _RateSheetService: RatesheetService,
    private _SupplierOrderService: SupplierOrdersService,
    private _CustomerOrderSerivce: CustomerOrderService,
    private _EstimatesService: EstimatesService,
    private _ComplaintsService: ComplaintsService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    forkJoin({
      shippingMethods: this._ShippingMethodService.get(),
      currencies: this._CurrencieService.get(),
      priceTypes: this._PriceTypeService.get(),
      trafficTypes: this._TrafficTypeService.get(),
      exchangeRates: this._ExchangeRatesService.get(),
      debitNotes: this._DebitNotesService.get(),
      credits: this._CreditsService.get(),
      invoices: this._InovicesService.get(),
      rateSheets: this._RateSheetService.getItems(),
      supplierOrders: this._SupplierOrderService.getItem(),
      customerOrders: this._CustomerOrderSerivce.getItems(),
      estimates: this._EstimatesService.getItems(),
      complaints: this._ComplaintsService.get()
    }).subscribe((data) => {
      this.ShippingMethodList = data.shippingMethods;
      this.CurrenciesList = data.currencies;
      this.priceTypeLits = data.priceTypes;
      this.TrafficTypeList = data.trafficTypes;
      this.ExchangeRatesList = data.exchangeRates;
      this.DebitNotesList = data.debitNotes;
      this.CredistList = data.credits;
      this.InovicesList = data.invoices;
      this.RateSheetList = data.rateSheets;
      this.SupplierOrdersList = data.supplierOrders;
      this.CustomerOrderList = data.customerOrders;
      this.EstimatesList = data.estimates;
      this.ComplaintsList = data.complaints;
  
      this.updateTable(); // Now update table after all data is fetched
    });
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

  getInovices = () => {
    this._InovicesService.get().subscribe(
      (response: Invoices[]) => {
        this.InovicesList = response;
      }
    )
  }

  getRateSheets = () => {
    this._RateSheetService.getItems().subscribe(
      (response: RateSheet[]) => {
        this.RateSheetList = response; 
      }
    )
  }

  getSupplierOrders = () => {
    this._SupplierOrderService.getItem().subscribe(
      (response: SupplierOrders[]) => {
        this.SupplierOrdersList = response;
      }
    );
  }

  getCustomerOrders = () => {
    this._CustomerOrderSerivce.getItems().subscribe(
      (response: CustomerOrder[]) => {
        this.CustomerOrderList = response; 
      }
    )
  }

  getEstimates = () => {
    this._EstimatesService.getItems().subscribe(
      (response: Estimates[]) => {
        this.EstimatesList = response
      }
    );
  }

  getComplaints = () => {
    this._ComplaintsService.get().subscribe(
      (response: Complaints[]) => {
        this.ComplaintsList = response;
      }
    )
  }

  updateTable = () => {
    this.cdr.detectChanges();
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
        items: this.ComplaintsList.length,
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
      },
      {
        title: "Fakture",
        items: this.InovicesList.length,
        url: "/dashboard/coders/commercials/invoices"
      },
      {
        title: "Tečajna lista",
        items: this.RateSheetList.length,
        url: "/dashboard/coders/commercials/rate/sheet"
      },
      {
        title: "Naročila dobavitelja",
        items: this.SupplierOrdersList.length,
        url: "/dashboard/coders/commercials/supplier/orders"
      },
      {
        title: "Naročila kupcev",
        items: this.CustomerOrderList.length,
        url: "/dashboard/coders/commercials/customer/orders"
      },
      {
        title: "Predračuni",
        items: this.EstimatesList.length,
        url: "/dashboard/coders/commercials/estimates"
      }
    ]
  }

}
