import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CreateGroupModalComponent } from '../../../../components/create-group-modal/create-group-modal.component';
import $ from  'jquery';
import { GroupTypeService } from '../../../../../auth/API/group-type.service';
import { GroupType } from '../../../../../auth/Classes/group-type';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchGroupPipe } from '../../../../../auth/Pipes/search-group.pipe';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import {NgxPaginationModule} from 'ngx-pagination'; //
import { UpdateGroupTypeModalComponent } from '../../../../components/update-group-type-modal/update-group-type-modal.component';
import { UploadGroupsModalComponent } from '../../../../components/upload-groups-modal/upload-groups-modal.component';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';

@Component({
  standalone: true,
  selector: 'app-ca-groups',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NavigationsComponent,
    CreateGroupModalComponent,
    SearchGroupPipe,
    NotificationComponent,
    NgxPaginationModule,
    UpdateGroupTypeModalComponent,
    UploadGroupsModalComponent
  ],
  templateUrl: './ca-groups.component.html',
  styleUrl: './ca-groups.component.scss'
})
export class CaGroupsComponent implements OnInit {

  public GroupTypeList: Array<GroupType> = new Array<GroupType>();
  public searchGroupType: string = '';
  public systemMessage: string = '';
  public itemsPerPage: number = 9;
  public p: any;
  public GroupTypeInformation: GroupType = new GroupType();
  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();


  constructor(
    private _SessionService: SessionService,
    private _GroupTypeService: GroupTypeService
  ){}

  ngOnInit(): void {
    this.getGroupTypes(); 
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
        title: "Artikli",
        url:  'dashboard/coders/articles',
      },
      {
        title: "Skupine",
        url: 'dashboard/coders/articles/groups'
      }
    ];
  }

  toggleCreateGroupModal = () => {
    $('.create_group_modal').fadeIn()
  }

  getGroupTypes = () => {
    this._GroupTypeService.get().subscribe(
      (response: GroupType[]) => {
        this.GroupTypeList = response;
      }
    )
  }

  onNotify = (message: string) => {
    $('.group_type_notification').fadeIn();
    this.systemMessage = message;
    setTimeout(() => {
      $('.group_type_notification').fadeOut();
      this.systemMessage = '';
    },4000);
  }

  deleteItem = (ID: number) => {
    this._GroupTypeService.deleteItem(ID).subscribe(
      (response: any | string) => {
        this.getGroupTypes();
        this.onNotify(response.message)
      },
      (error: any | string) => {
        if(error.status == 404){
          this.systemMessage = 'Povezava do URLja ni bila najdena !'; 
        }
        this.onNotify(error.error.message);

      }
    )
  }

  toggleUpdateModal = (GT: GroupType) => {
    this.GroupTypeInformation = GT; 
    $('.update_group_type_modal').fadeIn()
  }

  toggleUploadModal = () => {
    $('.upload_groups_modal').fadeIn();
  }

}
