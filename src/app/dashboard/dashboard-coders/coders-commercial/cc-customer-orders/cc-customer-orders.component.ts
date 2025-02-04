import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import $ from 'jquery'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from "../../../../components/notification/notification.component";
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { CreateCustomerOrderModalComponent } from '../../../../components/create-customer-order-modal/create-customer-order-modal.component';
import { CustomerOrderService } from '../../../../../auth/API/customer-order.service';
import { CustomerOrder } from '../../../../../auth/Classes/customer-order';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchCustomerOrderPipe } from '../../../../../auth/Pipes/search-customer-order.pipe';
import { UpdateCustomerOrderModalComponent } from '../../../../components/update-customer-order-modal/update-customer-order-modal.component';
import { UploadCustomerOrderModalComponent } from '../../../../components/upload-customer-order-modal/upload-customer-order-modal.component';
@Component({
  selector: 'app-cc-customer-orders',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NotificationComponent,
    NavigationsComponent,
    CreateCustomerOrderModalComponent,
    NgxPaginationModule,
    SearchCustomerOrderPipe,
    UpdateCustomerOrderModalComponent,
    UploadCustomerOrderModalComponent
],
  templateUrl: './cc-customer-orders.component.html',
  styleUrl: './cc-customer-orders.component.scss'
})
export class CcCustomerOrdersComponent implements OnInit {
  
  public URLsList: Array<any> = new  Array<any>();
  public UserInformation: User | null = new User();
  public systemMessage: string = '';
  public CustomerOrderList: Array<CustomerOrder> = new Array<CustomerOrder>();
  public ipp: number = 9;
  public p: any; 
  public searchCustomerOrder: string = '';
  public selectedCustomerOrderItem: CustomerOrder = new CustomerOrder();

  constructor(
      private _SessionService: SessionService,
      private _CustomerOrderService: CustomerOrderService
  ){}

  ngOnInit(): void {
    this.getOrders();
    this.UserInformation = this._SessionService.getSessionData();
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
        title: "Naročila kupcev",
        url: '/dashboard/coders/commercials/customer/orders'
      }
    ];
  }

  
  onNotify = (message: string) => {
    $('.customer_order_notification').fadeIn();
    this.systemMessage = message;
    setTimeout(() => {
      $('.customer_order_notification').fadeOut();
      this.systemMessage = '';
    },4000);
  }

  toggleCreateCOModal = () => {
    $('.create-customer-order-modal').fadeIn();
  }

  getOrders = () => {
    this._CustomerOrderService.getItems().subscribe(
      (response: CustomerOrder[]) => {
        this.CustomerOrderList = response;
      }
    )
  }

  deleteItem = (ID: number) => {
    this._CustomerOrderService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message)
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
    this.getOrders();
  }

  updateCustomerOrder = (item: CustomerOrder) => {
    this.selectedCustomerOrderItem = item; 
    $('.update-customer-order-modal').fadeIn();
  }

  toggleUploadModal = () => {
    $('.upload-customer-order-modal').fadeIn();
  }


}
