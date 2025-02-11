import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WorkCenterClassification } from '../../../../auth/Classes/work-center-classification';
import { WorkCenterClassificationService } from '../../../../auth/API/work-center-classification.service';
import { Country } from '../../../../auth/Classes/country';
import { BankService } from '../../../../auth/API/bank.service';
import { Language } from '../../../../auth/Classes/language';
import { DeliveryConditions } from '../../../../auth/Classes/delivery-conditions';
import { PaymentTerms } from '../../../../auth/Classes/payment-terms';
import { PaymentTermsService } from '../../../../auth/API/payment-terms.service';
import { DeliveryConditionsService } from '../../../../auth/API/delivery-conditions.service';
import { ZipCode } from '../../../../auth/Classes/zip-code';
import { SectorService } from '../../../../auth/API/sector.service';
import { Sector } from '../../../../auth/Classes/sector';
import { Areas } from '../../../../auth/Classes/areas';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-coders-defaults',
  imports: [
    RouterLink
  ],
  templateUrl: './coders-defaults.component.html',
  styleUrl: './coders-defaults.component.scss'
})
export class CodersDefaultsComponent implements OnInit {

  public WorkCentersList: Array<WorkCenterClassification> = new Array<WorkCenterClassification>();
  public CountryList: Array<Country> = new Array<Country>();
  public TableItemsList: Array<any> = new Array<any>(); 
  public LanguagesList: Array<Language> = new Array<Language>();
  public DCList: Array<DeliveryConditions> = new Array<DeliveryConditions>();
  public PaymentTermsList: Array<PaymentTerms> = new Array<PaymentTerms>();
  public ZipCodeList: Array<ZipCode> = new Array<ZipCode>();
  public SectorList: Array<Sector> = new Array<Sector>();
  public AreaList: Array<Areas> = new Array<Areas>();

  constructor(
    private _WorkCenterService: WorkCenterClassificationService,
    private _BankService: BankService,
    private _PTService: PaymentTermsService,
    private _DCService: DeliveryConditionsService,
    private _SectorService: SectorService,
    private cdr: ChangeDetectorRef
    
  ){}

  ngOnInit(): void {
    this.loadData();
  }

  loadData = () => {
    forkJoin({
      workCenters: this._WorkCenterService.get(),
      countries: this._BankService.getCountry(),
      languages: this._BankService.getLanguage(),
      paymentTerms: this._PTService.getItems(),
      deliveryConditions: this._DCService.getItems(),
      zipCodes: this._BankService.getZipCode(),
      sectors: this._SectorService.getItems(),
      areas: this._BankService.getAreas()
    }).subscribe(response => {
      this.WorkCentersList = response.workCenters;
      this.CountryList = response.countries;
      this.LanguagesList = response.languages;
      this.PaymentTermsList = response.paymentTerms;
      this.DCList = response.deliveryConditions;
      this.ZipCodeList = response.zipCodes;
      this.SectorList = response.sectors;
      this.AreaList = response.areas;
      
      this.updateTableData();
    });
  };


  getWorkCenters = () => {
    this._WorkCenterService.get().subscribe(
      (response: WorkCenterClassification[]) => {
        this.WorkCentersList = response; 
      }
    )
  }

  getCountry = () => {
    this._BankService.getCountry().subscribe(
      (response: Country[]) => {
        this.CountryList = response; 
      }
    )
  }

  getLanguages = () => {
    this._BankService.getLanguage().subscribe(
      (response: Language[]) => {
        this.LanguagesList = response; 
      }
    )
  }

  getTerms = () => {
    this._PTService.getItems().subscribe(
      (response: PaymentTerms[]) => {
        this.PaymentTermsList = response; 
      }
    )
  }

  getDeliveryConditions = () => {
    this._DCService.getItems().subscribe(
      (response: DeliveryConditions[]) => {
        this.DCList = response; 
      }
    )
  }

  getZipCode = () => {
    this._BankService.getZipCode().subscribe(
      (response: ZipCode[]) => {
        this.ZipCodeList = response; 
      } 
    )
  }

  getSectors = () => {
    this._SectorService.getItems().subscribe(
      (response: Sector[]) => {
        this.SectorList = response;
      }
    )
  }

  getAreas = () => {
    this._BankService.getAreas().subscribe(
      (response: Areas[]) => {
        this.AreaList = response; 
      }
    )
  }

  
  updateTableData = () => {
    this.TableItemsList = [
      {
        title: "Delovni Centri",
        items: this.WorkCentersList.length,
        category: "Delovni center",
        url: '/dashboard/coders/defaults/work/centers',
      },
      {
        title: "Države",
        items: this.CountryList.length,
        category: "Država",
        url: '/dashboard/coders/defaults/country',
      },
      {
        title: "Jeziki",
        items: this.LanguagesList.length,
        category: "Jezik",
        url: '/dashboard/coders/defaults/languages',
      },
      {
        title: "Kontrolni Plan",
        items: this.LanguagesList.length,
        category: "Kontrolni Plan",
        url: '/dashboard/coders/defaults/control/plan',
      },
      {
        title: "Dobavni Pogoji",
        items: this.DCList.length,
        category: "Dobavni Pogoji",
        url: '/dashboard/coders/defaults/delivery/conditions',
      },
      {
        title: "Plačilni Pogoji",
        items: this.PaymentTermsList.length,
        category: "Plačilni Pogoji",
        url: '/dashboard/coders/defaults/payment/terms',
      },
      {
        title: "Pošte",
        items: this.ZipCodeList.length,
        category: "Pošte",
        url: '/dashboard/coders/defaults/zip/code',
      },
      {
        title: "Sektor",
        items: this.SectorList.length,
        category: "Sektor",
        url: '/dashboard/coders/defaults/sector',
      },
      {
        title: "Območja",
        items: this.AreaList.length,
        category: "Območja",
        url: '/dashboard/coders/defaults/areas',
      },
    ]
  }


}
