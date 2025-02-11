import { Component, OnInit, Output,EventEmitter, RESPONSE_INIT } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { format } from 'path';
import { SessionService } from '../../../../auth/API/session.service';
import { MeassurmentUnitsService } from '../../../../auth/API/meassurment-units.service';
import { ComboBoxMenuComponent } from '../../combo-box-menu/combo-box-menu.component';
import { MeassurmentUnits } from '../../../../auth/Classes/meassurment-units';
import { User } from '../../../../auth/Classes/user';
import { UserService } from '../../../../auth/API/user.service';
import { validateHeaderName } from 'http';
import { Warehouse } from '../../../../auth/Classes/warehouse';
import { WarehouseService } from '../../../../auth/API/warehouse.service';
import { Classification } from '../../../../auth/Classes/classification';
import { ClassificationService } from '../../../../auth/API/classification.service';
import { ArticleType } from '../../../../auth/Classes/article-type';
import { ArticleTypeService } from '../../../../auth/API/article-type.service';
import { BankService } from '../../../../auth/API/bank.service';
import { Tax } from '../../../../auth/Classes/tax';
import { Country } from '../../../../auth/Classes/country';
import { TaxService } from '../../../../auth/API/tax.service';
import { Generator } from '../../../../auth/functions/generator';

@Component({
  selector: 'cam-basics',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ComboBoxMenuComponent
  ],
  templateUrl: './cam-basics.component.html',
  styleUrl: './cam-basics.component.scss'
})
export class CamBasicsComponent implements OnInit {
  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() basic_information: EventEmitter<any> = new EventEmitter<any>();

  public MuList: Array<MeassurmentUnits> = new Array<MeassurmentUnits>();
  public SuppliersList: Array<User> = new Array<User>();
  public WarehouseList: Array<Warehouse> = new Array<Warehouse>();
  public ClassificatioinsList: Array<Classification> = new Array<Classification>();
  public ArticleTypeList: Array<ArticleType> = new Array<ArticleType>();
  public TaxList: Array<Tax> = new Array<Tax>();
  public CountryList: Array<Country> = new Array<Country>();

  public generator: Generator = new Generator();

  public BasicGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    fk_mu_id: new FormControl(''),
    fk_supplier_id: new FormControl(''),
    fk_warehouse_id: new FormControl(''),
    fk_classification_id: new FormControl(''),
    fk_article_type_id: new FormControl(''),
    fk_country_id: new FormControl(''),
    fk_tax_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    title: new FormControl('',Validators.required),
    standart: new FormControl('',Validators.required),
    affiliation: new FormControl('',Validators.required),
    expiration_date: new FormControl('',Validators.required),
    margin: new FormControl('',Validators.required),
    width: new FormControl('',Validators.required),
    length: new FormControl('',Validators.required),
    height: new FormControl('',Validators.required),
    volume: new FormControl('',Validators.required)
  });

  constructor(
    private _SessionSerivce: SessionService,
    private _MuService: MeassurmentUnitsService,
    private _UserService: UserService,
    private _WarehouseService: WarehouseService,
    private _ClassificationService: ClassificationService,
    private _ArticleTypeService: ArticleTypeService,
    private _BankService: BankService,
    private _TaxService: TaxService
  ){}

  ngOnInit(): void {
    this.BasicGroup.patchValue({
      fk_user_id: JSON.stringify(this._SessionSerivce.getSessionData())
    });
    this.getUnits();
    this.getUsersType("suppliers");
    this.getWarehouse();
    this.getClassifications();
    this.getArticleTypes();
    this.getCountry();
    this.getTaxes();
  }

  getSelecteCombo = (selectedItem: any, item_type: string) => {
   switch(item_type){
    case 'fk_mu_id':
        this.BasicGroup.patchValue({
          fk_mu_id: JSON.stringify(selectedItem)
        });
      break;
    case 'fk_supplier_id':
        this.BasicGroup.patchValue({
          fk_supplier_id: JSON.stringify(selectedItem)
        });
      break;
    case 'fk_warehouse_id':
        this.BasicGroup.patchValue({
          fk_warehouse_id: JSON.stringify(selectedItem)
        });
      break;
    case 'fk_classification_id':
        this.BasicGroup.patchValue({
          fk_classification_id: JSON.stringify(selectedItem)
        });
      break;
    case 'fk_article_type_id':
      this.BasicGroup.patchValue({
        fk_article_type_id: JSON.stringify(selectedItem)
      });
    break;
    case 'fk_country_id':
      this.BasicGroup.patchValue({
        fk_country_id: JSON.stringify(selectedItem)
      });
    break;
    case 'fk_tax_id':
      this.BasicGroup.patchValue({
        fk_tax_id: JSON.stringify(selectedItem)
      });
    break;
   }
  }

  getUnits = () => {
    this._MuService.get().subscribe(
      (response: MeassurmentUnits[]) => {
        this.MuList= response;
      }
    )
  }
  
  getUsersType = (type: string) => {
    this._UserService.getByType(type).subscribe(
      (response: User[]) => {
        this.SuppliersList = response; 
      }
    )
  }

  getWarehouse = () => {
    this._WarehouseService.getList().subscribe(
      (response: Warehouse[]) => {
        this.WarehouseList = response; 
      }
    )
  }
  getClassifications = () => {
    this._ClassificationService.get().subscribe(
      (response: Classification[]) => {
        this.ClassificatioinsList = response;
      }
    )
  }

  getArticleTypes = () => {
    this._ArticleTypeService.get().subscribe(
      (response: ArticleType[]) => {
        this.ArticleTypeList = response;
      }
    );
  }

  getCountry = () => {
    this._BankService.getCountry().subscribe(
      (response: Country[]) => {
        this.CountryList = response;
      }
    )

  }

  getTaxes = () => {
    this._TaxService.get().subscribe(
      (response: Tax[]) => {
        this.TaxList = response;
      }
    )
  }


  setData = () => {
      this.systemMessage.emit("Podatki so uspešno poknjižen !")
      this.basic_information.emit(this.BasicGroup.value);
  }
    
}
