import { Component, InputOptions, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import $ from 'jquery';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { InvoicesService } from '../../../../../auth/API/invoices.service';
import { Invoices } from '../../../../../auth/Classes/invoices';
import { response } from 'express';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { CreateInvoicesModalComponent } from '../../../../components/create-invoices-modal/create-invoices-modal.component';
import { UpdateInvoicesModalComponent } from '../../../../components/update-invoices-modal/update-invoices-modal.component';
import { UploadInvoicesModalComponent } from '../../../../components/upload-invoices-modal/upload-invoices-modal.component';
import { SearchInvoicesPipe } from '../../../../../auth/Pipes/search-invoices.pipe';


@Component({
  selector: 'app-cc-invoices',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NotificationComponent,
    NavigationsComponent,
    CreateInvoicesModalComponent,
    UpdateInvoicesModalComponent,
    UploadInvoicesModalComponent,
    SearchInvoicesPipe

  ],
  templateUrl: './cc-invoices.component.html',
  styleUrl: './cc-invoices.component.scss'
})
export class CcInvoicesComponent implements OnInit {

  public systemMessage: string = '';
  public URLsList: Array<any> = new Array<any>();
  public ipp: number = 9;
  public p: any; 
  public searchInovices: string = '';
  public UserInformation: User | null = new User();
  public InvociesList: Array<Invoices> = new Array<Invoices>();
  public selectedInvoice: Invoices = new Invoices();

  constructor(
    private _SessionService: SessionService,
    private _InoviceService: InvoicesService
  ){}

  ngOnInit(): void {
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
        title: "Fakture",
        url: '/dashboard/coders/commercials/inovices'
      }
    ];
    this.getInovices();
  }

  getInovices = () => {
    this._InoviceService.get().subscribe(
      (response: Invoices[]) => {
        this.InvociesList = response; 
      }
    )
  }
  
  onNotify = (message: string) => {
    $('.inovices_notification').fadeIn();
    this.systemMessage = message;
    setTimeout(() => {
      $('.inovices_notification').fadeOut();
      this.systemMessage = "";  
    },4000);
  }

  openCreateInovicesModal = () => {
    $('.create_invoices_modal').fadeIn();
  }

  deleteItem = (ID: number) => {
    this._InoviceService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

  toggleUpdateModal = (item: Invoices) => {
    $('.update_invoices_modal').fadeIn();
    this.selectedInvoice = item; 
  }

  openUploadModal = () => {
    $('.upload_invoices_modal').fadeIn();
  }


}
