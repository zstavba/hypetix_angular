import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BankService } from '../../../../../auth/API/bank.service';
import $ from 'jquery';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { UpdateZipCodeModalComponent } from '../../../../components/update-zip-code-modal/update-zip-code-modal.component';
import { CreateZipCodeModalComponent } from '../../../../components/create-zip-code-modal/create-zip-code-modal.component';
import { UploadZipCodeModalComponent } from '../../../../components/upload-zip-code-modal/upload-zip-code-modal.component';
import { ZipCode } from '../../../../../auth/Classes/zip-code';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchZipCodePipe } from '../../../../../auth/Pipes/search-zip-code.pipe';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';

@Component({
  selector: 'app-cd-zip-code',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NotificationComponent,
    UpdateZipCodeModalComponent,
    CreateZipCodeModalComponent,
    UploadZipCodeModalComponent,
    NgxPaginationModule,
    SearchZipCodePipe,
    NavigationsComponent
  ],
  templateUrl: './cd-zip-code.component.html',
  styleUrl: './cd-zip-code.component.scss'
})
export class CdZipCodeComponent implements OnInit  {

  public systemMessage: string = '';
  public ZipCodeList: Array<ZipCode> = new Array<ZipCode>();
  public selectedZipCodeItem: ZipCode = new ZipCode();
  public ipp: number = 9;
  public p: any; 
  public searchZipCode: string = '';
  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();


  constructor(
    private _SessionService: SessionService,
    private _BankService: BankService
  ){}

  ngOnInit(): void {
    this.getZipCode();
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
        title: "Pošte",
        url: '/dashboard/coders/default/zipcode'
      }
    ];
    this.UserInformation = this._SessionService.getSessionData();
  }

  onNotify = (message: string) => {
    $('.zip_code_notification').fadeIn();
    this.systemMessage = message; 
    setTimeout(() => {
      $('.zip_code_notification').fadeOut();
      this.systemMessage = '';
    },4000);
  }

  toggleCreateZipCodeModal = () => {
    $('.create_zip_code_modal').fadeIn();
  }

  getZipCode = () => {
    this._BankService.getZipCode().subscribe(
      (response: ZipCode[]) => {
        this.ZipCodeList = response;
      }
    )
  }

  deleteZipCode = (ID: number) => {
    this._BankService.deleteZipCode(ID).subscribe(
      (response: any) => {
        this.getZipCode();
        this.onNotify(response.message)
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

  updateSelectedItem = (item: ZipCode) => {
    this.selectedZipCodeItem = item; 
    $('.update_zipcode_modal').fadeIn();
  }

  toggleUploadZipCodeModal = () => {
    $('.upload_zipcode_modal').fadeIn();
  }

}
