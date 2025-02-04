import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { RatesheetService } from '../../../../../auth/API/ratesheet.service';
import { RateSheet } from '../../../../../auth/Classes/rate-sheet';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { CreateRateSheetModalComponent } from '../../../../components/create-rate-sheet-modal/create-rate-sheet-modal.component';
import $ from 'jquery';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpadteRateSheetModalComponent } from '../../../../components/upadte-rate-sheet-modal/upadte-rate-sheet-modal.component';
import { SearchRateSheetsPipe } from '../../../../../auth/Pipes/search-rate-sheets.pipe';

@Component({
  selector: 'app-cc-rate-sheet',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NavigationsComponent,
    NotificationComponent,
    CreateRateSheetModalComponent,
    NgxPaginationModule,
    UpadteRateSheetModalComponent,
    SearchRateSheetsPipe
  ],
  templateUrl: './cc-rate-sheet.component.html',
  styleUrl: './cc-rate-sheet.component.scss'
})
export class CcRateSheetComponent implements OnInit {

  public systemMessage: string = '';
  public UserInformation: User | null = new User();
  public URLsList: Array<any> = new  Array<any>();
  public RateSheetsList: Array<RateSheet> = new Array<RateSheet>();
  public ipp: number = 9;
  public p: any; 
  public selectedRateSheetItem: RateSheet = new RateSheet();
  public searchRateSheet: string = '';

  constructor(
    private _SessionService: SessionService,
    private _RateSheetService: RatesheetService
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
        title: "Tečajna lista",
        url: '/dashboard/coders/commercials/rate/sheet'
      }
    ];
    this.UserInformation = this._SessionService.getSessionData();
    this.getRateSheets();
  }

  getRateSheets = () => {
    this._RateSheetService.getItems().subscribe(
      (response: RateSheet[]) => {
        this.RateSheetsList = response;
      }
    )
  }

  onNotify = (message: string) => {
    $('.rate_sheet_notification').fadeIn();
    this.systemMessage = message;
    setTimeout(() => {
      $('.rate_sheet_notification').fadeOut();
      this.systemMessage = '';
    },4000);
  }

  openCreateRateSheetModal = () => {
    $('.create_rate_sheet_modal').fadeIn();
  }

  deleteItem = (ID: number) => {
    this._RateSheetService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message)
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

  updateSelectedItem = (item: RateSheet) => {
    $('.update_rate_sheet_modal').fadeIn();
    this.selectedRateSheetItem = item; 
  }

}
