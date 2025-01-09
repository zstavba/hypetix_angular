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
@Component({
  selector: 'app-cd-delivery-conditions',
  imports: [
    RouterLink,
    UpdateDeliveryConditionsModalComponent,
    CreateDeliveryConditionsModalComponent,
    UploadDeliveryConditionsModalComponent,
    NotificationComponent,
    NgxPaginationModule
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

  constructor(
    private _DCService: DeliveryConditionsService
  ){}

  ngOnInit(): void {
    this.getDeliverConditions();
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
