import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WorkCenterClassificationService } from '../../../../../auth/API/work-center-classification.service';
import { WorkCenterClassification } from '../../../../../auth/Classes/work-center-classification';
import { CreateWorkCenterModalComponent } from '../../../../components/create-work-center-modal/create-work-center-modal.component';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import $ from 'jquery';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateWorkCenterModalComponent } from '../../../../components/update-work-center-modal/update-work-center-modal.component';
import { SearchWorkCentersPipe } from '../../../../../auth/Pipes/search-work-centers.pipe';

@Component({
  selector: 'app-cd-work-centers',
  imports: [
    RouterLink,
    CreateWorkCenterModalComponent,
    NotificationComponent,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    UpdateWorkCenterModalComponent,
  ],
  templateUrl: './cd-work-centers.component.html',
  styleUrl: './cd-work-centers.component.scss'
})
export class CdWorkCentersComponent implements OnInit {

  public WorkCentersList: Array<WorkCenterClassification> = new Array<WorkCenterClassification>();
  public systemMessage: string = '';
  public searchWCC: string = '';
  public itemsPerPage: number = 9; 
  public p: any; 
  public selectedWorkCenter: WorkCenterClassification = new WorkCenterClassification();

  constructor(
    private _WorkCenterService: WorkCenterClassificationService
  ){}

  ngOnInit(): void {
      this.getWorkCenters();
  }


  getWorkCenters = () => {
    this._WorkCenterService.get().subscribe(
      (response: WorkCenterClassification[]) => {
        this.WorkCentersList = response;
      }
    )
  }

  toggleCreateWorkCenterModal = () => {
    $('.create_work_center_modal').fadeIn();
  }

  deleteItem = (ID: number) => {
    this._WorkCenterService.deleteItem(ID).subscribe(
      (response: any) => {
        this.getWorkCenters();
        $('.workcetner_notification').fadeIn();
        this.systemMessage = response.message; 
        setTimeout(() => {
          $('.workcetner_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      },
      (error: any) => {
        $('.workcetner_notification').fadeIn();
        this.systemMessage = error.error.message; 
        setTimeout(() => {
          $('.workcetner_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      }
    )
  }

  updateSelectedItem = (Item: WorkCenterClassification) => {
    this.selectedWorkCenter = Item; 
    console.log(this.selectedWorkCenter);
    $('.update_work_center_modal').fadeIn();
  }

}
