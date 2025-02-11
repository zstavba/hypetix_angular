import { Component, OnInit } from '@angular/core';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { ActivatedRoute } from '@angular/router';
import { AlternativeChipersService } from '../../../../../auth/API/alternative-chipers.service';
import { AlternativeChipers } from '../../../../../auth/Classes/alternative-chipers';
import { AlternativeChippersPartners } from '../../../../../auth/Classes/alternative-chippers-partners';
import { ChipperAddPartnerComponent } from '../../../../components/chipper-add-partner/chipper-add-partner.component';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import $ from 'jquery';
import { AlternativeChippersShopping } from '../../../../../auth/Classes/alternative-chippers-shopping';
import { response } from 'express';
import { UpdateArticleShoppingComponent } from '../../../../components/update-article-shopping/update-article-shopping.component';
@Component({
  selector: 'app-ca-article-view',
  imports: [
    NavigationsComponent,
    ChipperAddPartnerComponent,
    NotificationComponent,
    UpdateArticleShoppingComponent
  ],
  templateUrl: './ca-article-view.component.html',
  styleUrl: './ca-article-view.component.scss'
})
export class CaArticleViewComponent implements OnInit{

  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();
  public routeID: string | null = '';
  public ChipperInfo: AlternativeChipers = new AlternativeChipers();
  public partnersList: Array<AlternativeChippersPartners> = new Array<AlternativeChippersPartners>();
  public systemMessage: string = '';
  public ShoppingInfo: AlternativeChippersShopping = new AlternativeChippersShopping();


  constructor(
    private _SessionService: SessionService,
    private router: ActivatedRoute,
    private _AlternativChipperService: AlternativeChipersService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.routeID = this.router.snapshot.paramMap.get('id');
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
        title: "Artikli",
        url:  'dashboard/coders/articles',
      },
      {
        title: "Ogled podatkov",
        url: 'dashboard/coders/articles/articls/view/'+this.routeID
      }
    ];
    this.getInformation();
    this.getPartners();
    this.getShoppingInfo();

  }

  getInformation = () => {
    this._AlternativChipperService.getInformation(this.routeID).subscribe(
      (response: AlternativeChipers) => {
        this.ChipperInfo = response;
      }
    )
  }

  getPartners = () => {
    this._AlternativChipperService.getPartners(this.routeID).subscribe(
      (response: AlternativeChippersPartners[]) => {
        this.partnersList = response; 
      }
    )
  }

  getProfileImage = (image: string): string => {
    if(image == null){
      return "/assets/images/avatar.jpg";
    }else {
      return image;
    }
  }

  onNotify = (message: string) => {
    this.systemMessage = message;
    $('.article_view_notification').fadeIn();
    setTimeout(() => {
      this.systemMessage = "";
      $('.article_view_notification').fadeOut();  
    },4000);
    this.getPartners();
  }

  openAddPartnerModal = () => {
    $('.add-partner-modal').fadeIn();
  }

  deletePartner = (ID: number) => {
    this._AlternativChipperService.deletePartner(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message)
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

  getShoppingInfo = () => {
    this._AlternativChipperService.getShoppingInformation(this.routeID).subscribe(
      (response: AlternativeChippersShopping) => {
        this.ShoppingInfo = response;
      }
    )
  }


}
