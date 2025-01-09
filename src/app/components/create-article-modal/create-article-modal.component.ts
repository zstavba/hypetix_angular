import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { AlternativeChipersService } from '../../../auth/API/alternative-chipers.service';
import { MeassurmentUnitsService } from '../../../auth/API/meassurment-units.service';
import { MeassurmentUnits } from '../../../auth/Classes/meassurment-units';
import { ArticleTypeService } from '../../../auth/API/article-type.service';
import { ArticleType } from '../../../auth/Classes/article-type';
import { WarehouseService } from '../../../auth/API/warehouse.service';
import { Warehouse } from '../../../auth/Classes/warehouse';
import { response } from 'express';
import { CustomTariffsService } from '../../../auth/API/custom-tariffs.service';
import { CustomTariffs } from '../../../auth/Classes/custom-tariffs';
import { Country } from '../../../auth/Classes/country';
import { BankService } from '../../../auth/API/bank.service';
import { ClassificationService } from '../../../auth/API/classification.service';
import { Classification } from '../../../auth/Classes/classification';
import { NotificationComponent } from '../notification/notification.component';
import { User } from '../../../auth/Classes/user';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { isPlatformBrowser  } from '@angular/common';
const isBrowser = typeof window !== 'undefined';
import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  standalone: true,
  selector: 'create-article-modal',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NotificationComponent,
    AngularEditorModule
  ],
  templateUrl: './create-article-modal.component.html',
  styleUrl: './create-article-modal.component.scss'
})
export class CreateArticleModalComponent  implements OnInit{

  public isArticleVisible: boolean = false; 
  public isArticleTracable: boolean = false; 

  public MUList: Array<MeassurmentUnits> = new Array<MeassurmentUnits>();
  public selectedMUItem: MeassurmentUnits = new MeassurmentUnits();
  public selectedMUItemActive: boolean = false; 

  public ArticleTypeList: Array<ArticleType> = new Array<ArticleType>();
  public selectedArticleTypeItem: ArticleType = new ArticleType();
  public selectedArticleTypeItemActive: boolean = false; 

  public WarehouseList: Array<Warehouse> = new Array<Warehouse>();
  public selectedWarehouseItem: Warehouse = new Warehouse();
  public selectedWarehouseItemActive: boolean = false; 

  public CustomTariffsList: Array<CustomTariffs> = new Array<CustomTariffs>();
  public selectedCTItem: CustomTariffs = new CustomTariffs();
  public selectedCTItemActive: boolean = false; 

  public CountryList: Array<Country> = new Array<Country>();
  public selectedCountryItem: Country = new Country();
  public selectedCountryItemActive: boolean = false; 

  public ClassificationList: Array<Classification> = new Array<Classification>();
  public selectedClassificationItem: Classification = new Classification();
  public selectedClassificationItemActive: boolean = false; 

  public systemMessage: string = '';
  public UserInformation: User | null = new User();
  public itemSpecifications: string = '';

  public ChipperGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    title: new FormControl('',Validators.required),
    specifications: new FormControl("",Validators.required),
    price: new FormControl('', Validators.required),
    ident: new FormControl('',Validators.required)
  })


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _SessionService: SessionService,
    private _AlternativeChiperService:AlternativeChipersService,
    private _MuService: MeassurmentUnitsService,
    private _ArticleTypeService: ArticleTypeService,
    private _WarehouseService: WarehouseService,
    private _CustomTariffsService: CustomTariffsService,
    private _BankService: BankService,
    private _ClassificationService: ClassificationService
  ){}

  ngOnInit(): void {
      this.UserInformation = this._SessionService.getSessionData();
      this.ChipperGroup.patchValue({
        fk_user_id: this.UserInformation
      });
  
    }


  closeCreateArticleTypeModal = () => {
    $('.create_article_modal').fadeOut()
  }

  toggleComboBoxMenu = (item: string) => {
    $(`.${item}`).fadeToggle();
  }

  setVisibility = () => {
    this.isArticleVisible = true;
    this.ChipperGroup.patchValue({
      visibility: this.isArticleVisible
    })
  }

  setTracability = () => {
    this.isArticleTracable = true;
    this.ChipperGroup.patchValue({
      trecability: this.isArticleTracable
    });
  }

  saveData = () => {
    this.ChipperGroup.patchValue({
      specifications: this.itemSpecifications
    });
    this._AlternativeChiperService.createArticle(this.ChipperGroup.value).subscribe(
      (response: any) => {
        $('.create_article_notification').fadeIn();
        this.systemMessage = response.message; 
        setTimeout(() => {
          $('.create_article_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      },
      (error: any) => {
        $('.create_article_notification').fadeIn();
        this.systemMessage = error.error.message; 
        setTimeout(() => {
          $('.create_article_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      }
    )
  }

}
