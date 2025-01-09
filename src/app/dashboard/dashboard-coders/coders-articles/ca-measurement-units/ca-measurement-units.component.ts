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
@Component({
  standalone: true,
  selector: 'app-ca-measurement-units',
  imports: [
    RouterLink,
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

  constructor(
    private _MeassurementUnistService: MeassurmentUnitsService
  ){}

  ngOnInit(): void {
    this.getUnits();
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
