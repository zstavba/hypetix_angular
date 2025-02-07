import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomTariffsService } from '../../../../../auth/API/custom-tariffs.service';
import { CustomTariffs } from '../../../../../auth/Classes/custom-tariffs';
import $ from 'jquery';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { CreateCustomTariffsModalComponent } from '../../../../components/create-custom-tariffs-modal/create-custom-tariffs-modal.component';
import { UpdateCustomTariffsModalComponent } from '../../../../components/update-custom-tariffs-modal/update-custom-tariffs-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchCustomTariffsPipe } from '../../../../../auth/Pipes/search-custom-tariffs.pipe';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';

@Component({
  standalone: true,
  selector: 'app-ca-custom-tariffs',
  imports: [
    NavigationsComponent,
    NotificationComponent,
    CreateCustomTariffsModalComponent,
    UpdateCustomTariffsModalComponent,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    SearchCustomTariffsPipe
  ],
  templateUrl: './ca-custom-tariffs.component.html',
  styleUrl: './ca-custom-tariffs.component.scss'
})
export class CaCustomTariffsComponent implements OnInit {

  public CustomTariffsList: Array<CustomTariffs> = new Array<CustomTariffs>();
  public systemMessage: string = '';
  public selectedCustomTariff: CustomTariffs = new CustomTariffs();
  public itemsPerPage: number = 9;
  public p: any; 
  public searchCT: string = '';
  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();


  constructor(
    private _SessionSerivce: SessionService,
    private _CustomTariffsService: CustomTariffsService
  ){}

  ngOnInit(): void {
    this.getTariffs();
    this.UserInformation = this._SessionSerivce.getSessionData();
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
        title: "Carinske tarife",
        url: 'dashboard/coders/articles/custom/tariffs'
      }
    ];
  }



  getTariffs = () => {
    this._CustomTariffsService.get().subscribe(
      (response: CustomTariffs[]) => {
        this.CustomTariffsList = response; 
      }
    )
  }

  toggleCreateCustomTariffsModal = () => {
    $('.create_custom_tariffs_modal').fadeIn();
  }

  updateSelectedItem = (tariff: CustomTariffs) => {
    this.selectedCustomTariff = tariff;
    $('.update_custom_tariff_modal').fadeIn();
  }

  deleteItem = (ID: number) => {
    this._CustomTariffsService.delete(ID).subscribe(
      (response: any) => {
        this.getTariffs();
        $('.custom_tariffs_notification').fadeIn();
        this.systemMessage = response.message;
        setTimeout(() => {
          $('.custom_tariffs_notification').fadeOut();
          this.systemMessage = "";    
        },4000);
      },
      (error: any) => {
        $('.custom_tariffs_notification').fadeIn();
        this.systemMessage = error.error.message;
        setTimeout(() => {
          $('.custom_tariffs_notification').fadeOut();
          this.systemMessage = "";    
        },4000)
      }
    )
  }

}
