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
import { CamBasicsComponent } from './cam-basics/cam-basics.component';
import { CamPartnersComponent } from './cam-partners/cam-partners.component';
import { CamShoppingComponent } from './cam-shopping/cam-shopping.component';

@Component({
  standalone: true,
  selector: 'create-article-modal',
  imports: [
    NotificationComponent,
    FormsModule,
    ReactiveFormsModule,
    NotificationComponent,
    AngularEditorModule,
    CamBasicsComponent,
    CamPartnersComponent,
    CamShoppingComponent
  ],
  templateUrl: './create-article-modal.component.html',
  styleUrl: './create-article-modal.component.scss'
})
export class CreateArticleModalComponent  implements OnInit{

  public ArticleTypeData: Array<any> = new Array<any>();
  public systemMessage: string = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _AlternativeChipperService: AlternativeChipersService
  ){}

  ngOnInit(): void {

  }


  closeCreateArticleTypeModal = () => {
    $('.create_article_modal').fadeOut()
  }

  getSelectedBasicInformation = (information: any) => {
    this.ArticleTypeData.push({
      basic_information: information
    });
  }

  getSelectedPartnerInformation = (partners:  any) => {
    this.ArticleTypeData.push({
      partners: partners
    });
  }

  getSelectedShoppingInformation = (shopping: any) => {
    this.ArticleTypeData.push({
      shopping: shopping
    });
  }

  onNotify = (message: string) => {
    $('.create_article_notification').fadeIn();
    this.systemMessage = message; 
    setTimeout(() => {
      $('.create_article_notification').fadeOut();
      this.systemMessage = "";     
    },4000)
  }


  saveData = () => {
    this._AlternativeChipperService.createArticle(this.ArticleTypeData).subscribe(
      (response: any) => {
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    ) 
 }

}
