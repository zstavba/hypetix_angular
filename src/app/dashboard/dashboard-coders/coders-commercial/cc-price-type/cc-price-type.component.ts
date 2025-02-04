import { Component, OnInit } from '@angular/core';
import { PriceTypeService } from '../../../../../auth/API/price-type.service';
import { PriceType } from '../../../../../auth/Classes/price-type';
import { RouterLink } from '@angular/router';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import $ from 'jquery';
import { SessionService } from '../../../../../auth/API/session.service';
import { User } from '../../../../../auth/Classes/user';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { CreatePriceTypeModalComponent } from '../../../../components/create-price-type-modal/create-price-type-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdatePriceTypeModalComponent } from '../../../../components/update-price-type-modal/update-price-type-modal.component';
import { SearchPriceTypePipe } from '../../../../../auth/Pipes/search-price-type.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadPriceTypeModalComponent } from '../../../../components/upload-price-type-modal/upload-price-type-modal.component';


@Component({
  selector: 'app-cc-price-type',
  imports: [
    NotificationComponent,
    NavigationsComponent,
    CreatePriceTypeModalComponent,
    NgxPaginationModule,
    UpdatePriceTypeModalComponent,
    SearchPriceTypePipe,
    ReactiveFormsModule,
    FormsModule,
    UploadPriceTypeModalComponent
  ],
  templateUrl: './cc-price-type.component.html',
  styleUrl: './cc-price-type.component.scss'
})
export class CcPriceTypeComponent implements OnInit {

  public PriceTypeList: Array<PriceType> = new Array<PriceType>();
  public systemMessage: string = '';
  public UserInformation: User | null = new User();
  public URLsList: Array<any> = new  Array<any>();
  public ipp: number = 9;
  public p: any;
  public selectedPriceType: PriceType = new PriceType();
  public searchPT: string = '';

  constructor(
    private _SessionService: SessionService,
    private _PriceTypeService: PriceTypeService
  ){}

  ngOnInit(): void {
    this.getPriceTypes();
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
        title: "Tipi Cen",
        url: '/dashboard/coders/commercials/price/type'
      }
    ]
    this.UserInformation = this._SessionService.getSessionData();
  }

  onNotify = (message: string) => {
    this.systemMessage = message; 
    $('.price_type_notification').fadeIn();
    setTimeout(() => {
      this.systemMessage = '';
      $('.price_type_notification').fadeOut();
    },4000);

  }

  getPriceTypes = () => {
    this._PriceTypeService.get().subscribe(
      (response: PriceType[]) => {
        this.PriceTypeList = response;
      }
    )
  }

  toggleCreatePriceTypeModal = () =>  {
    $('.create_price_type_modal').fadeIn();
  }

  deleteItem = (ID: number) => {
    this._PriceTypeService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message);
        this.getPriceTypes();
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

  toggleUpdateModal = (item: PriceType) => {
      this.selectedPriceType = item; 
      $('.update_price_type_modal').fadeIn();
  }

  toggleUploadModal = () => {
    $('.upload_price_type_modal').fadeIn();
  }

}
