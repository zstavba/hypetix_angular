import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import $ from 'jquery';
import { CreateShipppingMethodModalComponent } from '../../../../components/create-shippping-method-modal/create-shippping-method-modal.component';
import { UploadShipppingMethodModalComponent } from '../../../../components/upload-shippping-method-modal/upload-shippping-method-modal.component';
import { UpdateShipppingMethodModalComponent } from '../../../../components/update-shippping-method-modal/update-shippping-method-modal.component';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { ShippingMethodService } from '../../../../../auth/API/shipping-method.service';
import { ShippingMethod } from '../../../../../auth/Classes/shipping-method';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchShippingMethodPipe } from '../../../../../auth/Pipes/search-shipping-method.pipe';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';

@Component({
  selector: 'app-cc-shipping-method',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NotificationComponent,
    CreateShipppingMethodModalComponent,
    UploadShipppingMethodModalComponent,
    UpdateShipppingMethodModalComponent,
    NgxPaginationModule,
    SearchShippingMethodPipe,
    NavigationsComponent
  ],
  templateUrl: './cc-shipping-method.component.html',
  styleUrl: './cc-shipping-method.component.scss'
})
export class CcShippingMethodComponent implements OnInit {

  public systemMessage: string = '';
  public ShippingMethodList: Array<ShippingMethod> = new Array<ShippingMethod>();
  public selectedShippingMethod: ShippingMethod = new ShippingMethod();
  public ipp: number = 9;
  public p: any; 
  public searchMethod: string = '';
  public URLsList: Array<any> = new  Array<any>();

  public UserInformation: User | null = new User();

  constructor(
    private _SessionService: SessionService,
    private _ShippingMethodService: ShippingMethodService
  ){}


  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.getShippingMethods();
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
        title: "Načini odprem",
        url: '/dashboard/coders/commercials/shipping/method'
      }
    ]
  }

  onNotify = (message: string) => {
    $('.shipping_method_notification').fadeIn();
    this.systemMessage = message;
    setTimeout(() => {
      $('.shipping_method_notification').fadeOut();
      this.systemMessage = "";
      
    },4000)
  }

  toggleCreateSMModal = () => {
    $('.create_shipping_method_modal').fadeIn();
  }

  toggleUploadSMModal = () => {
    $('.upload_shipping_method_modal').fadeIn();
  }

  toggleUpdateMethodModal = (item: ShippingMethod) => {
    this.selectedShippingMethod = item; 
    $('.update_shipping_method_modal').fadeIn();
  }

  getShippingMethods = () => {
    this._ShippingMethodService.get().subscribe(
      (response: ShippingMethod[]) => {
        this.ShippingMethodList = response;
      }
    )
  }
  deleteItem = (ID: number) => {
    this._ShippingMethodService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message);
      }, 
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
    this.getShippingMethods();
  }

}
