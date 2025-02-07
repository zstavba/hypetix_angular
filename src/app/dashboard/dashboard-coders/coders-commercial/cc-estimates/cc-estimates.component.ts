import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { EstimatesService } from '../../../../../auth/API/estimates.service';
import $ from 'jquery';
import { CreateEstimatesModalComponent } from '../../../../components/create-estimates-modal/create-estimates-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Estimates } from '../../../../../auth/Classes/estimates';
import { SearchEstimatesPipe } from '../../../../../auth/Pipes/search-estimates.pipe';
import { Observable } from 'rxjs';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { UpdateEstimatesModalComponent } from '../../../../components/update-estimates-modal/update-estimates-modal.component';
import { UploadEstimatesModalComponent } from '../../../../components/upload-estimates-modal/upload-estimates-modal.component';

@Component({
  selector: 'app-cc-estimates',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NavigationsComponent,
    NotificationComponent,
    CreateEstimatesModalComponent,
    NgxPaginationModule,
    SearchEstimatesPipe,
    UpdateEstimatesModalComponent,
    UploadEstimatesModalComponent
  ],
  templateUrl: './cc-estimates.component.html',
  styleUrl: './cc-estimates.component.scss'
})
export class CcEstimatesComponent implements OnInit {

  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();
  public systemMessage: string = '';
  public ipp: number = 9;
  public p: any; 
  public EstimatesList: Array<Estimates> = new Array<Estimates>();
  public searchEstimate: string = '';
  public selectedEstimate: Estimates = new Estimates();

  constructor(
    private _SessionService: SessionService,
    private _EstimatesService: EstimatesService
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
        title: "Predračuni",
        url: '/dashboard/coders/commercials/estimates'
      }
    ];
    this.getEstimates();
  }

  onNotify = (message: string) => {
    this.systemMessage = message;
    $('.estimates_notification').fadeIn();
    setTimeout(() => {
      this.systemMessage = "";
      $('.estimates_notification').fadeOut();
        
    },4000);
  }

  openCreateEstimatesModal = () => {
    $('.create_estimates_modal').fadeIn();
  }

  getEstimates = () => {
    this._EstimatesService.getItems().subscribe(
      (response: Estimates[]) => {
        this.EstimatesList = response;
      }
    )
  }

  deleteItem = (ID: number) => {
    this._EstimatesService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
    this.getEstimates();
  }
  
  updateItem = (item: Estimates) => {
    this.selectedEstimate = item;
    $('.update_estimates_modal').fadeIn();
  }

  openUploadModal = () => {
    $('.upload_estimates_modal').fadeIn();
  }


}
