import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { CurrencieService } from '../../../../../auth/API/currencie.service';
import $ from 'jquery';
import { Currencie } from '../../../../../auth/Classes/currencie';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { CreateCurrencieModalComponent } from '../../../../components/create-currencie-modal/create-currencie-modal.component';
import { UpdateCurrencieModalComponent } from '../../../../components/update-currencie-modal/update-currencie-modal.component';
import { UploadCurrencieModalComponent } from '../../../../components/upload-currencie-modal/upload-currencie-modal.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchCurrenciePipe } from '../../../../../auth/Pipes/search-currencie.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';

@Component({
  selector: 'app-cc-currencie',
  imports: [
    NotificationComponent,
    CreateCurrencieModalComponent,
    UpdateCurrencieModalComponent,
    UploadCurrencieModalComponent,
    ReactiveFormsModule,
    FormsModule,
    SearchCurrenciePipe,
    NgxPaginationModule,
    NavigationsComponent
  ],
  templateUrl: './cc-currencie.component.html',
  styleUrl: './cc-currencie.component.scss'
})
export class CcCurrencieComponent implements OnInit {

  public UserInformation: User | null = new User();
  public systemMessage: string = '';
  public CurrenciesList: Array<Currencie> = new Array<Currencie>(); 
  public searchCurrencie: string = ''; 
  public selectedCurrencieItem: Currencie = new Currencie();
  public ipp: number = 9;
  public p: any; 
  public URLsList: Array<any> = new  Array<any>();



  constructor(
    private _SessionService: SessionService,
    private _CurrencieService: CurrencieService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.getCurrencies();
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
        title: "Valuta",
        url: '/dashboard/coders/commercials/currencie'
      }
    ]
  }

  getCurrencies = () => {
    this._CurrencieService.get().subscribe(
      (response: Currencie[]) => {
        this.CurrenciesList  = response; 
      }
    )
  }

  onNotify = (message: string) => {
    $('.currencie_notification').fadeIn();
    this.systemMessage = message;
    setTimeout(() => {
      $('.currencie_notification').fadeOut();
      this.systemMessage = '';
    },4000);
  }

  openCreateCurrencieModal = () => {
    $('.create_currencie_modal').fadeIn();
  }

  deleteItem = (ID: number) => {
    this._CurrencieService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

  toggleUpdateModal = (item: Currencie) => {
    this.selectedCurrencieItem = item; 
    $('.update_curencie_modal').fadeIn();
  }

}
