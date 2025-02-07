import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { CreateComplaintsModalComponent } from '../../../../components/create-complaints-modal/create-complaints-modal.component';
import $ from 'jquery';
import { ComplaintsService } from '../../../../../auth/API/complaints.service';
import { Complaints } from '../../../../../auth/Classes/complaints';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateComplaintsModalComponent } from '../../../../components/update-complaints-modal/update-complaints-modal.component';
import { SearchComplaintsPipe } from '../../../../../auth/Pipes/search-complaints.pipe';
@Component({
  selector: 'app-cc-complains',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NavigationsComponent,
    NotificationComponent,
    CreateComplaintsModalComponent,
    NgxPaginationModule,
    UpdateComplaintsModalComponent,
    SearchComplaintsPipe
  ],
  templateUrl: './cc-complains.component.html',
  styleUrl: './cc-complains.component.scss'
})
export class CcComplainsComponent implements OnInit{

  public UserInformation: User | null = new User();
  public URLsList: Array<any> = new Array<any>();
  public systemMessage: string = '';
  public ComplaintsList: Array<Complaints> = new Array<Complaints>();
  public ipp: number = 9;
  public p: any;
  public selectedComplaintItem: Complaints = new Complaints();
  public searchComplain: string = '';

  constructor(
      private _SessionService: SessionService,
      private _ComplaintsService: ComplaintsService
  ){}

  ngOnInit(): void {
    this.getComplaints();
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
        title: "Tipi reklamacij",
        url: '/dashboard/coders/commercials/complaints'
      }
    ];
  }

  onNotify = (message: string) => {
    this.systemMessage = message;
    $('.complaints_notificvation').fadeIn();
    setTimeout(() => {
       this.systemMessage = message;
       $('.complaints_notificvation').fadeIn(); 
    },4000)
  }

  openCreateComplaintsModal = () => {
    alert("OK");
    $('.create_complaints_modal').fadeIn();
  }

  getComplaints = () => {
    this._ComplaintsService.get().subscribe(
      (response: Complaints[]) => {
        this.ComplaintsList = response;
      }
    )
  }

  deleteItem = (ID: number) => {
    this._ComplaintsService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
    this.getComplaints();
  }

  updateItem = (item: Complaints) => {
    $('.update_complaints_modal').fadeIn();
    this.selectedComplaintItem = item; 
  }

}
