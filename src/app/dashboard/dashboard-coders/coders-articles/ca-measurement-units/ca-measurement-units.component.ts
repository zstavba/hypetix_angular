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
    ReactiveFormsModule
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

  deleteItem = (ID: number) => {
    this._MeassurementUnistService.deleteUnit(ID).subscribe(
      (response: any) => {
        this.getUnits();
        $('.mu_notification').fadeIn();
        this.systemMessage = response.message;
        setTimeout(() => {
          $('.mu_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      },
      (error: any) => {
        $('.mu_notification').fadeIn();
        this.systemMessage = error.error.message;
        setTimeout(() => {
          $('.mu_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      }
    );
  }

}
