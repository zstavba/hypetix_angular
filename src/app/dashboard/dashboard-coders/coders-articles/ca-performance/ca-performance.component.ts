import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../../auth/API/session.service';
import { PerformanceService } from '../../../../../auth/API/performance.service';
import { PerformanceWork } from '../../../../../auth/Classes/performance-work';
import { User } from '../../../../../auth/Classes/user';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { CreatePerformanceModalComponent } from '../../../../components/create-performance-modal/create-performance-modal.component';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import $ from 'jquery';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdatePerformanceModalComponent } from '../../../../components/update-performance-modal/update-performance-modal.component';
import { UploadPerformanceModalComponent } from '../../../../components/upload-performance-modal/upload-performance-modal.component';
import { SearchPerformancePipe } from '../../../../../auth/Pipes/search-performance.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-ca-performance',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NavigationsComponent,
    CreatePerformanceModalComponent,
    NotificationComponent,
    NgxPaginationModule,
    UpdatePerformanceModalComponent,
    UploadPerformanceModalComponent,
    SearchPerformancePipe
  ],
  templateUrl: './ca-performance.component.html',
  styleUrl: './ca-performance.component.scss'
})
export class CaPerformanceComponent implements OnInit {

  public PerformanceWorkList: Array<PerformanceWork> = new Array<PerformanceWork>();
  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();
  public systemMessage: string = '';
  public ipp: number = 9;
  public p: any;
  public selectedPWItem: PerformanceWork = new PerformanceWork();
  public searchP: string = '';

  constructor(
    private _SessionService: SessionService,
    private _PerofrmanceService: PerformanceService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.getPerofrmance();
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
        title: "Izvedbe",
        url: 'dashboard/coders/articles/performance'
      }
    ];
  }

  getPerofrmance = () => {
    this._PerofrmanceService.get().subscribe(
      (response: PerformanceWork[]) => {
        this.PerformanceWorkList = response; 
      }
    )
  }

  onNotify = (message: string) => {
    $('.performance_notification').fadeIn();
    this.systemMessage = message;
    setTimeout(() => {
        $('.performance_notification').fadeOut();
        this.systemMessage = '';
    },4000);
  }

  openPerformanceModal = () => {
    $('.create_performance_modal').fadeIn();
  }

  deleteItem = (ID: number) => {
    this._PerofrmanceService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

  openUpdateModal = (item: PerformanceWork) => {
    this.selectedPWItem = item;
    $(`.update_performance_modal`).fadeIn();
  }

  openUploadModal = () => {
    $('.upload_performance_modal').fadeIn();
  }


}
