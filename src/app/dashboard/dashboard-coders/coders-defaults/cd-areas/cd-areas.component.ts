import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '../../../../../auth/Classes/user';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { SessionService } from '../../../../../auth/API/session.service';
import $ from 'jquery';
import { CreateAreasModalComponent } from '../../../../components/create-areas-modal/create-areas-modal.component';
import { BankService } from '../../../../../auth/API/bank.service';
import { Areas } from '../../../../../auth/Classes/areas';
import { response } from 'express';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateAreasModalComponent } from '../../../../components/update-areas-modal/update-areas-modal.component';
@Component({
  selector: 'app-cd-areas',
  imports: [
    NavigationsComponent,
    NotificationComponent,
    CreateAreasModalComponent,
    NgxPaginationModule,
    UpdateAreasModalComponent
  ],
  templateUrl: './cd-areas.component.html',
  styleUrl: './cd-areas.component.scss'
})
export class CdAreasComponent implements OnInit {

  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();
  public systemMessage: string = '';
  public AreasList: Array<Areas> = new Array<Areas>();
  public ipp: number = 9;
  public p: any; 
  public selectedAreaItem: Areas = new Areas();

  constructor(
    private cdr: ChangeDetectorRef,
    private _SessionService: SessionService,
    private _BankService: BankService
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
        title: "Splošno",
        url:  '/dashboard/coders/defaults',
      },
      {
        title: "Območja",
        url: '/dashboard/coders/default/areas'
      }
    ];
    this.UserInformation = this._SessionService.getSessionData();
    this.getAreas();
  }

  onNotify = (message: string) => {
    this.cdr.detectChanges();
    this.getAreas();
    this.systemMessage = message;
    $('.area_notification').fadeIn();
    setTimeout(() => {
      this.systemMessage = "";
      $('.area_notification').fadeOut();  
    },4000);
  }
  
  getAreas = () => {
    this._BankService.getAreas().subscribe(
      (response: Areas[]) => {
        this.AreasList = response;
      }
    )
  }


  openCreateModal = () => {
    $('.create_area_modal').fadeIn();
  }

  deleteItem = (ID: number) => {
    this._BankService.deleteAreaItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message)
      }
    )
  }

  openUpdateModal = (item: Areas) => {
    this.selectedAreaItem = item; 
    $('.update_areas_modal').fadeIn();
  }

}
