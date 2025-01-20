import { Component, OnInit } from '@angular/core';
import { TrafficTypeService } from '../../../../../auth/API/traffic-type.service';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrafficType } from '../../../../../auth/Classes/traffic-type';
import { CreateTrafficTypeModalComponent } from '../../../../components/create-traffic-type-modal/create-traffic-type-modal.component';
import $ from 'jquery';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchTrafficTypePipe } from '../../../../../auth/Pipes/search-traffic-type.pipe';
import { UpdateTrafficTypeModalComponent } from '../../../../components/update-traffic-type-modal/update-traffic-type-modal.component';
import { UploadTrafficTypeModalComponent } from '../../../../components/upload-traffic-type-modal/upload-traffic-type-modal.component';

@Component({
  selector: 'app-cc-traffic-type',
  imports: [
    NavigationsComponent,
    NotificationComponent,
    ReactiveFormsModule,
    FormsModule,
    CreateTrafficTypeModalComponent,
    NgxPaginationModule,
    SearchTrafficTypePipe,
    UpdateTrafficTypeModalComponent,
    UploadTrafficTypeModalComponent
  ],
  templateUrl: './cc-traffic-type.component.html',
  styleUrl: './cc-traffic-type.component.scss'
})
export class CcTrafficTypeComponent implements OnInit {

  public TrafficTypeList: Array<TrafficType> = new Array<TrafficType>();
  public URLsList: Array<any> = new  Array<any>();
  public UserInformation: User | null = new User();
  public systemMessage: string = '';
  public ipp: number = 9;
  public p: any;
  public searchTrafficType: string = '';
  public selectedTrafficTypeItem: TrafficType = new TrafficType();


  constructor(
    private _TrafficTypeService: TrafficTypeService,
    private _SessionService: SessionService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.getTrafficTypes();
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
        title: "Tip prometa",
        url: '/dashboard/coders/commercials/traffic/type'
      }
    ]
  }

  toggleCreateTrafficTypeModal = () => {
    $('.create_traffic_type_modal').fadeIn();
  }

  getTrafficTypes = () => {
    this._TrafficTypeService.get().subscribe(
      (response: TrafficType[]) => {
        this.TrafficTypeList = response; 
      }
    );
  }

  onNotify = (message: string) => {
    this.systemMessage = message; 
    $('.traffic_type_notification').fadeIn();
    setTimeout(() => {
      this.systemMessage = '';
      $('.traffic_type_notification').fadeOut();
    },4000)
  }

  deleteItem = (ID: number) => {
    this._TrafficTypeService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

  toggleUpdateTrafficTypeModal = (item: TrafficType) => {
    this.selectedTrafficTypeItem = item;
    $('.update_traffic_type_modal').fadeIn();
  }

  toggleUploadTrafficTypeModal = () => {
    $('.upload_traffic_type_modal').fadeIn();
  }
  
}
