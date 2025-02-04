import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UpdateDeliveryConditionsModalComponent } from '../../../../components/update-delivery-conditions-modal/update-delivery-conditions-modal.component';
import { CreateDeliveryConditionsModalComponent } from '../../../../components/create-delivery-conditions-modal/create-delivery-conditions-modal.component';
import { UploadDeliveryConditionsModalComponent } from '../../../../components/upload-delivery-conditions-modal/upload-delivery-conditions-modal.component';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import $ from 'jquery';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Generator } from '../../../../../auth/functions/generator';
import { DeliveryConditions } from '../../../../../auth/Classes/delivery-conditions';
import { DeliveryConditionsService } from '../../../../../auth/API/delivery-conditions.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
@Component({
  selector: 'app-cd-delivery-conditions',
  imports: [
    UpdateDeliveryConditionsModalComponent,
    CreateDeliveryConditionsModalComponent,
    UploadDeliveryConditionsModalComponent,
    NotificationComponent,
    NgxPaginationModule,
    NavigationsComponent
  ],
  templateUrl: './cd-delivery-conditions.component.html',
  styleUrl: './cd-delivery-conditions.component.scss'
})
export class CdDeliveryConditionsComponent implements OnInit {

  public systemMessage: string = '';
  public DCList: Array<DeliveryConditions> = new Array<DeliveryConditions>();
  public selectedDCItem: DeliveryConditions = new DeliveryConditions();
  public ipp: number = 9;
  public p: any; 
  public UserInformation: User | null = new User();
  public URLsList: Array<any> = new Array<any>();



  constructor(
    private _SessionService: SessionService,
    private _DCService: DeliveryConditionsService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.getDeliverConditions();
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
        title: "Splošno",
        url:  '/dashboard/coders/defaults',
      },
      {
        title: "Dobavni pogoji",
        url: '/dashboard/coders/default/delivery/conditions'
      }
    ];
  }

  onNotify = (message: string) => {
    $('.delivery_condition_notification').fadeIn();
    this.systemMessage = message;
    setTimeout(() => {
      $('.delivery_condition_notification').fadeOut();
      this.systemMessage = "";  
    },4000);
  }

  toggleCreateDCModal = () => {
    $('.create_delivery_conditions_modal').fadeIn();
  }

  toggleUploadDCModal = () => {
    $('.upload_delivery_conditions_modal').fadeIn();
  }

  getDeliverConditions = () => {
    this._DCService.getItems().subscribe(
      (response: DeliveryConditions[]) => {
        this.DCList = response; 
      }
    )
  }

  deleteItem = (ID: number) => {
    this._DCService.deleteItem(ID).subscribe(
      (response: any) => {
        this.getDeliverConditions();
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }
  
  toggleUpdateModal = (deliver: DeliveryConditions) => {
    this.selectedDCItem = deliver;
    $('.update_delivery_conditions_modal').fadeIn();
  }
}
