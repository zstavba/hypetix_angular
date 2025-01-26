import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { CreateCreditsModalComponent } from '../../../../components/create-credits-modal/create-credits-modal.component';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import $ from 'jquery';
import { Credits } from '../../../../../auth/Classes/credits';
import { CreditsService } from '../../../../../auth/API/credits.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateCreditsModalComponent } from '../../../../components/update-credits-modal/update-credits-modal.component';
import { UploadCreditsModalComponent } from '../../../../components/upload-credits-modal/upload-credits-modal.component';
import { SearchCreditsPipe } from '../../../../../auth/Pipes/search-credits.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-cc-credits',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NavigationsComponent,
    CreateCreditsModalComponent,
    NotificationComponent,
    NgxPaginationModule,
    UpdateCreditsModalComponent,
    UploadCreditsModalComponent,
    SearchCreditsPipe
  ],
  templateUrl: './cc-credits.component.html',
  styleUrl: './cc-credits.component.scss'
})
export class CcCreditsComponent implements OnInit {

  public UserInformation: User | null = new User();
  public URLsList: Array<any> = new Array<any>();
  public systemMessage: string = '';
  public CreditsList: Array<Credits> = new Array<Credits>();
  public ipp: number = 9;
  public p: any; 
  public selectedCreditItem: Credits = new Credits(); 
  public searchCredits: string = '';



  constructor(
    private _SessionService: SessionService,
    private _CreditsService: CreditsService
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
        title: "Dobropisi",
        url: '/dashboard/coders/commercials/credits'
      }
    ];
    this.getCredits();
  }

  onNotify = (message: string) => {
    $('.credits_notification').fadeIn()
    this.systemMessage = message;
    setTimeout(() => {
      $('.credits_notification').fadeOut();
      this.systemMessage = '';
    },4000);
  }

  getCredits = () => {
    this._CreditsService.get().subscribe(
      (response: Credits[]) => {
        this.CreditsList = response; 
      }
    )
  }
  
  openCreateCreditsModal = () => {
    $('.create_credits_modal').fadeIn();
  }

  deleteItem = (ID: number) => {
    this._CreditsService.delete(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

  openUpdateModal = (item: Credits) => {
    $('.update_credits_modal').fadeIn();
    this.selectedCreditItem = item;
  }

  openUploadModal = () => {
    $('.upload_credits_modal').fadeIn();
  }

}
