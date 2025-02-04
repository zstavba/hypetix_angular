import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { CreateSupplierOrderModalComponent } from '../../../../components/create-supplier-order-modal/create-supplier-order-modal.component';
import $ from 'jquery';
import { SupplierOrders } from '../../../../../auth/Classes/supplier-orders';
import { SupplierOrdersService } from '../../../../../auth/API/supplier-orders.service';
import { UpdateSupplierOrderModalComponent } from '../../../../components/update-supplier-order-modal/update-supplier-order-modal.component';
import { SearchSupplierOrderPipe } from '../../../../../auth/Pipes/search-supplier-order.pipe';
import { UploadSupplierOrderModalComponent } from '../../../../components/upload-supplier-order-modal/upload-supplier-order-modal.component';
@Component({
  selector: 'app-cc-supplier-orders',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NavigationsComponent,
    NotificationComponent,
    NgxPaginationModule,
    CreateSupplierOrderModalComponent,
    UpdateSupplierOrderModalComponent,
    SearchSupplierOrderPipe,
    UploadSupplierOrderModalComponent,
    
  ],
  templateUrl: './cc-supplier-orders.component.html',
  styleUrl: './cc-supplier-orders.component.scss'
})
export class CcSupplierOrdersComponent implements OnInit {
  
  public URLsList: Array<any> = new  Array<any>();
  public UserInformation: User | null = new User();
  public systemMessage: string = '';
  public SupplierOrderList: Array<SupplierOrders> = new Array<SupplierOrders>();
  public selectedSupplierOrderItem: SupplierOrders = new SupplierOrders();
  public searchSupplier: string = '';
  public ipp: number = 9;
  public p : any; 

  constructor(
    private _SessionService: SessionService,
    private _SupplierOrderService: SupplierOrdersService
  ){}

  ngOnInit(): void {
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
        title: "Naročila dobavitelja",
        url: '/dashboard/coders/commercials/supplier/orders'
      }
    ];
    this.UserInformation = this._SessionService.getSessionData();
    this.getSupplierOrders();
  }


  onNotify = (message: string) => {
    $('.supplier_order_notification').fadeIn();
    this.systemMessage = message;
    setTimeout(() => {
      $('.supplier_order_notification').fadeOut();
      this.systemMessage = '';
    },4000);
  }

  openCreateSoModal = () => {
    $('.create_supplier_order_modal').fadeIn();
  }

  getSupplierOrders  = () => {
    this._SupplierOrderService.getItem().subscribe(
      (response: SupplierOrders[]) => {
        this.SupplierOrderList = response;
      }

    )
  }

  deleteItem = (ID: number) => {
    this._SupplierOrderService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

  updateItem = (item: SupplierOrders) => {
    this.selectedSupplierOrderItem = item;
    $('.update_supplier_order_modal').fadeIn();
  }

  openUploadSOModal = () => {
    $('.upload_supplier_order_modal').fadeIn();
  }

}
