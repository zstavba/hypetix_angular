import { ChangeDetectorRef, Component, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlternativeChipers } from '../../../../auth/Classes/alternative-chipers';
import { Classification } from '../../../../auth/Classes/classification';
import { GroupType } from '../../../../auth/Classes/group-type';
import { ArticleType } from '../../../../auth/Classes/article-type';
import { MeassurmentUnits } from '../../../../auth/Classes/meassurment-units';
import { Tax } from '../../../../auth/Classes/tax';
import { CustomTariffs } from '../../../../auth/Classes/custom-tariffs';
import { GroupTypeService } from '../../../../auth/API/group-type.service';
import { response } from 'express';
import { ArticleTypeService } from '../../../../auth/API/article-type.service';
import { MeassurmentUnitsService } from '../../../../auth/API/meassurment-units.service';
import { TaxService } from '../../../../auth/API/tax.service';
import { CustomTariffsService } from '../../../../auth/API/custom-tariffs.service';
import { PerformanceWork } from '../../../../auth/Classes/performance-work';
import { PerformanceService } from '../../../../auth/API/performance.service';
import { ClassificationService } from '../../../../auth/API/classification.service';
import { AlternativeChipersService } from '../../../../auth/API/alternative-chipers.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-coders-articles',
  imports: [
    RouterLink
  ],
  templateUrl: './coders-articles.component.html',
  styleUrl: './coders-articles.component.scss'
})
export class CodersArticlesComponent implements OnInit{

  public tableItemsList: Array<any> = new Array<any>();
  public ChippersList: Array<AlternativeChipers> = new Array<AlternativeChipers>();
  public ClassificationsList: Array<Classification> = new Array<Classification>();
  public GroupList:Array<GroupType> = new Array<GroupType>();
  public ArticleTypeList: Array<ArticleType> = new Array<ArticleType>();
  public MeassurementUnitsList: Array<MeassurmentUnits> = new Array<MeassurmentUnits>();
  public TaxList: Array<Tax> = new Array<Tax>();
  public CustomTariffsList: Array<CustomTariffs> = new Array<CustomTariffs>();
  public PerformanceList: Array<PerformanceWork> = new Array<PerformanceWork>();


  constructor(
    private _GroupTypeService: GroupTypeService,
    private _ArticleTypeService: ArticleTypeService,
    private _MuService: MeassurmentUnitsService,
    private _TaxService: TaxService,
    private _CustomTariffsService: CustomTariffsService,
    private _PerformanceService: PerformanceService,
    private _ClassificationsService: ClassificationService,
    private _AlternativeChippersService: AlternativeChipersService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.loadData();
  }

    ngOnChanges(changes: SimpleChanges): void {
        if(
          changes["ChippersList"] ||
          changes["ClassificationsList"] ||
          changes["GroupList"] ||
          changes["ArticleTypeList"] || 
          changes["MeassurementUnitsList"] || 
          changes["TaxList"] ||
          changes["CustomTariffsList"]
        ){
          this.loadData()
        }      
    }


  loadData =  async () => {
    forkJoin({
      chippers: this._AlternativeChippersService.getItems(),
      classifications: this._ClassificationsService.get(),
      groups: this._GroupTypeService.get(),
      articleTypes: this._ArticleTypeService.get(),
      meassurementUnits: this._MuService.get(),
      taxes: this._TaxService.get(),
      customTariffs: this._CustomTariffsService.get(),
      performanceWork: this._PerformanceService.get()
    }).subscribe((results) => {
      // Assign results to corresponding lists
      this.ChippersList = results.chippers;
      this.ClassificationsList = results.classifications;
      this.GroupList = results.groups;
      this.ArticleTypeList = results.articleTypes;
      this.MeassurementUnitsList = results.meassurementUnits;
      this.TaxList = results.taxes;
      this.CustomTariffsList = results.customTariffs;
      this.PerformanceList = results.performanceWork;
  
      // Now that all data is loaded, update the table
      this.updateTableItemsList();
      this.cdr.detectChanges(); // Ensure UI refresh
    });
  }

  
  updateTableItemsList = () => {
    this.tableItemsList = [
      {
        title: "Artikli VSI ",
        items: this.ChippersList.length,
        category: "Artikli",
        url: '/dashboard/coders/articles/list/all',
      },
      {
        title: "Klasifikacija",
        items: this.ClassificationsList.length,
        category: "Klasifikacija",
        url: '/dashboard/coders/articles/classifications',
      },
      {
        title: "Skupine",
        items: this.GroupList.length,
        category: "Skupine",
        url: '/dashboard/coders/articles/groups',
      },
      {
        title: "Tipi Artiklov",
        items: this.ArticleTypeList.length,
        category: "Artikli",
        url: '/dashboard/coders/articles/article/types',
      },
      {
        title: "Merske Enote",
        items: this.MeassurementUnitsList.length,
        category: "Meska Enota",
        url: '/dashboard/coders/articles/meassurement/units',
      },
      {
        title: "Davki",
        items: this.TaxList.length,
        category: "Davek",
        url: '/dashboard/coders/articles/taxes',
      },
      {
        title: "Carinske Tarife",
        items: this.CustomTariffsList.length,
        category: "Tarife",
        url: '/dashboard/coders/articles/custom/tariffs',
      },
      {
        title: "Izvedbe",
        items: this.PerformanceList.length,
        category: "Izvedbe",
        url: '/dashboard/coders/articles/performance',
      },
    ];
  }
}
