import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CreateMessurementUnitModalComponent } from '../../../../components/create-messurement-unit-modal/create-messurement-unit-modal.component';
import { MeassurmentUnitsService } from '../../../../../auth/API/meassurment-units.service';
import { MeassurmentUnits } from '../../../../../auth/Classes/meassurment-units';
import $ from 'jquery';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { MuSearchPipe } from '../../../../../auth/Pipes/mu-search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { UpdateMeassurementUnitsModalComponent } from '../../../../components/update-meassurement-units-modal/update-meassurement-units-modal.component';
import { UploadMeassurementUnitsModalComponent } from '../../../../components/upload-meassurement-units-modal/upload-meassurement-units-modal.component';
@Component({
  standalone: true,
  selector: 'app-ca-measurement-units',
  imports: [
    NavigationsComponent,
    CreateMessurementUnitModalComponent,
    NgxPaginationModule,
    NotificationComponent,
    MuSearchPipe,
    FormsModule,
    ReactiveFormsModule,
    UpdateMeassurementUnitsModalComponent,
    UploadMeassurementUnitsModalComponent
  ],
  templateUrl: './ca-measurement-units.component.html',
  styleUrl: './ca-measurement-units.component.scss'
})
export class CaMeasurementUnitsComponent implements OnInit {

  public MeassurementUnitsList: Array<MeassurmentUnits> = new Array<MeassurmentUnits>();
  public itemsPerPage: number = 9;
  public p: any; 
  public systemMessage: string = '';
  public searchUnit: string = '';
  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();
  public selectedMUItem: MeassurmentUnits = new MeassurmentUnits();

  constructor(
    private _SessionService: SessionService,
    private _MeassurementUnistService: MeassurmentUnitsService
  ){}

  ngOnInit(): void {
    this.getUnits();
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
        title: "Merske Enote",
        url: 'dashboard/coders/articles/meassurement/units'
      }
    ];
  }

  getUnits = () => {
    this._MeassurementUnistService.get().subscribe(
      (response: MeassurmentUnits[]) => {
        this.MeassurementUnitsList = response;
      }
    )
  }

  toggleCreateModal = () => { 
    $('.create_mu_modal').fadeIn();
  }

  onNotify = (message: string) => {
    $('.mu_notification').fadeIn();
    this.systemMessage = message;
    setTimeout(() => {
      $('.mu_notification').fadeOut();
      this.systemMessage = '';
    },4000);
  }

  deleteItem = (ID: number) => {
    this._MeassurementUnistService.deleteUnit(ID).subscribe(
      (response: any) => {
        this.getUnits();
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    );
  }

  openUpdateModal = (item: MeassurmentUnits) => {
    this.selectedMUItem = item; 
    $('.update_mu_modal').fadeIn();
  }

  toggleUploadModal = () => {
    $('.upload_mu_modal').fadeIn();
  }

}
