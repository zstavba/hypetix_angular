import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { SessionService } from '../../../../../auth/API/session.service';
import { User } from '../../../../../auth/Classes/user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { CreateClassificationModalComponent } from '../../../../components/create-classification-modal/create-classification-modal.component';
import $ from 'jquery';
import { Classification } from '../../../../../auth/Classes/classification';
import { ClassificationService } from '../../../../../auth/API/classification.service';
import { UpdateClassificationModalComponent } from '../../../../components/update-classification-modal/update-classification-modal.component';
@Component({
  standalone: true,
  selector: 'app-ca-classifications',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NavigationsComponent,
    NgxPaginationModule,
    NotificationComponent,
    CreateClassificationModalComponent,
    UpdateClassificationModalComponent
  ],
  templateUrl: './ca-classifications.component.html',
  styleUrl: './ca-classifications.component.scss'
})
export class CaClassificationsComponent implements OnInit {
  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();
  public ipp: number = 9;
  public p: any; 
  public systemMessage: string = '';
  public ClassificationsList: Array<Classification> = new Array<Classification>();
  public selectedClassification: Classification = new Classification();

  constructor(
    private _SessionService: SessionService,
    private _ClassificationsService: ClassificationService
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
        title: "Artikli",
        url:  'dashboard/coders/articles',
      },
      {
        title: "Klasifikacija",
        url: 'dashboard/coders/articles/classifications'
      }
    ];
    this.UserInformation = this._SessionService.getSessionData();
    this.getCL();
  }

  onNotify = (message: string) => {
    this.systemMessage = message; 
    $('.classification_notification').fadeIn();
    setTimeout(() => {
      this.systemMessage = ""; 
      $('.classification_notification').fadeOut();    
    },4000)
  }

  openCreateClassificationModal = () => {
    $('.create_classification_modal').fadeIn();
  }

  getCL = () => {
    this._ClassificationsService.get().subscribe(
      (response: Classification[]) => {
        this.ClassificationsList = response;
      }
    )
  }

  deleteItem  = (ID: number) => {
    this._ClassificationsService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

  toggleUpdateModal = (item: Classification) => {
    $('.update_classification_modal').fadeIn();
    this.selectedClassification = item;
  }

}
