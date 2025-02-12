import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { CreateCharacteristicsModalComponent } from '../../../../components/create-characteristics-modal/create-characteristics-modal.component';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { CharacteristicsService } from '../../../../../auth/API/characteristics.service';
import { NavigationSkipped } from '@angular/router';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { Characteristics } from '../../../../../auth/Classes/characteristics';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateCharacteristicsModalComponent } from '../../../../components/update-characteristics-modal/update-characteristics-modal.component';
import { UploadCharacteristicsModalComponent } from '../../../../components/upload-characteristics-modal/upload-characteristics-modal.component';
import { SearchCharacteristicsPipe } from '../../../../../auth/Pipes/search-characteristics.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cp-characteristics',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NotificationComponent,
    CreateCharacteristicsModalComponent,
    NavigationsComponent,
    NgxPaginationModule,
    UpdateCharacteristicsModalComponent,
    UploadCharacteristicsModalComponent,
    SearchCharacteristicsPipe
  ],
  templateUrl: './cp-characteristics.component.html',
  styleUrl: './cp-characteristics.component.scss'
})
export class CpCharacteristicsComponent implements OnInit {

  public systemMessage: string = '';
  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();
  public CharacteristicsList: Array<Characteristics> = new Array<Characteristics>();
  public ipp: number = 9; 
  public p: any; 
  public selectedCharacteristicsItem: Characteristics = new Characteristics();
  public searchItem: string = '';

  constructor(
    private _SessionService: SessionService,
    private _CharacteristicsService: CharacteristicsService,
    private cdr: ChangeDetectorRef
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
        title: "Proizvodnja",
        url:  '/dashboard/coders/production',
      },
      {
        title: "Karakteristike kakovosti",
        url: '/dashboard/coders/production/characteristics'
      }
    ];
    this.getCharacteristics();
  }

  onNotify = (message: string) => {
    this.cdr.detectChanges();
    this.getCharacteristics();
    this.systemMessage = message; 
    $('.characteristics_notification').fadeIn();
    setTimeout(() => {
      this.systemMessage = ""; 
      $('.characteristics_notification').fadeOut();    
    },4000);
  }

  getCharacteristics = () => {
    this._CharacteristicsService.get().subscribe(
      (response: Characteristics[]) => {
        this.CharacteristicsList = response;
      }
    )
  }

  openCreateModal = () => {
    $('.create_characteristics_mnodal').fadeIn();
  }

  deleteObject = (ID: number) => {
    this._CharacteristicsService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

  updateSelectedItem = (item: Characteristics) => {
    this.selectedCharacteristicsItem = item; 
    $('.update_characteristics_modal').fadeIn();
  }

  openUploadModal = () => {
    $('.upload_characteristics_modal').fadeIn();

  }

}
